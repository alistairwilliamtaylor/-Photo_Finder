import React, { useState } from "react";
import { NUMBEROFIMAGES } from "../constants";
import { UnsplashParams } from "../hooks/useUnsplashAPI";
import "./SearchPrompt.css";

interface SearchPromptProps {
  getPhotos: (url: string, providedParams: UnsplashParams) => void;
}

function SearchPrompt({ getPhotos }: SearchPromptProps) {
  const [searchKeyword, updateSearchKeyword] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  const submitSearch = () => {
    getPhotos("/search/photos", {
      query: searchKeyword,
      client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
      per_page: NUMBEROFIMAGES,
    });
    updateSearchKeyword("");
  };

  return (
    <>
      <label htmlFor="image-search-input">show me images of :</label>
      <input
        type="text"
        id="image-search-input"
        value={searchKeyword}
        onChange={(e) => updateSearchKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={submitSearch}>go!</button>
    </>
  );
}

export default SearchPrompt;
