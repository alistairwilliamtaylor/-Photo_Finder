import { PhotoInfo } from "../Interfaces";
import "./GalleryImage.css";

interface GalleryImageProps {
  photo: PhotoInfo;
}

function GalleryImage({ photo }: GalleryImageProps) {
  return (
    <img
      src={photo.url}
      key={photo.id}
      alt={photo.altText}
      className="gallery-image"
    />
  );
}

export default GalleryImage;