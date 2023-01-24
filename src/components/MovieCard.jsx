import React from "react";

const MovieCard = (props) => {
	return (
		<div className="movie">
			<div>
				<p>{props.result1.Year}</p>
			</div>
			<div>
				<img
					src={
						props.result1.Poster !== "N/A"
							? props.result1.Poster
							: "https://via.placeholder.com/400"
					}
					alt={props.result1.Title}
				/>
			</div>
			<div>
				<span>{props.result1.Type}</span>
				<h3>{props.result1.Title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
