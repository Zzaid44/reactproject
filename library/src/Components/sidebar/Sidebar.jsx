import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

function Sidebar({ open, toggleSidebar }) {
  const { currentUser,logout } = useContext(UserContext);
  const navigate = useNavigate;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "silver",
          color: "white",
          minHeight: "100vh",

          p: 2,
          width: open ? "280px" : "60px",
          transition: "width 0.3s ease",
          borderRadius: 3,
         alignItems:"center"
        }}
      >
        <IconButton
          onClick={toggleSidebar}
          sx={{
            color: "red",
            bgcolor: "white",
            mb: 3,
          }}
        ></IconButton>
        {open ? (
          <Typography>Hello,{currentUser?.name}</Typography>
        ) : (
          <Typography>Hi</Typography>
        )}
        <Divider sx={{ bgcolor: "white", mb: 2 }} />
        <List>
          <ListItem button component="div">
            <ListItemText onClick={() => navigate("/admindashboard")} primary={open ? "Dashboard" : "D"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={open ? "users" : "u"} />
          </ListItem>
          <ListItem button>
            <ListItemText onClick={logout()} primary={open ? "logout" : "l"} />
          </ListItem>
        </List>
      </Box>
    </>
  );
}
export default Sidebar;
