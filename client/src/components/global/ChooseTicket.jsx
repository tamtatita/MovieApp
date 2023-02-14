import axios from "axios";
import React, { useEffect, useState } from "react";
import { dateTicket } from "../../contain";
import {Link, useParams} from 'react-router-dom'

const ChooseTicket = () => {
  const handleGetDate = (id) => {
    console.log(id);
  };

  const {id} = useParams()

  const [getDay, setGetDay] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold text-2xl justify-center items-center flex py-4">
        MỜI BẠN CHỌN THÔNG TIN VÉ
      </h3>

      <div className="flex gap-3 px-5 py-2">
        {dateTicket &&
          dateTicket?.map((info) => (
            <div key={info.id} className="flex">
              <button
                onClick={() => setGetDay(info.ngay)}
                className="flex flex-col items-center border-yellow-500 border-2 rounded-md cursor-pointer  w-32 py-1 focus:bg-yellow-500"
              >
                <h1 className="font-semibold text-xl">
                  {info ? info.thu : ""}
                </h1>
                <h1>{info ? info.ngay : ""}</h1>
              </button>
            </div>
          ))}
      </div>

      <div className="">
        {dateTicket &&
          dateTicket.map((info) => (
            <div key={info.id} className=" gap-4   ">
              <div className="items-center px-5 justify-center flex  w-full flex-col text-black">
                {info.ngay == getDay &&
                  info.data?.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-6 border-b border-gray-700 my-6 justify-start items-center w-full"
                    >
                      <div className="border border-r-8 border-yellow-500 py-6 px-9 ">
                        <h3 className="font-bold whitespace-nowrap text-yellow-500 text-xl uppercase">
                          {item.chiNhanh}
                        </h3>
                        <h5 className="text-white font-medium ">
                          345 An Dương Vương Quận 6 Hồ Chí Minh
                        </h5>
                      </div>
                      <div className=" flex gap-8 w-full flex-wrap ">
                        {item.khunggio?.map((index) => (
                          <Link to={`/ticking/${id}`}>
                            <h3
                              onClick={() => handleGetDate(index.gio)}
                              key={index.id}
                              className="px-3 py-2 font-semibold rounded-md bg-yellow-500 cursor-pointer"
                            >
                              {index.gio}
                            </h3>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChooseTicket;
