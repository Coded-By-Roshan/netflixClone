const API_KEY = "def8572c7b18aa20a6f85d8807fdc1a0";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrginals:`/discover/tv?api_key=${API_KEY}&eith_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_geners=10749`,
};

// 1.38
export default requests;