import { useEffect } from "react";
import { NUMBEROFIMAGES } from "../constants";
import { UnsplashParams } from "../hooks/useUnsplashAPI";
import { PhotoInfo } from "../Interfaces";
import GalleryImage from "./GalleryImage";
import "./PhotoGallery.css";

interface PhotoGalleryProps {
  photos: PhotoInfo[];
  error: boolean;
  getPhotos: (url: string, providedParams: UnsplashParams) => void;
}

function PhotoGallery({ photos, error, getPhotos }: PhotoGalleryProps) {
  useEffect(() => {
    getPhotos("photos/random", {
      client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
      count: NUMBEROFIMAGES,
    });
  }, []);

  return (
    <section className="photo-gallery">
      {photos.map((photo) => (
        <GalleryImage photo={photo} />
      ))}
    </section>
  );
}

export default PhotoGallery;
