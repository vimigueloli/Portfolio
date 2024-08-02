import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import VintageInternetHeader from "./vintageInternetHeader";
import styleTypes from "@/styles/stylesTypes";

export interface HeaderProps {
    data: any;
}

export default function Header({ data }: HeaderProps) {
    const Element = styleTypes[`${process.env.STYLE}`].Header;
    return <Element data={data} />;
}
