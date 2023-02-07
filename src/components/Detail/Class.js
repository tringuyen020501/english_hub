import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
   },
   // hide last border
   "&:last-child td, &:last-child th": {
      border: 0,
   },
}));

function Class() {
   const [users, setUsers] = useState([]);

   // const onEdit = (newUser) => {
   //    setEdit(true);
   //    setShow(true);
   //    setNewUser(newUser);
   //    // if (editing == true) {
   //    //    setNewUser({ ...newUser, newUser });
   //    //    handleShow();
   //    // }
   // };
   const onDeleteUser = (currentUser) => {
      setUsers(users.filter((i) => i.id !== currentUser.id));
   };

   var myHeaders = new Headers();
   myHeaders.append("Cookie", "csrftoken=GgguGBOp7YuM79PBjdw8jazMIromyg4F");

   var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
   };

   useEffect(() => {
      fetch(
         "https://thanhnhan.pythonanywhere.com/informationClass/",
         requestOptions
      )
         .then((res) => res.json())
         .then((users) => {
            setUsers(users);
            console.log(users);
         })
         .catch((err) => console.log(err));
   }, []);
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
                     <IoArrowBackCircleSharp style={{ height: "30px" }} />
                  </a>
               </IconButton>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  href="/detail"
               >
                  About me
               </IconButton>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  href="/class"
               >
                  Class
               </IconButton>
            </Toolbar>
         </AppBar>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
               <TableHead>
                  <TableRow>
                     <StyledTableCell>id</StyledTableCell>
                     <StyledTableCell align="right">Name Class</StyledTableCell>
                     <StyledTableCell align="right">Class</StyledTableCell>
                     <StyledTableCell align="right">
                        Fee&nbsp;(VND)
                     </StyledTableCell>
                     <StyledTableCell align="right">
                        Description
                     </StyledTableCell>
                     <StyledTableCell align="right">
                        Duration&nbsp;(h)
                     </StyledTableCell>
                     <StyledTableCell align="right">Time</StyledTableCell>
                     <StyledTableCell align="right">Id Teacher</StyledTableCell>
                     <StyledTableCell align="right">Actions</StyledTableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {users.map((user, index) => (
                     <StyledTableRow key={index}>
                        <StyledTableCell component="th">
                           {user.id}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {user.ten_lop}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {user.lop}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {user.hoc_phi}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {user.mo_ta}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {user.thoi_gian}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {user.buoi}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {user.id_teacher}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {/* <Button
                           variant="info"
                           title="Edit user details"
                           onClick={() => onEdit(user)}
                        >
                           <FaPencilAlt />
                        </Button>{" "} */}
                           <Button
                              variant="danger"
                              title="Delete user"
                              onClick={() => onDeleteUser(user)}
                           >
                              <FaTrashAlt />
                           </Button>
                        </StyledTableCell>
                     </StyledTableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
}
export default Class;
