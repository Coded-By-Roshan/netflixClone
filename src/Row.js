import React, { useState, useEffect } from 'react';
import requests from './Requests.js';
import axios from './axios';
import "./row.css";
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';

function Row(props) {
    const [movies, setmovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl)
            setmovies(request.data.results)
            return request
        }
        fetchData()
        // return () => {
        //     cleanup
        // }
    }, [props.fetchUrl])
    console.log(movies)

    
 const handelClick = (movie)=>{
if (trailerUrl) {
    setTrailerUrl('')
}
else{
    movieTrailer(movie?.name || movie?.title || movie?.orginal_title || movie?.orginal_name || "").then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search)
       setTrailerUrl(urlParams.get("v"))

    }).catch((error)=>{ 
        console.log(error)
    })
}
 }


    const opts ={
        height:"355",
        width : "100%",
        playerVars: {
            
            autoplay :1,
        }
    }
    return (
        <div className="row">
            <h2 className="title">{props.title}</h2>
            <div className="posters">
            {movies.map(movie=>(
                <img key={movie.id} onClick={()=> handelClick(movie)} className="row_poster" src={`${base_url}${props.isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
            ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default Row
