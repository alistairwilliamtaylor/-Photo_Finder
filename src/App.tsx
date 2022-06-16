import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [searchKeyword, updateSearchKeyword] = useState("");

  const [photos, updatePhotos] = useState(["hello"]);

  const searchForImages = () => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: searchKeyword,
          client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
        },
      })
      .then(
        (response) => {
          console.log(response);
          const whatIWant = response.data.results.map(
            (info: any) => info.urls.small
          );
          updatePhotos(whatIWant);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="App">
      <input
        type="text"
        value={searchKeyword}
        onChange={(e) => updateSearchKeyword(e.target.value)}
      />
      <button onClick={() => searchForImages()}>Show me the pictures!</button>
      <section className="photo-gallery">
        {photos.map((photo) => {
          return <img src={photo} />;
        })}
      </section>
    </div>
  );
}

export default App;
