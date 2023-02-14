import React, { memo } from "react";
import { Link } from "react-router-dom";


const MovieItem = ({ movie }) => {

  console.log(movie);
  return (
    <div className="flex relative hover: ">
      <div className="gap-y-3 overflow-hidden rounded-md flex flex-col justify-between duration-300">
        <img
          className="hover:scale-110 duration-500 overflow-hidden h-[250px] w-[200px] object-cover rounded-md"
          src={`https://image.tmdb.org/t/p/original${
             movie.poster_path 
          }`}
        />
        <div className="flex flex-col justify-between h-[90px]">
          <h4 className="font-semibold text-base max-w-[200px] max-h-[48px] overflow-hidden ">
            {movie.original_title}
          </h4>

          <Link to={`/movie/${movie.id}`}>
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-yellow-500 text-black font-semibold text-lg leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              MUA VÉ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(MovieItem);
