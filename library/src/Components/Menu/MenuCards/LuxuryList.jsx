import { Container, Grid, Typography } from "@mui/material";
import Luxury from "./Luxury";
function LuxuryList() {
  const CarMenu = [
    {
      id: 1,
      name: "Mercedes-Benz G-Class AMG G 63 2024",
      description: "A luxury off-road SUV with powerful performance, bold design, and premium comfort.",
      image:
        "https://www.platinumautohaus.com/imagetag/15043/7/l/Used-2024-Mercedes-Benz-G-Class-AMG-G-63.jpg",
      price: "189.99$",
       quantity: "1 days",
      
    },
    {
      id: 2,
      name: "Land Rover Defender 2026  110 in Louisville",
      description: "A rugged and modern SUV built for adventure, with advanced technology and strong capability.",
      image:
        "https://di-uploads-pod12.dealerinspire.com/landroverlouisville/uploads/2025/10/Defender-110-Exterior-about.webp",
      price: "169.99$",
       quantity: "2 days",
    },
    {
      id: 3,
      name: " Range Rover Sport 2026",
      description: "A high-performance luxury SUV with sleek design, smooth driving, and top-tier comfort.",
      image:
        "https://di-uploads-pod18.dealerinspire.com/germainlandrover/uploads/2026/01/Range-Rover-Sport-Exterior-2601.webp",
      price: "159.99$",
       quantity: "1 days",
    },
    {
      id: 4,
      name: "Mercedes-Maybach S-Class 2025",
      description: "An ultra-luxury sedan offering exceptional comfort, elegance, and advanced technology",
      image:
        "https://cdn.motor1.com/images/mgl/G33erV/s3/mercedes-maybach-haute-voiture-concept-al-design-essentials-iv.webp",
      price: "199.99$",
       quantity: "1 days",
    },
    {
      id: 5,
      name: "Rolls-Royce Black Badge 2023 ",
      description: "A premium coupe with unmatched luxury, powerful performance, and a bold, exclusive style.",
      image:
        "https://cdn.motor1.com/images/mgl/ZnM77e/s3/2023-rolls-royce-black-badge-wraith-black-arrow-interior.webp",
      price: "249.99$",
       quantity: "1 days",
    },
   
  ];

  return (
    <>
      <Container sx={{ py: 6 }}>
       
        <Grid container spacing={6}>
          {CarMenu.map((car) => {
            return (
              <Grid key={car.id}>
                <Luxury
                  name={car.name}
                  description={car.description}
                  price={car.price}
                  image={car.image}
                   quantity={car. quantity}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
export default LuxuryList;