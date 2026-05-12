import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sedan({ name, description, image, price, quantity }) {
  const [open, setOpen] = useState(false);
     const navigate = useNavigate()
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
    
      <Card  sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={image} height="200" width="200" />
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: "center", color: "" }}>
            {name}
          </Typography>
          <Typography variant="">{description}</Typography>
          <Typography variant="body1" sx={{ color: "green" }}>
            <br />
            Price: {price}
            <br />
            {/* Quantity:{ quantity} */}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button>viw</Button> */}
          <Button
            sx={{ px: 12, backgroundColor: "#ff6600",color:"black" }}
            onClick={handleOpen}
          >
            Viw
          </Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            widith: 400,
            margin: "300px 600px",
            padding: "15px",
            bgcolor: "white",
            border: "2px solid #ff6600",
            boxShadow: 25,
            borderRadius: "50px",
          }}
        >
          <Typography variant="h6" align="center" sx={{ color: "orange" }}>
            {name}{" "}
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: "green" }}>
            price: {price}
          </Typography>
          <Typography variant="h6" align="center">
            description :{description}
          </Typography>
          <Button sx={{textAlign:"center",color:"black",marginLeft:"240px",bgcolor:"#ff6600",marginTop:"20px"}} onClick={() => navigate("/aboutus") }>Booking Conditions</Button>
        </Box>
      </Modal>
    </>
  );
}
export default Sedan;
