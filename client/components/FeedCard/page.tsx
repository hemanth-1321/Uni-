import React from "react";
import Image from "next/image";
import { Heart, MessageCircle, Repeat2, Upload } from "lucide-react";
export const FeedCard = () => {
  return (
    <div className=" p-2  border-b-gray-700 border-b cursor-pointer">
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/116090792?v=4"
            alt="user-image"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11 space-x-2">
          <h1 className="px-2">Piyush Garg</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            aperiam repellendus itaque illo eaque dicta nostrum explicabo,
            deleniti est animi.
          </p>
        </div>
      </div>{" "}
      <div className="flex justify-between items-center mt-5  p-2">
        <div className="hover:text-blue-700">
          <MessageCircle />
        </div>
        <div className="hover:text-green-700">
          <Repeat2 />
        </div>
        <div className="hover:text-pink-700">
          <Heart />
        </div>
        <div className="hover:text-blue-700">
          <Upload />
        </div>
      </div>
    </div>
  );
};
