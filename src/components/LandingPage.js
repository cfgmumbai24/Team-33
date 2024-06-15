import React from "react";
import { LogoutIcon } from "../utils/LogoutIcon";
import { BgImage } from "./BgImage";
import { Lady1 } from "./Lady1";
import { Link } from "@nextui-org/react";
import { Home } from "../utils/Home";
import { Camera } from "../utils/Camera";
import { Chat } from "../utils/Chat";
import { Games } from "../utils/Games";
import { Videos } from "../utils/Videos";

export const LandingPage = () => {
    return(
        <>
        <div className="flex justify-between">
            <h1 className="text-3xl font-extrabold p-2">Multiply 2.0</h1>
            <div className="pr-2 pt-2">
                <LogoutIcon />
            </div>
            
            {/* <div></div> */}
        </div>
        <div className="pt-16">
            <BgImage />
        </div>
        <h1 className="text-lime-500 font-bold text-2xl pt-2 pl-3">From Village to Victory:</h1>
        <h1 className="text-lime-500 font-bold text-2xl pl-3">Achieve Financial Freedom</h1>
        <div className="pl-28">
            <Lady1 />
        </div>

        <div className="bg-lime-500 flex justify-between px-2 pb-18 pt-4">
            <Link href="/" size="lg"><Home/></Link>
            <Link href="/Reels" size="lg"><Videos/></Link>
            <Link href="#" size="lg"><Camera/></Link>
            <Link href="/ChatBot" size="lg"><Chat/></Link>
            <Link href="/Game" size="lg"><Games /></Link>
        </div>
        </>

    )
}