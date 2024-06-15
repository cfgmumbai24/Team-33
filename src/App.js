import { ChatBot } from "./components/ChatBot";
import { ErrorPage } from "./components/Error";
import { NavbarComp } from "./components/Navbar";
import { createBrowserRouter, Outlet } from "react-router-dom"
import Reels from "./components/Reels";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Outlet />
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
      path:'/', 
      element:<App/>, 
      errorElement:<ErrorPage/>, 
      children:[
          {
            path:'/',
            element:<ChatBot />
          },
          {
              path:'/ChatBot',
              element:<ChatBot />
          },{
            path:'/Reels',  // Add the path for the Reels component
            element:<Reels />  // Specify the Reels component as the element
        }
      ]
  }
])

export default AppRouter;
