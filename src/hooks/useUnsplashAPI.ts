import axios from "axios";
import { useState } from "react";
import { PhotoInfo } from "../Interfaces";

export function useUnsplashAPI() {
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState<PhotoInfo[]>([]);

  function getPhotos(url: string, providedParams: UnsplashParams) {
    axios
      .get(`https://api.unsplash.com/${url}`, {
        params: providedParams,
      })
      .then(
        (response) => {
          setError(false);
          let newPhotos: PhotoInfo[];
          if (isAPIDataInResultsObject(response.data)) {
            newPhotos = response.data.results.map(flattenPhotoInfo);
          } else {
            newPhotos = response.data.map(flattenPhotoInfo);
          }
          setPhotos(newPhotos);
        },
        (error) => {
          setError(true);
        }
      );
  }

  return { error, photos, getPhotos };
}

function flattenPhotoInfo(photoData: APIPhotoData): PhotoInfo {
  return {
    id: photoData.id,
    altText: photoData.alt_description,
    url: photoData.urls.small,
  };
}

function isAPIDataInResultsObject(
  response: APIDataInResultsObject | APIDatas
): response is APIDataInResultsObject {
  return (response as APIDataInResultsObject).results !== undefined;
}

interface APIDataInResultsObject {
  results: APIDatas;
}

type APIDatas = APIPhotoData[];

interface APIPhotoData {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
}

export type UnsplashParams =
  | UnsplashSearchImagesParams
  | UnsplashRandomImagesParams;

interface UnsplashSearchImagesParams {
  query: string | undefined;
  client_id: string | undefined;
  per_page: number;
}

interface UnsplashRandomImagesParams {
  client_id: string | undefined;
  count: number;
}
