import React, { useState, useEffect } from "react";
import api from "@/services/api";
import Projects from "@/components/projects";
import { TbBrandGithubFilled } from "react-icons/tb";
import Header from "@/components/header";

export default function Home() {
    const [data, setData] = useState<any>();
    useEffect(() => {
        async function loadUserData() {
            try {
                const response = await api.get(`users/${process.env.USER}`);
                console.log("user->", response.data);
                setData(response.data);
            } catch (e: any) {
                console.log("failed to load user data ->", e);
            }
        }
        loadUserData();
    }, []);

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
            <Header data={data} />

            <div className="line-center gap-16 flex-wrap pb-32">
                <Projects />
            </div>
        </main>
    );
}
