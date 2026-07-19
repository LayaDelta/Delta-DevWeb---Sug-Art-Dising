import "./Image.css";

const Image = ({ src, alt, loading = "lazy" }) => {
  return (
    <img 
      className="responsive-image rounded-full shadow" 
      src={src} 
      alt={alt} 
      loading={loading}
    />
  );
};

export default Image;