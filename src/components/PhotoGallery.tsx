import { PhotoInfo } from "../Interfaces";
import GalleryImage from "./GalleryImage";
import "./PhotoGallery.css";

interface PhotoGalleryProps {
  photos: PhotoInfo[];
}

function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <section className="photo-gallery">
      {photos.map((photo) => (
        <GalleryImage photo={photo} />
      ))}
    </section>
  );
}

export default PhotoGallery;
