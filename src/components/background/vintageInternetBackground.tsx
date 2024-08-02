import React, { ReactNode } from "react";

interface BackgroundProps {
    children: ReactNode;
}

export default function VintageInternetBackground({
    children,
}: BackgroundProps) {
    return (
        <main
            className={`bg-repeat w-screen h-screen overflow-auto p-4 sm:p-0`}
            /*style={{
                backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/024/790/022/original/colorful-memphis-style-seamless-pattern-abstract-geometric-shapes-funky-modern-design-and-80s-memphis-style-background-vector.jpg)`,
            }}*/
            style={{
                backgroundImage: `url(https://img.freepik.com/premium-vector/colorful-memphis-design-seamless-pattern-with-white-background_197792-859.jpg)`,
            }}
            /*
            style={{
                backgroundImage: `url(https://st2.depositphotos.com/3242059/8796/v/450/depositphotos_87965560-stock-illustration-seamless-geometric-vintage-pattern.jpg)`,
            }}*/
        >
            {children}
        </main>
    );
}
