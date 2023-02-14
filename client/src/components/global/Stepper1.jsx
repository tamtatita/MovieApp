import React, { useEffect, useRef, useState } from "react";

const Stepper1 = ({
  valueTicket1,
  valueTicket2,
  setValueTicket1,
  setValueTicket2,
}) => {
  const formatVND = (money) => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (e) => {};

  const giaVe1 = 120000;
  const giaVe2 = 200000;

  useEffect(() => {}, []);

  const handleClickDown1 = () => {
    setValueTicket1((prev) => prev - 1);
  };

  const handleClickDown2 = () => {
    setValueTicket2((prev) => prev - 1);
  };
  const handleClickUp1 = () => {
    setValueTicket1((prev) => prev + 1);
  };
  const handleClickUp2 = () => {
    setValueTicket2((prev) => prev + 1);
  };

  const inputRef = useRef(null);
  console.log("re-render-stepper");

  // console.log(valueTicket1, valueTicket2);
  return (
    <div className="flex flex-col mt-9">
      

      <div className="mt-3">
        <div className="">
          <h1 className="text-red-500 font-bold text-2xl">LƯU Ý</h1>
          <ul className="list-disc">
            <li>Hãy chọn kỹ loại vé và số lượng bạn muốn mua</li>
            <li>Bạn có thể mua tối đa 10 vé trong một lần giao dịch</li>
            <li>Vé Vip là dành cho 2 hàng đầu</li>
            <li>Mọi thắt mắt vui lòng câm mỏ</li>
          </ul>
        </div>

        <div class="relative overflow-x-auto">
          <table class="w-full  text-left text-gray-500 ">
            <thead class="text-md text-black uppercase bg-gray-200 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Vé
                </th>
                <th scope="col" class="px-6 py-3">
                  Giá
                </th>
                <th scope="col" class="px-6 py-3">
                  Số lượng
                </th>
                <th scope="col" class="px-6 py-3">
                  Tổng
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap text-black"
                >
                  PT-Adult-Stand-2D
                </th>
                <td class="px-6 py-4">{formatVND(giaVe1)} VNĐ</td>
                <td class="px-6 py-4">
                  <div className="gap-2 flex">
                    <button
                      onClick={handleClickDown1}
                      className="font-bold text-black text-xl h-10 w-10 border-2 border-yellow-500 hover:bg-yellow-500"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name="ve1"
                      ref={inputRef}
                      value={valueTicket1}
                      onChange={() => setValueTicket1(inputRef.current.value)}
                      className="w-10 h-10 text-black font-bold text-xl pl-3"
                    />
                    <button
                      onClick={handleClickUp1}
                      className="font-bold text-black text-xl h-10 w-10 border-2 border-yellow-500 hover:bg-yellow-500"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td class="px-6 py-4">
                  {valueTicket1 > 0 && valueTicket1 <= 10
                    ? formatVND(valueTicket1 * giaVe1)
                    : 0}{" "}
                  VNĐ
                </td>
              </tr>
              <tr class="bg-white border-b ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap text-black"
                >
                  PT-Adult-VIP-2D
                </th>
                <td class="px-6 py-4">{formatVND(giaVe2)} VNĐ</td>
                <td class="px-6 py-4">
                  <div className="gap-2 flex">
                    <button
                      onClick={handleClickDown2}
                      className="font-bold text-black text-xl h-10 w-10 border-2 border-yellow-500 hover:bg-yellow-500"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name="ve2"
                      value={valueTicket2}
                      onChange={(e) => setValueTicket2(e.target.value)}
                      className="w-10 h-10 text-black font-bold text-xl pl-3"
                    />
                    <button
                      onClick={handleClickUp2}
                      className="font-bold text-black text-xl h-10 w-10 border-2 border-yellow-500 hover:bg-yellow-500"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td class="px-6 py-4">
                  {valueTicket2 > 0 && valueTicket2 <= 10
                    ? formatVND(valueTicket2 * giaVe2)
                    : 0}{" "}
                  VNĐ
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stepper1;
