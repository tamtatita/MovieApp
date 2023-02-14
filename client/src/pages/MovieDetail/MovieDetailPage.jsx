import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { IoTicket } from "react-icons/io5";
import ChooseTicket from "../../components/global/ChooseTicket";

const MovieDetailPage = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };
  // console.log(currentMovieDetail);

  const styleText = "text-yellow-500 font-semibold text-lg";

  return (
    <DefaultLayout>
      <div className="">
        {/* Breadcum */}

        <h1 className="flex my-5 items-center gap-2">
          <Link to="/">Trang chủ</Link> /
          <span>{currentMovieDetail ? currentMovieDetail.original_title : ""}</span>
        </h1>

        <div className="relative">
          <img
            className="bg-transparent h-[500px] w-full object-cover duration-300 opacity-30 "
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.backdrop_path : ""
            }`}
          />

          <div className="absolute top-6 left-6 flex ">
            <div className="top-5 left-2 duration-500 transition-all">
              <img
                className=" h-[450px] w-[300px] object-cover "
                src={`https://image.tmdb.org/t/p/original${
                  currentMovieDetail ? currentMovieDetail.poster_path : ""
                }`}
              />
            </div>

            <div className="ml-5 w-[720px]">
              {/* TÊN PHIM */}
              <h4 className="font-bold text-3xl">
                {currentMovieDetail ? currentMovieDetail.original_title : ""}
              </h4>

              {/* MÔ TẢ */}
              <h4 className="my-2">
                {currentMovieDetail ? currentMovieDetail.overview : ""}
              </h4>

              <div className="flex flex-col gap-y-3">
                {/* THỂ LOẠI */}
                <div className="flex items-center gap-2">
                  <h2>Thể loại: </h2>
                  {currentMovieDetail
                    ? currentMovieDetail.genres.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <h5 className={styleText}>{item.name}</h5>
                        </div>
                      ))
                    : "Không rõ"}
                </div>

                {/* NƠI SẢN XUẤT */}
                <div className="flex items-center gap-2">
                  <h2>Nơi sản xuất: </h2>
                  {currentMovieDetail
                    ? currentMovieDetail.production_countries.map((index) => (
                        <div key={index.name} className="flex items-center">
                          <h5 className={styleText}>{index.name}</h5>
                        </div>
                      ))
                    : "Không rõ"}
                </div>

                {/* NGÀY SẢN XUẤT*/}
                <div className="flex items-center gap-2">
                  <h2>Ngày chiếu: </h2>
                  <h4 className={styleText}>
                    {currentMovieDetail
                      ? currentMovieDetail.release_date
                      : "Không rõ"}
                  </h4>
                </div>

                {/* THỜI LƯỢNG PHIM */}
                <div className="flex items-center gap-2">
                  <h2>Thời lượng: </h2>
                  <h4 className={styleText}>
                    {currentMovieDetail
                      ? currentMovieDetail.runtime + " " + "Phút"
                      : "Không rõ"}
                  </h4>
                </div>

                {/* NGÔN NGỮ */}
                <div className="flex items-center gap-2">
                  <h2>Ngôn ngữ: </h2>
                  {currentMovieDetail
                    ? currentMovieDetail.spoken_languages.map((index) => (
                        <div key={index.name} className="flex items-center">
                          <h5 className={styleText}>{index.name}</h5>
                        </div>
                      ))
                    : "Không rõ"}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <button className="py-3 px-4 border-[3px] font-semibold text-md border-yellow-500">
                  XEM TRAILER
                </button>
                <button className="py-3 flex items-center gap-2 px-4 border-[3px] font-semibold text-md border-yellow-500 bg-yellow-500 text-black">
                  {" "}
                  <IoTicket />
                  MUA VÉ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChooseTicket />
    </DefaultLayout>
  );
};

export default MovieDetailPage;
