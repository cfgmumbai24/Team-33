import React from "react";
import { LogoutIcon } from "../utils/LogoutIcon";
import { BgImage } from "./BgImage";
import { Lady2 } from "./Lady2";
import { Link } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Home } from "../utils/Home";

export const Feed = () => {
    return(
        <>
        <div className="flex justify-between">
            <h1 className="text-3xl font-extrabold p-2">Multiply 2.0</h1>
            <div className="pr-2 pt-2">
                <LogoutIcon />
            </div>
        </div>
        <h1 className="font-semibold text-xl pl-2">Your Finance Guide: Watch and Learn</h1>
        <div className="py-2">
            <Input placeholder="Search" color="success" className="w-3/4 mx-auto text-white" />
        </div>
        <div className="pl-28">
            <Lady2 />
        </div>

        <div className="bg-lime-500 flex justify-between px-2 pb-12 pt-4">
            <Link href="/LandingPage" size="lg"><Home /></Link>
            <Link href="#" size="lg">Videos</Link>
            <Link href="#" size="lg">Camera</Link>
            <Link href="/ChatBot" size="lg">Chat</Link>
            <Link href="/Game" size="lg">Games</Link>
        </div>

        </>

    )
}