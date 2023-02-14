import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbArmchair, TbTicket } from "react-icons/tb";
import { useParams } from "react-router-dom";

const TickingLayout = ({ children, option }) => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };
  console.log(currentMovieDetail);
  return (
    <div className="">
      {/* STEPPER */}
      <div className="mx-4 p-4">
        <div className="flex items-center">
          <div className="flex items-center text-white relative">
            <div
              className={`rounded-full transition duration-500 ease-in-out flex items-center justify-center p-3 border-2 border-transparent text-xl ${
                option == 1 ? "bg-yellow-500" : ""
              } ${
                option == 2 || option == 3 || option == 4 || option == 5
                  ? "bg-green-500"
                  : ""
              } `}
            >
              <TbTicket />
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase  'text-yellow-500': 'text-white'}`}
            >
              Chọn vé
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
              option == 2 || option == 3 || option == 4 || option == 5
                ? "border-green-500"
                : "border-white"
            }`}
          ></div>
          <div className="flex items-center text-white relative">
            <div
              className={`rounded-full transition duration-500 ease-in-out flex items-center justify-center shadow-md shadow-orange-300 p-3 border-2 border-transparent text-xl ${
                option == 2 ? "bg-yellow-500" : ""
              } ${
                option == 3 || option == 4 || option == 5 ? "bg-green-500" : ""
              } `}
            >
              <TbArmchair />
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-white">
              Chọn ghế
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          <div className="flex items-center text-white relative">
            <div className="rounded-full transition duration-500 ease-in-out flex items-center justify-center p-3 border-2 border-yellow-500 text-xl">
              <IoFastFoodOutline />
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-white">
              Chọn thức ăn
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          <div className="flex items-center text-white relative">
            <div className="rounded-full transition duration-500 ease-in-out flex items-center justify-center p-3 border-2 border-yellow-500 text-xl">
              <AiFillCheckCircle />
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-white">
              Xác nhận
            </div>
          </div>

          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          <div className="flex items-center text-white relative">
            <div className="rounded-full transition duration-500 ease-in-out flex items-center justify-center p-3 border-2 border-yellow-500 text-xl">
              <BsFillPersonCheckFill />
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
              Đặt vé thành công
            </div>
          </div>
        </div>
      </div>

      {/* THÔNG TIN PHIM (ẢNH PHIM, THÔNG SỐ) */}
      <div className="flex my-10">
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.poster_path : ""
            }`}
            alt=""
            className="h-[250px] w-[200px]"
          />
        </div>

        <div className="flex flex-col ml-4">
          <h1>
            Tên phim: {currentMovieDetail ? currentMovieDetail.title : ""}
          </h1>
          <h4>Thời gian: Ngày 5 tháng 8 Năm 2023 20:00</h4>
          <h6>Tại Chi nhánh 1 phòng 5</h6>
        </div>
      </div>
      {children}
    </div>
  );
};

export default TickingLayout;
