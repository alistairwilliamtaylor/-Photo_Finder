import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NUMBEROFIMAGES } from "../constants";
import { UnsplashParams } from "../hooks/useUnsplashAPI";
import "./SearchPrompt.css";

function SearchPrompt() {
  const [searchKeyword, updateSearchKeyword] = useState("");
  let navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  const submitSearch = () => {
    navigate(`/${searchKeyword}`)
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
