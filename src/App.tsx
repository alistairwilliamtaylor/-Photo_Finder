import "./App.css";
import SearchPrompt from "./components/SearchPrompt";
import { NUMBEROFIMAGES } from "./constants";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

function App() {

  return (
    <div className="App">
      <div className="content-container">
        <Typography variant="h1" gutterBottom component="div">{NUMBEROFIMAGES} Images</Typography>
        <SearchPrompt />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
