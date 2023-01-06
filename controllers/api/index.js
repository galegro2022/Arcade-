const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;

// const apiKey = e1819ed11785467faf43536ee5a1224a;

// basic game search cadence

// import React, { useState } from 'react';

// const Search = () => {

//     const [searchTerm, setSearchTerm] = useState("");
//     const [gameResults, setGameResults] = useState([]);

//     const handleChange = (e) => {
//         setSearchTerm(e.target.value);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault()
//         let slug = searchTerm.split(' ').join('-').toLowerCase()

//         setGameResults([])
//         fetch('https://api.rawg.io/api/games?key=e1819ed11785467faf43536ee5a1224a&search=${slug}')
//         .then(resp => resp.json())
//         .then(({results}) => {
//             results === undefined ? alert('no games found!') : setGameResults(results);
//         })
//     setSearchTerm("")
// }}

// var userSearch = "";

// getGames = function() {
// fetch('https://api.rawg.io/api/games?search=${userSearch}&key=${apiKey}')
// .then(resp => resp.json())
// .then(data => console.log(data))
// .then(error => console.error("Error: " + error))
// }

// const gameImage = getGames.data.results[0].background_image;

// const gameRating = getGames.data.results[0].esrb_rating;

// const gameReleaseDate = getGames.data.results[0].released;

// const platforms = getGames.data.results[0].parent_platforms;

// // get games in same series as search

// seriesGames = function() {
//     fetch('https://api.rawg.io/api/games/${userSearch}/game-series&key=${apiKey}')
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .then(error => console.error("Error: " + error))
// }

// const gamesInSeries = seriesGames.data.results;



// gameStores = function() {
//     fetch('https://api.rawg.io/api/games/${userSearch}/stores')
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .then(error => console.error("Error: " + error))
// }

// availableStores = gameStores.data.results;





