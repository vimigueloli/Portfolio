import styleTypes from "@/styles/stylesTypes";
import React, { ReactNode } from "react";

interface BackgroundProps {
    children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
    const Element = styleTypes[`${process.env.STYLE}`].Background;

    return <Element>{children}</Element>;
}
