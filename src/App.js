import * as React from "react";
import { Routes, Route } from "react-router-dom";
// import Register from "./components/User/Register";
import Login from "./components/User/Login";
import "./App.css";
import ShowCard from "./components/Card/ShowCard";
import Profile from "./components/User/Profile";
import Detail from "./components/Detail/Detail";
import Class from "./components/Detail/Class";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/card" element={<ShowCard />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/class" element={<Class />}></Route>
         </Routes>
      </div>
   );
}
export default App;
