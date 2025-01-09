import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Home } from "./pages/home/Home"
import { Users } from "./pages/users/Users";
import { Products } from "./pages/products/Products";
import { Login } from "./pages/login/Login";
import { User } from "./pages/user/User";
import { Product } from "./pages/product/Product";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";

import './styles/global.scss';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
            <QueryClientProvider client={queryClient}>
              <Outlet/>
            </QueryClientProvider>
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
        {
          path:"/user/:id",
          element : <User/>,    
        },
        {
          path:"/product/:id",
          element : <Product/>,    
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
