import React from "react";

const MovieCard = ({ result }) => {
	return (
		<div className="movie">
			<div>
				<p>{result.Year}</p>
			</div>
			<div>
				<img
					src={
						result.Poster !== "N/A"
							? result.Poster
							: "https://via.placeholder.com/400"
					}
					alt={result.Title}
				/>
			</div>
			<div>
				<span>{result.Type}</span>
				<h3>{result.Title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
