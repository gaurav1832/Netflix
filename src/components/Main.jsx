import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Requests";
import truncateString from "../helperFunctions/truncateString";
const Main = () => {
  const [movie, setmovie] = useState([]);

  const currentMovie = movie[Math.floor(Math.random() * movie.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setmovie(response.data.results);
    });
  }, []);
  console.log(currentMovie);

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-fit"
          src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
          alt={currentMovie?.title}
        />
        <div>
          <div className="absolute w-full top-[30%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">
              {currentMovie?.title}
            </h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-gray-300 py-2 px-5 ml-5">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              {" "}
              Released : {currentMovie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncateString(currentMovie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
