import React from "react";
import Skeleton from "react-loading-skeleton";

const MovieItemSkeleton = ({ movie }) => {
  return Array(movie)
    .fill(0)
    .map((__, index) => (
      <div
        key={index}
        className="max-w-[200px] flex flex-col gap-2"
      >
        <div className="w-[200px] h-[250px]">
          <Skeleton width={"200px"} height="250px" borderRadius="4px" />
        </div>

        <div className="">
          <Skeleton count={2} height="20px" />
        </div>

        <Skeleton height={"50px"} />
      </div>
    ));
};

export default MovieItemSkeleton;
