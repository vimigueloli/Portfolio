import React, { useState, useEffect } from "react";
import api from "@/services/api";
import Projects from "@/components/projects";

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
        <main className={`bg-black w-screen h-screen overflow-auto`}>
            <div className="text-white line-center flex-wrap gap-8 text-3xl my-12">
                <div className="line-center w-full">
                    <div className="w-32 h-32 rounded-full border overflow-hidden border-white">
                        <img src={data.avatar_url} />
                    </div>
                </div>
                <div className="w-full line-center">{data.name}</div>
                <div className="w-full line-center px-12 text-justify text-xl">
                    {data.bio}
                </div>
            </div>
            <div className="line-center gap-16 flex-wrap pb-32">
                <Projects />
            </div>
        </main>
    );
}
