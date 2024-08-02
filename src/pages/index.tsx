import React, { useState, useEffect } from "react";
import api from "@/services/api";
import Projects from "@/components/projects";
import { TbBrandGithubFilled } from "react-icons/tb";
import Header from "@/components/header";
import Background from "@/components/background";

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
        <Background>
            <Header data={data} />

            <div className="line-center gap-16 flex-wrap pb-32">
                <Projects />
            </div>
        </Background>
    );
}
