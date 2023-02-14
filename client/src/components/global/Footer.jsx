import React, { memo } from "react";
import footer from "../../assets/footer.svg";

const Footer = () => {
  return (
    <div className="relative">
      <div className="relative w-full">
        <img
          src={footer}
          alt=""
          className="xl:w-[100%] lg:w-[1024px] object-cover"
        />
      </div>
      <div className="flex absolute top-0 left-4 items-start gap-8 border-t border-gray-800 pt-4 ">
        <div className="flex flex-col">
          <h1 className="font-sold text-xl">Về CINEMATIC</h1>
          <ul className="font-semibold text-yellow-500 gap-y-4 flex flex-col">
            <li>Hệ thống rạp</li>
            <li>Tuyển dụng</li>
            <li>Liên Hệ</li>
          </ul>
        </div>

        <div className="">
          <h1 className="font-sold text-xl">QUY ĐỊNH & ĐIỀU KHOẢN</h1>
          <ul className="font-semibold text-yellow-500 gap-y-4 flex flex-col">
            <li>Quy định thành viên</li>
            <li>Điều khoản</li>
            <li>Hướng dẫn đặt vé trưc tuyến</li>
            <li>Chính sách bảo vệ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
