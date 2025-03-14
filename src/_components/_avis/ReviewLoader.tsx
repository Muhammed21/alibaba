import clsx from "clsx";
import React from "react";

const ReviewLoader = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "rounded-[10px] space-y-[20px] cursor-pointer group w-full h-[350px] p-[15px] bg-gray-card animate-pulse",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-[28px] aspect-square rounded-full bg-white/10 animate-pulse"></div>
        <div className="w-20 h-4 bg-white/10 rounded-lg animate-pulse"></div>
      </div>

      <div className="w-[50%] h-6 bg-white/10 rounded-lg animate-pulse"></div>
      <div className="w-[70%] h-6 bg-white/10 rounded-lg animate-pulse"></div>
      <div className="w-[40%] h-6 bg-white/10 rounded-lg animate-pulse"></div>
      <div className="w-[50%] aspect-video bg-white/10 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default ReviewLoader;