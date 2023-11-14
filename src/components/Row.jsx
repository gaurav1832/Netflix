import { React, useState, useEffect } from "react";
import axios from "axios";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setmovies] = useState([]);
  const [like, setlike] = useState(false);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setmovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 600;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 600;
  };
  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          className="absolute left-0 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-[10] hidden group-hover:block"
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowID}
          className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p>
                  {like ? (
                    <FaHeart className="absolute top-10 left-20 text-gray-300" />
                  ) : (
                    <FaRegHeart />
                  )}
                </p>
                <p className="white-space-normal text-lg opacity-80 font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="absolute right-0 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-[10] hidden group-hover:block"
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default Row;
