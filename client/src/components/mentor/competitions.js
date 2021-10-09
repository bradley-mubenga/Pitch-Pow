import React, { useState, useEffect } from "react";
import Comment from "./Comments/Comment";

export default function Competitions() {
	const [marsPhotoData, setMarsPhotoData] = useState("");

	useEffect(() => {
		console.log("Fetching data from NASA");

		fetch(
			`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`
		)
			.then((res) => res.json())
			.then((data) => {
				setMarsPhotoData(data);
			});
	}, []);
    
	return (
		<section className="rightColumn">
			<div className="container py-5">
				<Comment />
				<div className="">
					<h1 className="heading pb-2">Competitions</h1>
					<span className="underline"></span>
				</div>

				<div className="text-center">
					<div className="text-center pb-3">
						<h4 className="dashH4">Here we will have Competitions.</h4>
					</div>
				</div>
			</div>
		</section>
	);
}
