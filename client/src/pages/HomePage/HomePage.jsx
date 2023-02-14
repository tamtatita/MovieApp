import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout";
// import { useStore } from "../../hooks/UseStore";
import MovieItem from "../MovieDetail/MovieItem";
import MovieItemSkeleton from "../MovieDetail/MovieItemSkeleton";

const HomePage = () => {
  // const [state, dispatch] = useStore()

  // const {DataMovieAll} = state

  // console.log('state', state);

  const [isLoading, setIsLoading] = useState(true);

  const [dataMovies, setDataMovies] = useState({});

  
    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
        .then((res) => res.json())
        .then((data) => {
          // setDataMovies(data.results);
          setIsLoading(false);

          localStorage.setItem("movies", JSON.stringify(data.results));
        });
    }, [isLoading]);
    

  const dataLocal = localStorage.getItem("movies");
  const getDataMovie = JSON.parse(dataLocal);

  return (
    <DefaultLayout>
      <div className="p-3">
        {/* BANNER PHIM */}
        <div className="">
          <img
            src="http://images2.fanpop.com/image/photos/12800000/Inception-Banner-inception-2010-12831726-2000-919.jpg"
            alt=""
            className="rounded-2xl w-full h-[50vh] object-cover"
          />
        </div>

        {/* LIST PHIM */}
        <div className="">
          <div className="flex items-center justify-around my-7">
            <button className="py-3 px-4 border-2 border-yellow-500 rounded-md hover:bg-yellow-500 hover:text-black font-semibold">
              PHIM ĐANG CHIẾU
            </button>
            <button className="py-3 px-4 border-2 border-yellow-500 rounded-md hover:bg-yellow-500 hover:text-black font-semibold">
              PHIM SẮP CHIẾU
            </button>
            <button className="py-3 px-4 border-2 border-yellow-500 rounded-md hover:bg-yellow-500 hover:text-black font-semibold">
              VÉ BÁN TRƯỚC
            </button>
          </div>

          {/* RENDER LIST PHIM */}

          <div className="flex gap-y-8 flex-wrap justify-between">
            {isLoading && <MovieItemSkeleton movie={20} />}
          </div>

          <div className="flex gap-y-8 flex-wrap justify-between">
            {getDataMovie.length > 0 &&
              getDataMovie.map((movie) => <MovieItem movie={movie} />)}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
