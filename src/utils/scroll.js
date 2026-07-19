/**
 * Función de desplazamiento suave manual (Smooth Scroll)
 * @param {string} id - El ID del elemento al que se quiere desplazar.
 * @param {number} offset - El desplazamiento adicional (ej: altura del navbar).
 * @param {number} duration - Duración de la animación en ms.
 */
export const smoothScrollTo = (id, offset = 0, duration = 800) => {
  const element = document.getElementById(id);
  if (!element) return;

  const start = window.pageYOffset;
  const elementPosition = element.getBoundingClientRect().top;
  const target = elementPosition + start - offset;
  const distance = target - start;
  let startTime = null;

  // Curva de aceleración/desaceleración (Easing function)
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, start, distance, duration);
    
    window.scrollTo(0, run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
