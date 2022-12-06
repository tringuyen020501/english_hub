import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

import "../Card/image.scss";
import { Link } from "@mui/material";

function Card(props) {
   // const [url, setURL] = useState(
   //    "https://freenice.net/wp-content/uploads/2021/10/Hinh-ve-don-gian-cute-dang-yeu-va-de-thuc-hien.jpg"
   // );
   // const handleChange = (e) => {
   //    setURL(URL.createObjectURL(e.target.files[0]));
   // };
   return (
      <div className="card">
         <div className="card__body">
            <img className="card__image" src={props.img} alt="Avatar" />
            {/* <input type="file" name="avatar" onChange={handleChange} /> */}
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
         </div>
         <a className="card__btn" href="/login">
            View More
         </a>
      </div>
   );
}

function Navbar() {
   const [info, setInfo] = useState({
      username: "tri nguyen",
      password: "12345",
      role: "student",
      interest: "",
   });
   return (
      <div>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
               <Toolbar>
                  <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="menu"
                     sx={{ mr: 2 }}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     ENGLISH HUB
                  </Typography>
                  {/* <Button color="inherit" href="/login">
                     Login
                  </Button>
                  <Button color="inherit" href="/register">
                     Register
                  </Button> */}
                  Hi {info.username}
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     // onClick={handleMenu}
                     color="inherit"
                     href="/profile"
                  >
                     <AccountCircle />
                  </IconButton>
               </Toolbar>
            </AppBar>
         </Box>
      </div>
   );
}

function ShowCard() {
   return (
      <div>
         <Navbar />
         <div className="wrapper">
            <Card
               img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
               title="NVA"
               description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
            />

            <Card
               title="NVA"
               img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
               description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
            />

            <Card
               title="NVA"
               img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
               description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
            />

            <Card
               img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
               title="NVA"
               description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
            />
            <Card
               img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
               title="NVA"
               description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
            />
            <Card
               img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
               title="NVA"
               description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
            />
            <Card
               img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
               title="NVA"
               description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
            />
            <Card
               img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
               title="NVA"
               description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
            />
         </div>
      </div>
   );
}
export default ShowCard;
