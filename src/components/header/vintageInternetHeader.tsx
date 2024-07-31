import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { HeaderProps } from ".";

export default function VintageInternetHeader({ data }: HeaderProps) {
    return (
        <div className="line-center w-full ">
            <div className="text-black bg-white w-full sm:w-2/3 p-20 line-center flex-wrap gap-8 text-3xl my-12">
                <div className="line-center w-full relative">
                    <div className="rounded-full relative h-32 w-32">
                        <div className="w-32 h-32  overflow-hidden border-white absolute">
                            <img src={data?.avatar_url} />
                        </div>
                        <div className="border-4 border-[#30BFA5] -translate-x-2 h-32 w-32  -translate-y-2 absolute"></div>
                    </div>
                </div>
                <div className="w-full line-center font-bold text-5xl text-[#30BFA5]">
                    <div className="translate-x-4 translate-y-2 text-[#011826] bg-[#F2921D]">
                        <div className="-translate-x-4 -translate-y-2  border-4 border-[#011826]  px-2">
                            {`${data?.name}`.toUpperCase()}
                        </div>
                    </div>
                </div>
                <div className="w-full font-semibold line-center px-12 text-justify text-xl  text-[#011826]">
                    <div className="border-b-8 -translate-x-2 -translate-y-3 border-[#D91E41]">
                        <div className="translate-x-2 translate-y-3 text-2xl">
                            {data?.bio}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
