import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import VintageInternetHeader from "./vintageInternetHeader";

export interface HeaderProps {
    data: any;
}

export default function Header({ data }: HeaderProps) {
    return <VintageInternetHeader data={data} />;
    /*return (
        <div className="text-white line-center flex-wrap gap-8 text-3xl my-12">
            <div className="line-center w-full relative">
                <div className="line-right w-32 h-8 text-white absolute">
                    <a
                        href={`https://github.com/${data?.login}`}
                        className="w-8 h-8 bg-white cursor-pointer p-0 overflow-hidden text-black items-end rounded-full translate-x-2 translate-y-8 line-center"
                    >
                        <TbBrandGithubFilled size={25} />
                    </a>
                </div>
                <div className="w-32 h-32 rounded-full border overflow-hidden border-white">
                    <img src={data?.avatar_url} />
                </div>
            </div>
            <div className="w-full line-center">{data?.name}</div>
            <div className="w-full line-center px-12 text-justify text-xl">
                {data?.bio}
            </div>
        </div>
    );*/
}
