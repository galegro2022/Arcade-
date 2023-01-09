// require('dotenv').config();

// var userSearch = "";
apiKey = 'e1819ed11785467faf43536ee5a1224a'


var userSearch = document.querySelector("#search-button")
userSearch.addEventListener('click', function() {
    var searchText = document.querySelector("#search-bar")
    var gameName = searchText.value.split(' ').join('-').toLowerCase()
    getGames(gameName)
})


getGames = function(gameName) {
fetch(`https://api.rawg.io/api/games?search=${gameName}/&key=${apiKey}`)
.then(resp => resp.json())
.then(data => ((renderGameCard(data.results[0].name, data.results[0].background_image, data.results[0].esrb_rating.name, data.results[0].released, data.results[0].parent_platforms)), console.log(data.results[0], console.log(data.results[0].parent_platforms[0].name))))
.catch(error => console.error("Error: " + error))
};

// put render gamecard inside function
// use catch instead of error
// data goes into render gamecard

// searchText["gameName"] = getGames.data.results[0].name;

// searchText["gameImage"] = getGames.data.results[0].background_image;

// searchText["gameRating"] = getGames.data.results[0].esrb_rating;

// searchText["gameReleaseDate"] = getGames.data.results[0].released;

// searchText["platforms"] = getGames.data.results[0].parent_platforms;

function renderGameCard(gameName, gameImage, gameRating, gameReleaseDate, platforms) {
    var gameCard = document.createElement("div");
    gameCard.classList.add("card");
    gameCard.classList.add("text-white");
    // gameCard.style.width = "60rem";
    gameCard.innerHTML = `
    <div class="card text-center bg-dark border border-danger">
        <img src="${gameImage}" alt="game image">
        <h3 class="display-6 text-danger">${gameName}</h3>
        <p>Rating: ${gameRating}</p>
        <p>Release Date: ${gameReleaseDate}</p>
    </div>
    `
    document.querySelector("#search-results").appendChild(gameCard);
}

/* <p>Platforms: ${platforms}</p> */


// clear #search-results div on click of clear button
document.querySelector("#clearBtn")
clearBtn.addEventListener('click', function() {
    document.querySelector("#search-results").innerHTML = "";
})
   

// renderGameCard(searchText["gameName"], searchText["gameImage"], searchText["gameRating"], searchText["gameReleaseDate"], searchText["platforms"]);

// // get games in same series as search

// seriesGames = function() {
//     fetch(`https://api.rawg.io/api/games/${userSearch}/game-series&key=${apiKey}`)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .then(error => console.error("Error: " + error))
// }

// const gamesInSeries = seriesGames.data.results;



// gameStores = function() {
//     fetch(`https://api.rawg.io/api/games/${userSearch}/stores`)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .then(error => console.error("Error: " + error))
// }

// availableStores = gameStores.data.results;



module.exports = apiResults





// basic game search cadence

// import React, { useState } from 'react';

// const Search = () => {

//     const [searchTerm, setSearchTerm] = useState("");
//     const [gameResults, setGameResults] = useState([]);

//     document.querySelector("#search-button").addEventListener("click", getInfo);

//     const handleChange = (e) => {
//         setSearchTerm(e.target.value);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault()
//         let slug = searchTerm.split(' ').join('-').toLowerCase()

//         setGameResults([])
//         fetch(`https://api.rawg.io/api/games?key=${process.env.apiKey}&search=${slug}`)
//         .then(resp => resp.json())
//         .then(({results}) => {
//             results === undefined ? alert('no games found!') : setGameResults(results);
//         })
//     setSearchTerm("")
// }}