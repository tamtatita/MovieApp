import { useReducer, useRef, useState } from "react";
import Header from "./components/global/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout";

import { publicRouter } from "./routes/RouteAll";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {publicRouter.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
