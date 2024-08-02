import styleTypes from "@/styles/stylesTypes";
import React, { ReactNode } from "react";

interface BackgroundProps {
    children: ReactNode;
}

export default function FlatBackground({ children }: BackgroundProps) {
    console.log("fundo->", styleTypes[`${process.env.STYLE}`].bg);
    const bgList = styleTypes[`${process.env.STYLE}`].bg;

    return (
        <main
            className={`w-screen h-screen overflow-y-auto p-4 sm:p-0 relative bg-[#F2F0E9]`}
            // className={`bg-stone-300 w-screen h-screen overflow-y-auto p-4 sm:p-0 relative bg-gradient-to-t from-[#B9B7AF]  to-[#F2F0E9]`}
            /*style={{
                backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/024/790/022/original/colorful-memphis-style-seamless-pattern-abstract-geometric-shapes-funky-modern-design-and-80s-memphis-style-background-vector.jpg)`,
            }}*/

            /*
            style={{
                backgroundImage: `url(https://st2.depositphotos.com/3242059/8796/v/450/depositphotos_87965560-stock-illustration-seamless-geometric-vintage-pattern.jpg)`,
            }}*/
        >
            <div
                className="fixed w-screen h-screen bg-center mix-blend-difference opacity-30"
                style={{
                    backgroundImage: `url(${bgList[Number(process.env.BG)]})`,
                }}
            />

            <div className="w-screen h-screen absolute overflow-y-auto">
                {children}
            </div>
        </main>
    );
}
