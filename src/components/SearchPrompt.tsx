import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchPrompt.css";

function SearchPrompt() {
  const [searchKeyword, updateSearchKeyword] = useState(
    () => localStorage.getItem("searchKeyword") || ""
  );

  useEffect(() => {
    localStorage.setItem("searchKeyword", searchKeyword);
  }, [searchKeyword]);

  
  const [inputError, setInputError] = useState(false);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };
  
  const handleButtonClick = () => handleSearchSubmit()
  
  const handleSearchSubmit = () => {
    const hasInputError = validateInput();
    setInputError(hasInputError);
    hasInputError || submitSearch();
  };
  
  const validateInput = () => !/^[a-zA-Z\s]+$/.test(searchKeyword);
  
  let navigate = useNavigate();
  
  const submitSearch = () => {
    navigate(`/${searchKeyword}`);
    updateSearchKeyword("");
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        error={inputError}
        helperText={inputError ? "No special characters allowed" : ""}
        label="show me images of:"
        inputProps={{ style: { color: "#61dafb", textAlign: "center" } }}
        InputLabelProps={{ style: { color: "#61dafb" } }}
        value={searchKeyword}
        onChange={(e) => updateSearchKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Box textAlign="center" sx={{ p: 2 }}>
        <Button variant="contained" onClick={handleButtonClick} color="primary">
          go!
        </Button>
      </Box>
    </>
  );
}

export default SearchPrompt;
