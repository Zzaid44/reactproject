import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
function Register() {
    const {register} = useContext(UserContext);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log(formData);
     register(formData);
  };

  return (
    <>
      <Container
        sx={{
          border: 4,
          marginTop: "100px",
          borderRadius: "50px",
          width: "900px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "#ff6600", textAlign: "center", marginTop: "30px" }}
        >
          Sign Up
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
            label="Name:"
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
            sx={{ width: { xs: "100%", sm: "600px" } }}
          />
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
            Register
          </Button>
        </Box>
      </Container>
    </>
  );
}
export default Register;
