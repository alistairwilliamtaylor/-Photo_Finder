import React, { useState } from "react";
import "./SearchPrompt.css"

interface SearchPromptProps {
    search: (searchKeyword: string) => void;
}

function SearchPrompt({search}: SearchPromptProps) {
  const [searchKeyword, updateSearchKeyword] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitSearch()
    }
  };

  const submitSearch = () => {
    search(searchKeyword);
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
