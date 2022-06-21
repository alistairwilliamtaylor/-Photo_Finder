import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SearchPrompt from "./components/SearchPrompt";
import PhotoGallery from "./components/PhotoGallery";
import { PhotoInfo } from "./Interfaces";

const NUMBEROFIMAGES = 9;

interface APIPhotoResultsData {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
}

function App() {
  useEffect(() => {
    getInitialRandomImages();
  }, []);

  const [photos, updatePhotos] = useState<PhotoInfo[]>([]);
  const [hasApiError, updateHasApiError] = useState(false);

  const getInitialRandomImages = () => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
          count: NUMBEROFIMAGES,
        },
      })
      .then(
        (response) => {
          updateHasApiError(false);
          const initialPhotos = response.data.map(
            (photoInfo: APIPhotoResultsData) => {
              return {
                id: photoInfo.id,
                altText: photoInfo.alt_description,
                url: photoInfo.urls.small,
              };
            }
          );
          updatePhotos(initialPhotos);
        },
        (error) => {
          updateHasApiError(true);
        }
      );
  };

  const searchForImages = (searchKeyword: string) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: searchKeyword,
          client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
          per_page: NUMBEROFIMAGES,
        },
      })
      .then(
        (response) => {
          updateHasApiError(false);
          const newPhotos = response.data.results.map(
            (photoInfo: APIPhotoResultsData) => {
              return {
                id: photoInfo.id,
                altText: photoInfo.alt_description,
                url: photoInfo.urls.small,
              };
            }
          );
          updatePhotos(newPhotos);
        },
        (error) => {
          updateHasApiError(true);
        }
      );
  };

  return (
    <div className="App">
      <div className="content-container">
        <h1>{NUMBEROFIMAGES} images</h1>
        <SearchPrompt search={searchForImages} />
        {hasApiError && <h3>Oops! Something went wrong</h3>}
        {hasApiError || <PhotoGallery photos={photos} />}
      </div>
    </div>
  );
}

export default App;
