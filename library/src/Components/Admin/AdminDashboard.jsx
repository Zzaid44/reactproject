import { Box, Typography } from "@mui/material";
import Sidebar from "../sidebar/sidebar.jsx";
import { useState } from "react";

function AdminDashboard() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
          justifyContent:"center"
      
        }}
      >
        <Sidebar open={open} toggleSidebar={toggleSidebar} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography>admin dashboard</Typography>
        </Box>
      </Box>
    </>
  );
}
export default AdminDashboard;
