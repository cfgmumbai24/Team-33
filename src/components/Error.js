import { useRouteError } from "react-router-dom"
import { NavbarComp } from "./Navbar"
export const ErrorPage = () =>{
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <NavbarComp/>
            <h1>Oops!!</h1>
            <h2>{err.status}, {err.statusText}</h2>
            <h3>Something Went Wrong!!</h3>
        </div>
    )
}