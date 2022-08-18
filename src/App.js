import Home  from  "./components/pages/home/Home";
import React, { useState } from "react";
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import TopBar from "./components/top-bar/TopBar";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import UserID from "./components/pages/userId/UserID";
import NewUser from "./components/pages/newUser/NewUser";
import Products from "./components/pages/products/Products";
import ProductId from "./components/pages/productId/ProductId";
import NewProduct from "./components/pages/newProduct/NewProduct";

const App = () => {
  const [sidebarShow, setsidebarShow] = useState(true)
  console.log(sidebarShow);
  return (
    <BrowserRouter>
      <TopBar setsidebarShow={setsidebarShow} />
      <div className="container">
        <Sidebar setsidebarShow={setsidebarShow}  sidebarShow={sidebarShow}/>

        <Routes>
          <Route  path="/"   element={<Navigate to="/Home"/>}></Route>
          <Route  path="/Home"   element={<Home/>}/>
          <Route  path="/users"   element={<UserList/>}/>
          <Route  path="/users/:id"   element={<UserID/>}/>
          <Route  path="/newuser"   element={<NewUser/>}/>
          <Route  path="/products"   element={<Products/>}/>
          <Route  path="/products/:id"   element={<ProductId/>}/>
          <Route  path="newProduct"   element={<NewProduct/>}/>
        </Routes>

        


      </div>
      

     
    </BrowserRouter>
  );
};

export default App;
