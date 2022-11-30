import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import "./App.css";
import ShowCard from "./components/Card/ShowCard";
import Profile from "./components/User/Profile";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Navbar />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
         </Routes>
         <ShowCard />
      </div>
   );
}
export default App;
