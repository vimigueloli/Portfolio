import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { HeaderProps } from ".";
import styleTypes from "@/styles/stylesTypes";

export default function PunkHeader({ data }: HeaderProps) {
    const bgList = styleTypes[`${process.env.STYLE}`].bg;
    return (
        <div className="line-center w-full relative ">
            <div className="text-[#343131] w-full sm:w-2/3 p-20 line-center flex-wrap gap-8 text-3xl my-12">
                <div className="sm:line-center line-center w-full relative  -bg-[#271569]">
                    <div className="">
                        <div className=" relative h-48 w-48">
                            <div className="w-full h-full overflow0-hidden absolute z-30 mix-blend-hard-light rounded-full overflow-hidden">
                                <img src={data?.avatar_url} />
                            </div>
                            <div className="w-full h-full bg-[#271569] z-20 absolute overflow-hidden rounded-full" />
                            <div className="w-full h-full bg-purple-900 scale-105 blur-sm skew-x-6 skew-y-6 mix-blend-hard-light  absolute overflow-hidden rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="w-full font-face-collage relative line-left sm:line-center font-mono font-extrabold text-6xl sm:text-7xl ">
                    <div className="skew-x-6 skew-y-6 mix-blend-color-dodge bg-[#11040d]">
                        <div className="font-face-collage p-2 text-center text-white mix-blend-color-dodge">
                            {`${data?.name}`.toUpperCase()}
                        </div>
                    </div>
                </div>
                <div className="w-full font-semibold font-mono line-right sm:line-center sm:px-12 text-right sm:text-justify text-xl text-white">
                    <div className="-skew-x-3 -skew-y-3 mix-blend-color-dodge bg-[#11040d]">
                        {data?.bio}
                    </div>
                </div>
            </div>
        </div>
    );
}
