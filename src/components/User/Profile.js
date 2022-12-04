import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Profile() {
   const [info, setInfo] = useState({
      email: "tringuyen252001@gamil.com",
      name: "tri",
      age: "21",
      address: "da nang",
      phone: "0123214434",
      degree: "Ielts",
   });

   const handleChange = (e) => {
      setInfo((info) => ({ ...info, [e.target.name]: e.target.value }));
   };

   const handleSave = () => {
      console.log({ info });
   };
   return (
      <div>
         <Box
            component="form"
            sx={{
               "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
         >
            <TextField
               sx={{ marginRight: 1 }}
               label="email"
               name={"email"}
               value={info.email}
               onChange={handleChange}
            />
            <TextField
               sx={{ marginRight: 1 }}
               label="name "
               name={"name"}
               value={info.name}
               onChange={handleChange}
            />
            <TextField
               sx={{ marginRight: 1 }}
               label="age"
               name={"age"}
               value={info.age}
               onChange={handleChange}
            />
            <TextField
               sx={{ marginRight: 1 }}
               label="address"
               name={"address"}
               value={info.address}
               onChange={handleChange}
            />
            <TextField
               label="phone"
               name={"phone"}
               value={info.phone}
               onChange={handleChange}
            />
            <br />
            <TextField
               label="phone"
               name={"phone"}
               value={info.degree}
               onChange={handleChange}
            />
            <br />
            <Button
               variant="contained"
               sx={{ marginTop: 3, width: 100 }}
               onClick={handleSave}
            >
               Save
            </Button>
         </Box>
      </div>
   );
}
export default Profile;
