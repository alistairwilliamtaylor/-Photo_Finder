import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NUMBEROFIMAGES } from "../constants";
import { useUnsplashAPI } from "../hooks/useUnsplashAPI";
import PhotoGallery from "./PhotoGallery";

export default function SpecifiedImages() {
  const { error, photos, getPhotos } = useUnsplashAPI();
  const { searchKeyword } = useParams();

  useEffect(() => {
    getPhotos("search/photos", {
      query: searchKeyword,
      client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
      per_page: NUMBEROFIMAGES,
    });
  }, [getPhotos, searchKeyword]);

  return <PhotoGallery error={error} photos={photos} />;
}
