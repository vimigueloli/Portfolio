import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { HeaderProps } from ".";

export default function FlatHeader({ data }: HeaderProps) {
    return (
        <div className="line-center w-full relative">
            <div className="absolute w-3/4 h-full pt-12 items-start line-right ">
                <div className="bg-[#BF8A26] h-8 w-8" />
                <div className="bg-[#BF7826] h-8 w-8" />
                <div className="bg-[#B03E1C] h-8 w-8" />
                <div className="bg-[#2670BF] h-8 w-8" />
                <div className="bg-[#383B73] h-8 w-8" />
                <div className="bg-[#3D6C36] h-8 w-8" />
            </div>
            <div className="text-[#343131] w-full sm:w-2/3 p-20 line-center flex-wrap gap-8 text-3xl my-12">
                <div className="sm:line-center line-right w-full relative ">
                    <div className="rounded-full relative h-32 w-32 overflow-hidden bg-[#F2F0E9]">
                        <img
                            src={data?.avatar_url}
                            className="mix-blend-luminosity"
                        />
                    </div>
                </div>
                <div className="w-full line-left sm:line-center font-mono font-extrabold text-6xl sm:text-7xl text-[#343131]">
                    {`${data?.name}`}
                </div>
                <div className="w-full font-semibold font-mono line-right sm:line-center sm:px-12 text-right sm:text-justify text-xl  text-[#343131]">
                    {data?.bio}
                </div>
            </div>
        </div>
    );
}
