import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function ButtonAppBar() {
   // const [anchorEl, setAnchorEl] = React.useState(null);

   // const handleMenu = (event) => {
   //    setAnchorEl(event.currentTarget);
   // };

   // const handleClose = () => {
   //    setAnchorEl(null);
   // };
   return (
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
               <Button color="inherit" href="/login">
                  Login
               </Button>
               <Button color="inherit" href="/register">
                  Register
               </Button>
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

               {/* <Menu
                     id="menu-appbar"
                     anchorEl={anchorEl}
                     anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     open={Boolean(anchorEl)}
                     onClose={handleClose}
                  >
                     <Button
                        onClick={handleClose}
                        href="/profile"
                        color="inherit"
                     >
                        Profile
                     </Button>
                     <Button onClick={handleClose}>My account</Button>
                  </Menu> */}
            </Toolbar>
         </AppBar>
      </Box>
   );
}
