import React from "react";
import "./App.css";
import { useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";
import { useState } from "react";
// bc165fe0
const API_KEY = "http://www.omdbapi.com?apikey=bc165fe0";
const result1 = {
	Title: "Fighting, Flying and Driving: The Stunts of Spiderman 3",
	Year: "2007",
	imdbID: "tt1132238",
	Type: "movie",
	Poster:
		"https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg",
};

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState(" ");
	const searchMovies = async (title) => {
		const config = {
			headers: {
				Accept: "application/json",
			},
		};
		const res = await fetch(`${API_KEY}&s=${title}`);
		const data = await res.json();
		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies("Spiderman");
	}, []);

	return (
		<div className="app">
			<h1>SmartFlix</h1>
			<div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img src={SearchIcon} alt="" onClick={() => searchMovies(searchTerm)} />
			</div>
			{movies.length > 0 ? (
				<div className="container">
					{movies.map((movie) => (
						<MovieCard result={movie} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No movies found</h2>
				</div>
			)}
		</div>
	);
}

export default App;
