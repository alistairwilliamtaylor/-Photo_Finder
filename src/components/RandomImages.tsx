import { useEffect } from "react";
import { NUMBEROFIMAGES } from "../constants";
import { useUnsplashAPI } from "../hooks/useUnsplashAPI";
import PhotoGallery from "./PhotoGallery";

export default function RandomImages() {
  const { error, photos, getPhotos } = useUnsplashAPI();

  useEffect(() => {
    getPhotos("photos/random", {
      client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
      count: NUMBEROFIMAGES,
    });
  }, [getPhotos]);

  return <PhotoGallery error={error} photos={photos} />;
}
