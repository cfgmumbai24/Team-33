import { ChatBot } from "./components/ChatBot";
import { ErrorPage } from "./components/Error";
import { NavbarComp } from "./components/Navbar";
import { createBrowserRouter, Outlet } from "react-router-dom"
import { GamePlatform } from "./components/GamePlatform";
import { LandingPage } from "./components/LandingPage";
import Reels from "./components/Reels";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <ChatBot />
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
      path:'/ChatBot', 
      element:<App/>, 
      errorElement:<ErrorPage/>
  },
  {
    path:'/Game',
    element:<GamePlatform/>
  },
  {
    path:'/',
    element:<LandingPage />
  },
  {
    path:'/Reels',
    element:<Reels />
  }
])

export default AppRouter;
