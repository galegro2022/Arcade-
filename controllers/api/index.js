const apiKey = `e1819ed11785467faf43536ee5a1224a`;

// basic game search cadence

import React, { useState } from 'react';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [gameResults, setGameResults] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let slug = searchTerm.split(' ').join('-').toLowerCase()

        setGameResults([])
        fetch('https://api.rawg.io/api/games?key=e1819ed11785467faf43536ee5a1224a&search=${slug}`);
        .then(resp => resp.json())
        .then(({results}) => {
            results === undefined ? alert('no games found!') : setGameResults(results);
        })
    setSearchTerm("")
}

