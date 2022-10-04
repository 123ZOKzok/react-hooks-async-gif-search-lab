import React from "react";
import {useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const API_URL = 'https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g';

function GifListContainer  () {
    const [searchTerm, setSearchTerm] = useState("");
    const [gifs, setGifs] = useState([]);
    useEffect(() => {
        fetch(`${API_URL}`)
        .then(res => res.json())
        .then(data => {
        console.log(data.data)
        setGifs([...data.data]);
        })
    }, []);
  
    return (
      
      <div>
        <GifSearch onSubmitSearch={setSearchTerm} />
        <GifList gifs={gifs} />
        </div>
    );
};
 
export default GifListContainer;
