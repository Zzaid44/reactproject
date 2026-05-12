import { Container, Grid, Typography } from "@mui/material";
import Caravan from "./caravan";
function CaravanList() {
  const CarMenu = [
    {
      id: 1,
      name: "Motorhome 2021",
      description: "2-bedroom mobile home with kitchen & bathroom. Modern, comfortable, and ideal for families, travel, and camping.",
      image:
        "https://www.nirvc.com/blog/wp-content/uploads/2022/08/Top-Motorhome-Brands-in-2021.jpg",
      price: "109.99$",
       quantity: "1 days",
      
    },
    {
      id: 2,
      name: "Motorhome 2020",
      description: "1-bedroom mobile home with kitchen & bathroom. Compact, modern, and perfect for solo travelers or couples.",
      image:
        "https://mpmotorhomes.com.br/wp-content/uploads/2025/10/IMG-20251018-WA0032.jpg",
      price: "89.99$",
       quantity: "2 days",
    },
  
   
  ];

  return (
    <>
      <Container sx={{ py: 6 }}>
       
        <Grid container spacing={6}>
          {CarMenu.map((car) => {
            return (
              <Grid key={car.id}>
                <Caravan
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
export default CaravanList;