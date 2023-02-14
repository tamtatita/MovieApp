import React, { useState } from "react";
// import { AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlineLogin, AiFillSetting } from "react-icons/ai";
import { GoSignIn } from "react-icons/go";

const Header = () => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setActive(!active);
  };

  const data = [
    {
      id: 1,
      name: "Movie 1 sjjjjjjjjjjjjjjjjjjjjjjjjjj",
      img: "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
    },
    {
      id: 2,
      name: "Movie 2 sjjjjjjjjjjjjjjjjjjjjjjjjjj",
      img: "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
    },
    {
      id: 3,
      name: "Movie 3 sjjjjjjjjjjjjjjjjjjjjjjjjjj",
      img: "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
    },
    {
      id: 4,
      name: "Movie 4 sjjjjjjjjjjjjjjjjjjjjjjjjjj",
      img: "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
    },
    {
      id: 5,
      name: "Movie 5 sjjjjjjjjjjjjjjjjjjjjjjjjjj",
      img: "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
    },
    {
      id: 6,
      name: "Movie 6 sjjjjjjjjjjjjjjjjjjjjjjjjjj",
      img: "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
    },
  ];

  return (
    <div className="w-full sticky px-4 shadow-lg shadow-gray-900 top-0 z-50 xl:bg-black py-3 flex items-center justify-between ">
      {/* CHỌN VỊ TRÍ */}

      <div className="flex justify-center">
        <div className="xl:w-30 bg-transparent border-yellow-400">
          <select
            className="bg-yellow-500 font-semibold form-select block w-full px-3 py-1.5 text-base  text-black border border-solid rounded transition ease-in-out m-0  border-yellow-400 focus:outline-none"
            aria-label="Default select example"
          >
            <option>Chọn khu vực</option>
            <option value="1">Hồ Chí Minh</option>
            <option value="2">Hà Nội</option>
            <option value="3">Cần Thơ</option>
          </select>
        </div>
      </div>

      <div className="">
        <input
          value={search}
          onClick={() => setActive(!active)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Tìm phim"
          className="form-control block w-[400px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
        {active && (
          <div className="h-[300px] w-[400px] mt-1 rounded-md bg-white absolute shadow-sm shadow-gray-200 overflow-hidden">
            {data.slice(0, 5).map((item) => (
              <div className="flex  hover:bg-yellow-300 cursor-pointer p-2 items-center gap-2 text-black">
                <div className="">
                  <img
                    className="h-10 w-10 object-cover rounded-full"
                    src={item.img}
                    alt=""
                  />
                </div>

                <h4 className="font-semibold text-md capitalize">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="">
        <h4>Khuyến mãi</h4>
      </div>

      <div className="">
        <button
         
          className="p-2 hover:bg-yellow-500 rounded-full border border-yellow-400"
        >
          <BiUser />
        </button>
        {/* {active && (
          <div className="bg-white text-black overflow-hidden font-semibold flex flex-col  rounded-md absolute -translate-x-[80%] shadow-sm shadow-white w-[150px]">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-yellow-500 p-2">
              <i>
                <GoSignIn />
              </i>
              <h2>Đăng Nhập</h2>
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:bg-yellow-500 p-2">
              <i>
                <AiOutlineLogin />
              </i>
              <h2>Đăng Kí</h2>
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:bg-yellow-500 p-2">
              <i>
                <AiFillSetting />
              </i>
              <h2>Cài Đặt</h2>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
