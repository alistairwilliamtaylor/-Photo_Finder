import { useEffect } from "react";
import { NUMBEROFIMAGES } from "../constants";
import { UnsplashParams } from "../hooks/useUnsplashAPI";
import { PhotoInfo } from "../Interfaces";
import GalleryImage from "./GalleryImage";
import "./PhotoGallery.css";

interface PhotoGalleryProps {
  photos: PhotoInfo[];
  error: boolean;
}

function PhotoGallery({ photos, error }: PhotoGalleryProps) {
  return (
    <section className="photo-gallery">
      {error && <h3>ooops... something went wrong</h3>}
      {error || photos.map((photo) => <GalleryImage photo={photo} />)}
    </section>
  );
}

export default PhotoGallery;
