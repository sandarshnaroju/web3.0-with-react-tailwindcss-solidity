import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_GIPHY; // giphy developer api key in .env file
const useFetch = ({ keyword }) => {
  const [gif, setGif] = useState("");
  const fetchGifsFunctions = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(" ")
          .join("")} &limit=1`
      );
      const { data } = await response.json();
      setGif(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      setGif(
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
      );
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchGifsFunctions();
    }
  }, [keyword]);

  return gif;
};
export default useFetch;
