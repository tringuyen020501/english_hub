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
         <a className="card__btn" href="/detail" textDecoration="none">
            View More
         </a>
      </div>
   );
}

function Navbar() {
   const [info, setInfo] = useState({
      username: "Thanh Nhân",
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
               img="https://kos.edu.vn/wp-content/uploads/2018/02/Mark.jpg"
               title="Thầy Mark Anthony Page"
               description="Tốt nghiệp Đại Học SaintPeter College chuyên ngành Tiếng Anh và Triết Học loại ưu+ Liên tục 6 lần dành giải"
            />

            <Card
               title="
               Cô TES – MARIA TERESA ADOLFO"
               img="https://cdn.fbsbx.com/v/t59.2708-21/317399065_536449441698738_4728291993065479637_n.gif?_nc_cat=108&ccb=1-7&_nc_sid=041f46&_nc_ohc=mAJ4DjGJRJgAX-jaDvr&_nc_oc=AQl4DSLQePBYvB3OAXmYwC1YFcbp6bGf6M_j_lAABJ0OlDiK36AsV8NhKkqR-xt8E7V4CTz96bN2kYlXcklyT8eH&_nc_ht=cdn.fbsbx.com&oh=03_AdSDcUmZbVBuj_MeCBdTnX407qTq8fsDxAiRG-MhoGEfxg&oe=639A090D"
               description="Kinh nghiệm 10 năm giảng dạy IELTS tại Hà Nội, từng đảm nhiệm vị trí Head Teacher trong 3 năm liên tiếp tại một trung tâm lớn khác ở Hà Nội."
            />

            <Card
               title="Thầy Lê Thành Công"
               img="https://kos.edu.vn/wp-content/uploads/2020/03/gv3.png"
               description="Tốt nghiệp loại ưu trường RMIT tại Việt Nam, chứng chỉ TESOL. Bảng điểm IELTS 7.5.Sở hữu chứng chỉ training về các modules Speaking & Writing của British Council"
            />

            <Card
               img="https://kos.edu.vn/wp-content/uploads/2020/03/gv4.png"
               title="Cô Nguyễn Minh Nhã"
               description="Cô Nhã là một giáo viên dạy giỏi từ trình độ cơ bản đến IELTS 6.5.Chứng chỉ TESOL trường Autralian International College"
            />
            <Card
               img="https://cdn.fbsbx.com/v/t59.2708-21/318623487_3323386091242682_3014742167603199418_n.gif?_nc_cat=105&ccb=1-7&_nc_sid=041f46&_nc_ohc=ipQvaAfBydcAX_8Dgr5&_nc_ht=cdn.fbsbx.com&oh=03_AdQMYTIguyB6y4hY_gNMfMPlOaP4zgscMQptqO3Vth3M8Q&oe=6399DA2C"
               title="Thầy James Jacob"
               description=" Hơn 6 năm theo đuổi sự nghiệp giảng dạy Tiếng Anh tại các nước châu Á như : Trung Quốc, Hàn Quốc, Việt Nam,.. thầy luôn truyền nhiệt huyết, đam mê về ngôn ngữ đến với các học sinh của mình."
            />
            <Card
               img="https://kos.edu.vn/wp-content/uploads/2020/03/thay-cong.jpg"
               title="Thầy Hamed Hashemian"
               description=" Là 1 giảng viên ưu tú với 9 năm kinh nghiệm giảng dạy IELTS, 5 năm kinh nghiệm training giáo viên dạy IELTS"
            />
         </div>
      </div>
   );
}
export default ShowCard;
