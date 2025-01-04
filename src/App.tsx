import { createBrowserRouter, RouterProvider, Route, Link, Outlet} from "react-router-dom";
import { Home } from "./pages/home/Home"
import { Users } from "./pages/users/Users";
import { Products } from "./pages/products/Products";
import { Login } from "./pages/login/Login";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";

import './styles/global.scss';



function App() { 
  const Layout = ()=>{
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  // 이 내용을 디비에 저장하도록 해놓으면 메뉴 구성이 동적으로 가능해진다. 
  const router = createBrowserRouter([
    {
      path:"/",
      element : <Layout/>,
      children:[
        {
          path:"/",
          element : <Home/>,    
        },
        {
          path:"/users",
          element : <Users/>,    
        },
        {
          path:"/products",
          element : <Products/>,    
        },
      ]
    },
    {
      path:"/login",
      element : <Login/>,
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
