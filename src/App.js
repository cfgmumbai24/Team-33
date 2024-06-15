import { ChatBot } from "./components/ChatBot";
import { ErrorPage } from "./components/Error";
import { NavbarComp } from "./components/Navbar";
import { createBrowserRouter, Outlet } from "react-router-dom"

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
          }
      ]
  }
])

export default AppRouter;
