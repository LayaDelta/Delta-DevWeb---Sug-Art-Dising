import "./image.css";

const Image = ({ src, alt }) => {
  return <img className="responsive-image rounded-full shadow" src={src} alt={alt} />
};

export default Image;