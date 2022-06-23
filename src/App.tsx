import "./App.css";
import SearchPrompt from "./components/SearchPrompt";
import PhotoGallery from "./components/PhotoGallery";
import { useUnsplashAPI } from "./hooks/useUnsplashAPI";
import { NUMBEROFIMAGES } from "./constants";

function App() {
  const { error, photos, getPhotos } = useUnsplashAPI()

  return (
    <div className="App">
      <div className="content-container">
        <h1>{NUMBEROFIMAGES} images</h1>
        <SearchPrompt getPhotos={getPhotos} />
        <PhotoGallery photos={photos} error={error} getPhotos={getPhotos} />
      </div>
    </div>
  );
}

export default App;
