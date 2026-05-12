import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
function Login (){
  const {login} = useContext(UserContext);
  const [formData, setformData] = useState({
   
    email: "",
    password: "",
  });
const handleSubmit = () =>{
    login(formData)
}

  return (
    <>
      <Container
        sx={{
          border: 4,
          marginTop: "100px",
          borderRadius: "50px",
          width: "900px",
         marginBottom:"100px"
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "#ff6600", textAlign: "center", marginTop: "30px" }}
        >
          Sign in
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            m: 3,
            gap: 3,
            alignItems: "center",
          }}
        >
         
          <TextField
            label="Email:"
            value={formData.email}
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
            sx={{ width: { xs: "100%", sm: "600px" } }}
            type="email"
          />
          <TextField
            label="Password:"
            value={formData.password}
            onChange={(e) =>
              setformData({ ...formData, password: e.target.value })
            }
            sx={{ width: { xs: "100%", sm: "600px" } }}
            type="password"
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ width: { xs: "100%", sm: "200px" } }}
            type="submit"
          >
           Login
          </Button>
        </Box>
      </Container>
    </>
  );
}
 
export default Login;