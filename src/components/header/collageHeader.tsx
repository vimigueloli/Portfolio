import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { HeaderProps } from ".";

export default function CollageHeader({ data }: HeaderProps) {
    return (
        <div className="line-center w-full relative">
            <div className="text-[#343131] w-full sm:w-2/3 p-20 line-center flex-wrap gap-8 text-3xl my-12">
                <div className="sm:line-center line-right w-full relative ">
                    <div className=" relative h-32 w-32">
                        <div className="w-full h-full overflow0-hidden -rotate-3 absolute z-20 shadow-md shadow-black">
                            <img src={data?.avatar_url} />
                        </div>
                        <div className="w-full h-full bg-white absolute rotate-6 shadow-md shadow-black" />
                    </div>
                </div>
                <div className="w-full font-face-collage line-left sm:line-center font-mono font-extrabold text-6xl sm:text-7xl text-black">
                    {`${data?.name}`}
                </div>
                <div className="w-full font-semibold font-mono line-right sm:line-center sm:px-12 text-right sm:text-justify text-xl  text-black">
                    {data?.bio}
                </div>
            </div>
        </div>
    );
}
