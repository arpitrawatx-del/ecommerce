export default function ProductImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-48 object-contain ${className}`}
      loading="lazy"
    />
  );
}
