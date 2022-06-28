import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchPrompt.css";

function SearchPrompt() {
  const [searchKeyword, updateSearchKeyword] = useState(
    () => localStorage.getItem("searchKeyword") || ""
  );

  // const [inputError, setInputError] = useState(false);

  let navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  useEffect(() => {
    localStorage.setItem("searchKeyword", searchKeyword);
  }, [searchKeyword]);

  const submitSearch = () => {
    navigate(`/${searchKeyword}`);
    updateSearchKeyword("");
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        // error
        // helperText="Must be a full word"
        label="show me images of:"
        inputProps={{ style: { color: "#61dafb", textAlign: "center" } }}
        InputLabelProps={{ style: { color: "#61dafb" } }}
        value={searchKeyword}
        onChange={(e) => updateSearchKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Box textAlign="center" sx={{ p: 2 }}>
        <Button variant="contained" onClick={submitSearch} color="primary">
          go!
        </Button>
      </Box>
    </>
  );
}

export default SearchPrompt;
