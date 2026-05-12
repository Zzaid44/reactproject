import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function HomeCard() {
    const navigate = useNavigate();
  return (
    <>
      <Container sx={{ py: 6 }}>
        <Typography variant="h3" sx={{ py: 4, px: 8, color: "black" }}>
          
          Categories:
        </Typography>
        <hr />
        <hr />
        <Grid  container spacing={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image="https://cdn.motor1.com/images/mgl/6ZpQ7l/s3/2022-hyundai-tucson-xrt.webp"
              height="200"
              width="400"
            />
            <CardContent>
              <Typography variant="h4" sx={{ px: 15 }}>
                {" "}
                suv{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button  
                sx={{ px: 18, backgroundColor: "#ff6600" }}
              onClick={() => navigate("/suv")}>view</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image="https://resource.digitaldealer.com.au/image/67454125369d7278c52c5d347004873_900_0-f.jpg"
              height="200"
              width="400"
            />
            <CardContent>
              <Typography variant="h4" sx={{ px: 14 }}>
                sedan
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ px: 18, backgroundColor: "#ff6600" }}
               onClick={() => navigate("/sedan")}>view</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image="https://di-uploads-pod26.dealerinspire.com/landroveranaheimhills/uploads/2025/07/Range-Rover.jpg"
              height="200"
              width="400"
            />
            <CardContent>
              <Typography variant="h4" sx={{ px: 14 }}>
                Luxury{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ px: 18, backgroundColor: "#ff6600" }} onClick={() => navigate("/luxury")}>view</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image="https://caravanit.in/wp-content/uploads/2024/12/home-banner-2-1024x576.jpg"
              height="200"
              width="400"
            />
            <CardContent>
              <Typography variant="h4" sx={{ px: 13 }}>
                caravan{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ px: 18, backgroundColor: "#ff6600" }}onClick={() => navigate("/caravan")}>view</Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </>
  );
}
export default HomeCard;
