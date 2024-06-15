import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem
  } from "@nextui-org/react";

import { Link, Divider } from "@nextui-org/react";
import { NgoLogo } from "../utils/NgoLogo"
import { useLocation } from "react-router-dom";

export const NavbarComp = () =>{
    var loc = useLocation().pathname.split("/")[1].toLowerCase()

    return(
        <Navbar maxWidth="full" className="bg-black bg-opacity-80 px-0 b-0 m-0">
            <NavbarBrand>
                <NgoLogo  className="m-0 b-0 p-0 -inset-x-10"/>
                <div className="flex-colomn justify-between space-x-2 pl-2">
                    <p class="font-extrabold text-2xl text-white">CHARITY</p>
                    <p class="font-bold text-xs  text-white">Beautiful Chartiy</p>
                </div>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem >
                    <Link color="foreground" className={loc !== '' ? "text-white":"text-white underline underline-offset-8"} href="/">
                        Home
                    </Link>
                </NavbarItem>
                <Divider orientation="vertical" className="h-3/5 pt-1 bg-gray-600"/>
                <NavbarItem>
                    <Link color="foreground" className={loc !== 'chatbot' ? "text-white":"text-white underline underline-offset-8"} href="/ChatBot">
                        ChatBot
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}