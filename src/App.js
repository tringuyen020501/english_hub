import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import "./App.css";
import ShowCard from "./components/Card/ShowCard";
import Profile from "./components/User/Profile";
import Detail from "./components/Detail/Detail";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/card" element={<ShowCard />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
         </Routes>
      </div>
   );
}
export default App;
