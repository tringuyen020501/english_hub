import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import axios from "axios";
// import { CgProfile } from "react-icons/cg";
import Alert from "@mui/material/Alert";

function Profile() {
   const [users, setUsers] = useState({});

   useEffect(() => {
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "csrftoken=GgguGBOp7YuM79PBjdw8jazMIromyg4F");

      var requestOptions = {
         method: "GET",
         headers: myHeaders,
         redirect: "follow",
      };
      fetch("https://thanhnhan.pythonanywhere.com/teachers/1/", requestOptions)
         .then((response) => response.json())
         .then((result) => {
            setUsers(result);
         })
         .catch((error) => console.log("error", error));
   }, []);

   // const [image, setImage] = useState("");

   const handleChange = (e) => {
      setUsers((users) => ({ ...users, [e.target.name]: e.target.value }));
   };

   const handleSave = async () => {
      users.image_license = null;
      await axios
         .put("https://thanhnhan.pythonanywhere.com/teachers/1/", users)
         .then((users) => {
            alert("edit succes");
            setUsers(...users);
         })
         .catch((error) => console.log("error", error));
   };
   return (
      <div>
         <Box
            component="form"
            sx={{
               "& > :not(style)": { m: 1 },
               width: 300,
               maxWidth: "100%",
            }}
            noValidate
            autoComplete="off"
            marginLeft="700px"
         >
            <Avatar style={{ marginLeft: "130px" }}>P</Avatar>
            {/* <CgProfile sx={{ width: "100px" }} />
            Edit profile */}
            <TextField
               fullWidth
               sx={{ marginRight: 1 }}
               label="id"
               name={"id"}
               disabled
               value={users.id || ""}
               onChange={handleChange}
            />
            <br />
            <TextField
               fullWidth
               sx={{ marginRight: 1 }}
               id="filled-multiline-flexible"
               label="Name"
               name={"name"}
               multiline
               maxRows={4}
               value={users.name || ""}
               onChange={handleChange}
               variant="filled"
            />
            <br />
            <TextField
               fullWidth
               sx={{ marginRight: 1 }}
               id="filled-multiline-flexible"
               label="address"
               name={"address"}
               multiline
               maxRows={4}
               variant="filled"
               value={users.address || ""}
               onChange={handleChange}
            />
            <br />
            <TextField
               fullWidth
               sx={{ marginRight: 1 }}
               label="age"
               name={"age"}
               value={users.age || ""}
               id="filled-multiline-flexible"
               multiline
               maxRows={4}
               variant="filled"
               onChange={handleChange}
            />
            <br />
            <TextField
               fullWidth
               label="phone"
               name={"phone"}
               value={users.phone || ""}
               id="filled-multiline-flexible"
               multiline
               maxRows={4}
               variant="filled"
               onChange={handleChange}
            />
            <br />
            <TextField
               fullWidth
               label="licenses"
               name={"licenses"}
               value={users.licenses || ""}
               id="filled-multiline-flexible"
               multiline
               maxRows={4}
               variant="filled"
               onChange={handleChange}
            />
            <br />
            <TextField
               fullWidth
               label="describedetail"
               name={"describe_detail"}
               id="filled-multiline-flexible"
               multiline
               maxRows={4}
               variant="filled"
               value={users.describe_detail || ""}
               onChange={handleChange}
            />
            <br />
            <Button
               fullWidth
               variant="contained"
               sx={{ marginTop: 3, width: 300 }}
               onClick={handleSave}
            >
               Save
            </Button>
         </Box>
      </div>
   );
}
export default Profile;
