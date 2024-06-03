import React, { useState, useEffect } from "react";
import api from "@/services/api";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <main className={`bg-black w-screen h-screen overflow-auto`}>
            <div className="text-white text-3xl">User Data</div>
            <div className="line-center gap-16 flex-wrap">
                <Projects />
            </div>
        </main>
    );
}
