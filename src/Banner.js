import React, {useState, useEffect} from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests.js'

function Banner() {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOrginals);
            setmovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ])
            return request
        }
      
        fetchData()
       
    }, [])
    console.log(movies)
 
    function truncate(string, n){
        return string?.length > n ? string.substr(0,n-1) + '......':string

    }

    return (
        <header className="banner" style={{

            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`
        }
        }>
            <div className="banner-content">
                <div className="banner-title">
                    <h1>{movies?.name || movies?.title} </h1>
                </div>
                <div className="buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <p className="desc">{truncate(movies?.overview, 250)}</p>
            </div>
        </header>
    )
}

export default Banner
