import React from 'react';
import './Homescreen.css';
import Nav from './Nav.js';
import Row from './Row.js';
import Banner from './Banner.js';
import requests from './Requests.js'

function Homescreen() {
    return (
        <div className="homescreen">
            {/* Nav */}
            <Nav/>
            <Banner/>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals} isLargeRow='flase' />
            <Row title="NETFLIX TRENDING" fetchUrl={requests.fetchTrending} isLargeRow='flase' />
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} isLargeRow='flase' />
            <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} isLargeRow='flase' />
            <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} isLargeRow='flase' />
            
            
            {/* row  */}
        </div>
    )
}

export default Homescreen
