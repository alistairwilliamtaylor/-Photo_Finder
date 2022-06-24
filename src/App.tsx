import "./App.css";
import SearchPrompt from "./components/SearchPrompt";
import PhotoGallery from "./components/PhotoGallery";
import { useUnsplashAPI } from "./hooks/useUnsplashAPI";
import { NUMBEROFIMAGES } from "./constants";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <div className="content-container">
        <h1>{NUMBEROFIMAGES} images</h1>
        <SearchPrompt />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
