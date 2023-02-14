import React, { useState } from "react";
import { BsBoxArrowRight } from "react-icons/bs";

const Stepper2 = () => {
  const dataChairs = [
    {
      id: 1,
      nameChair: "Khu A",
      total: 18,
      data: [
        { id: 1, status: 0 },
        { id: 2, status: 1 },
        { id: 3, status: 1, hasBuy: true },
        { id: 4, status: 2, hasBuy: false },
        { id: 5, status: 2, hasBuy: true },
        { id: 6, status: 2, hasBuy: true },
        { id: 7, status: 1, hasBuy: false },
        { id: 8, status: 1, hasBuy: true },
        { id: 9, status: 1, hasBuy: false },
        { id: 10, status: 0, hasBuy: true },
      ],
    },
    {
      id: 2,
      nameChair: "Khu B",
      total: 18,
      data: [
        { id: 1, status: 0 },
        { id: 2, status: 1 },
        { id: 3, status: 1, hasBuy: true },
        { id: 4, status: 2, hasBuy: false },
        { id: 5, status: 2, hasBuy: true },
        { id: 6, status: 2, hasBuy: true },
        { id: 7, status: 1, hasBuy: false },
        { id: 8, status: 1, hasBuy: true },
        { id: 9, status: 1, hasBuy: false },
        { id: 10, status: 0, hasBuy: true },
      ],
    },
    {
      id: 3,
      nameChair: "Khu C",
      total: 18,
      data: [
        { id: 1, status: 0 },
        { id: 2, status: 1 },
        { id: 3, status: 1, hasBuy: true },
        { id: 4, status: 2, hasBuy: false },
        { id: 5, status: 2, hasBuy: true },
        { id: 6, status: 2, hasBuy: true, type: "couple" },
        { id: 7, status: 1, hasBuy: false, type: "couple" },
        { id: 8, status: 1, hasBuy: true, type: "couple" },
        { id: 9, status: 1, hasBuy: false, type: "couple" },
        { id: 10, status: 0, hasBuy: true, type: "couple" },
      ],
    },
  ];

  const [dataChooseTicket, setDataChooseTicket] = useState([]);
  const [findNameChair, setFindNameChair] = useState();

  const handleClick = (id, hasBuy) => (event) => {
    hasBuy == true
      ? setDataChooseTicket([])
      : setDataChooseTicket([id, hasBuy]);
  };
  const newArray = [...dataChooseTicket, findNameChair];

  const handleChooseTicket = (newArray, setDataChooseTicket) => {
    if (newArray && newArray.length == 1) {
      setDataChooseTicket([]);
    }
  };
  handleChooseTicket();

  console.log(newArray);
  return (
    <div className="flex">
      <div className="flex justify-end items-end mr-6">
        <div className="flex gap-2 items-center bg-yellow-500 p-2 rounded-md">
          <h4>Cửa vào</h4>
          <BsBoxArrowRight />
        </div>
      </div>

      <div className="flex flex-col ">
        {/* màn hình */}
        <div className="bg-yellow-500 h-4 w-full rounded-b-full shadow-lg shadow-white"></div>
        <div className="flex gap-2 mt-2">
          {dataChairs.map((chair) => (
            <div className="flex">
              <div key={chair.id} className="flex flex-wrap w-[300px] p-3  ">
                <div className="flex flex-wrap gap-3 items-center justify-center ">
                  <h4 className="uppercase font-bold text-xl ">
                    {chair.nameChair}
                  </h4>
                  <div
                    onClick={() => setFindNameChair(chair.nameChair)}
                    className="flex flex-wrap gap-2"
                  >
                    {chair.data.map((item) => (
                      <div
                        key={item.id}
                        className={` text-black font-semibold items-center border-transparent rounded-md justify-center border-2 ${
                          item.status == 0 && "bg-white"
                        } flex ${item.status == 1 && "bg-green-500"} ${
                          item.status == 2 && "bg-yellow-500"
                        }
                        `}
                      >
                        <button
                          className={`h-6 w-6 rounded-t-md ${item.type == 'couple' && 'w-14 rounded-md ' }`}
                          onClick={handleClick(item.id, item.hasBuy)}
                        >
                          {item.id}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHÚ GIẢI */}
      <div className="ml-10 border-2 border-white p-2 h-fit">
        <div className="gap-4 flex flex-col">
          <div className="flex items-center gap-2">
            <button className="h-6 w-6 border-2 bg-yellow-500 rounded-t-full border-transparent"></button>
            <h4>Đang được chọn</h4>
          </div>

          <div className="flex items-center gap-2">
            <button className="h-6 w-6 border-2 bg-green-500 rounded-t-full border-transparent"></button>
            <h4>Đã được chọn</h4>
          </div>

          <div className="flex items-center gap-2">
            <button className="h-6 w-6 border-2 bg-white rounded-t-full border-transparent"></button>
            <h4>Chưa được chọn</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper2;
