import React, { useState, useEffect } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";

function MyList() {
   const [users, setUsers] = useState({});
   useEffect(() => {
      fetch("https://thanhnhan.pythonanywhere.com/teachers/1/")
         .then((response) => response.json())
         .then((users) => {
            setUsers(users);
            console.log(users.avater);

            console.log(users);
         })
         .catch((err) => console.log(err));
   }, []);
   return (
      <ul style={{ marginLeft: "40px", color: "red" }}>
         <li>{users.id}</li>
         <li>{users.name}</li>
         <li>{users.age}</li>
         <li>{users.address}</li>
         <li>{users.phone}</li>
         <li>{users.licenses}</li>
         {/* <li>{users.image_license}</li>
            <li>{users.avatar}</li> */}
         <li>{users.describe_detail}</li>
         <li>{users.id_user}</li>
      </ul>
   );
}

function Detail() {
   return (
      <div>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
               >
                  <a href="/card" style={{ color: "white" }}>
                     <IoArrowBackCircleSharp />
                  </a>
               </IconButton>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  href="/detail"
                  underline="none"
               >
                  About
               </IconButton>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  href="/class"
                  underline="none"
               >
                  Class
               </IconButton>
            </Toolbar>
         </AppBar>
         <img
            src={
               "https://www.chapelfordvillageprimary.co.uk/images/pageheaders/english_conversation_class.jpg"
            }
            height={"450px"}
            width={"100%"}
         />
         <br />
         <p>
            Tình yêu là thứ tình cảm đặc biệt mỗi người đều trải qua ít nhất 1
            lần trong đời. Những câu châm ngôn tình yêu chia sẻ trong bài viết
            dưới đây sẽ giúp bạn cảm nhận rõ hơn những cung bậc cảm xúc như:
            buồn, vui, hạnh phúc, đau khổ, nhớ nhung, hối tiếc ... Chắc hẳn các
            bạn sẽ bắt gặp hình ảnh chuyện tình của mình trong 1 vài câu châm
            ngôn này
         </p>
         <br />
         <MyList />
      </div>
   );
}
export default Detail;
