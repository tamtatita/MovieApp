import React, { useRef, useState } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { TbTicket, TbArmchair } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Stepper1 from "../components/global/Stepper1";
import TickingLayout from "../components/Layout/TickingLayout";
import Stepper2 from "../components/global/Stepper2";
import Stepper3 from "../components/global/Stepper3";
const TickingPage = () => {
  const { id } = useParams();
  const [valueTicket1, setValueTicket1] = useState(0);
  const [valueTicket2, setValueTicket2] = useState(0);

  const [option, setOption] = useState(1);
  console.log("re-render");

  const nextPage = () => {
    setOption((prev) => prev + 1);
  };

  const prevPage = () => {
    setOption((prev) => prev - 1);
  };
  return (
    <DefaultLayout>
      <div className="my-4">
        <div className="p-5">
          <TickingLayout option={option}>
            {/* STEPPER 1 */}
            {option == 1 && (
              <div className="">
                <Stepper1
                  valueTicket1={valueTicket1}
                  valueTicket2={valueTicket2}
                  setValueTicket1={setValueTicket1}
                  setValueTicket2={setValueTicket2}
                />
              </div>
            )}

            {option == 2 && (
              <div className="">
                <Stepper2 />
              </div>
            )}

            {option == 3 && (
              <div className="">
                <Stepper3 />
              </div>
            )}
            {/* NÚT TRƯỚC SAU */}
            <div className="mx-2 my-7 p-4 flex justify-between">
              <button
                onClick={prevPage}
                className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer  hover:bg-yellow-600  bg-yellow-500 border duration-200 ease-in-out  transition"
              >
                Quay về
              </button>
              {option == 3 && (
                <button className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer  hover:bg-red-600  bg-red-500 border duration-200 ease-in-out  transition">
                  Bỏ qua
                </button>
              )}

              {(valueTicket1 > 0 && valueTicket1 <= 10) ||
              (valueTicket2 > 0 && valueTicket2 <= 10) ? (
                <button
                  onClick={nextPage}
                  className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer  hover:bg-blue-600   bg-blue-500 border duration-200 ease-in-out  transition"
                >
                  Tiếp theo
                </button>
              ) : (
                ""
              )}
            </div>
          </TickingLayout>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TickingPage;
