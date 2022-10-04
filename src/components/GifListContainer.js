import React from "react";
import {useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const API_URL = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=3pDtkgGBkaepFV6smB9O6rBAlQ83VLiO&rating=g';

function GifListContainer  () {
    const [searchTerm, setSearchTerm] = useState("");
    const [gifs, setGifs] = useState([]);
    useEffect(() => {
        fetch(`${API_URL}`)
        .then((res) => res.json())
        .then(({ data }) => {
          const gifs = data.map((gif) => ({ url: gif.images.original.url }));
          setGifs(gifs);
        });
        
    }, []);
  
    return (
      
      <div>
        <GifSearch onSubmitSearch={setSearchTerm} />
        <GifList gifs={gifs} />
        </div>
    );
};
 
export default GifListContainer;
