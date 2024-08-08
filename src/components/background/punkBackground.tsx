import styleTypes from "@/styles/stylesTypes";
import React, { ReactNode } from "react";

interface BackgroundProps {
    children: ReactNode;
}

export default function PunkBackground({ children }: BackgroundProps) {
    console.log("fundo->", styleTypes[`${process.env.STYLE}`].bg);
    const bgList = styleTypes[`${process.env.STYLE}`].bg;

    return (
        <main
            className={`w-screen h-screen overflow-y-auto p-0 relative bg-[#271569]`}
        >
            <div className="fixed line-right w-screen h-screen items-start mix-blend-soft-light flex-wrap ">
                <div className=" sm:rotate-12 sm:-translate-x-96 sm:absolute">
                    <img src={`${bgList[2]}`} />
                </div>
                <div className=" sm:translate-x-48 sm:-rotate-12 ">
                    <img src={`${bgList[4]}`} />
                </div>
            </div>
            <div
                className="fixed w-screen h-screen bg-center bg-contain mix-blend-multiply"
                style={{
                    backgroundImage: `url(${bgList[0]})`,
                }}
            />

            <div className="w-screen h-screen absolute overflow-y-auto ">
                {children}
            </div>
        </main>
    );
}
