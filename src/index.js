


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import './index.css'

export default function App()
 {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
