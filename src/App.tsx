import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const numberOfImages = 9;

interface APIPhotoResultsData{
  id: string,
  alt_description: string,
  urls: {
    small: string,
  }
}

interface PhotoInfo{
    id: string,
    altText: string,
    url: string,
}

function App() {
  const [searchKeyword, updateSearchKeyword] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchForImages();
    }
  };

  useEffect(() => {
    getInitialRandomImages()
  }, [])
  
  const getInitialRandomImages = () => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
          count: numberOfImages,
        },
      })
      .then(
        (response) => {
          const initialPhotos = response.data.map((photoInfo: APIPhotoResultsData) => {
            return {
              id: photoInfo.id,
              altText: photoInfo.alt_description,
              url: photoInfo.urls.small,
            };
          });
          updatePhotos(initialPhotos);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  const [photos, updatePhotos] = useState<PhotoInfo[]>([]);

  const searchForImages = () => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: searchKeyword,
          client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
          per_page: numberOfImages,
        },
      })
      .then(
        (response) => {
          console.log(response);
          const newPhotos = response.data.results.map((photoInfo: APIPhotoResultsData) => {
            return {
              id: photoInfo.id,
              altText: photoInfo.alt_description,
              url: photoInfo.urls.small,
            };
          });
          updatePhotos(newPhotos);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="App">
      <h1>{numberOfImages} Images</h1>
      <label htmlFor="image-search-input">Show me {numberOfImages} images of:</label>
      <input
        type="text"
        id="image-search-input"
        value={searchKeyword}
        onChange={(e) => updateSearchKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => searchForImages()}>Show me the pictures!</button>
      <section className="photo-gallery">
        {photos.map((photo) => {
          return <img src={photo.url} key={photo.id} alt={photo.altText} />;
        })}
      </section>
    </div>
  );
}

export default App;
