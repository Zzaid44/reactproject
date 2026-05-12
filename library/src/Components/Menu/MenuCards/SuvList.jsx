import { Container, Grid, Typography } from "@mui/material";
import Suv from "./Suv";

function SuvList() {
  const CarMenu = [
    {
      id: 1,
      name: "Kia Sportage 2020",
      description: "Compact SUV with modern design, smooth handling, and great fuel efficiency—perfect for daily driving.",
      image:
        "https://di-uploads-pod20.dealerinspire.com/kiafortwaltonbeach/uploads/2019/07/suv-img-sportage.jpg",
      price: "49.99$",
       quantity: "1 days",
      
    },
    {
      id: 2,
      name: "Hyundai Santa 2019",
      description: "Spacious and comfortable SUV with advanced safety features, ideal for families and long trips.",
      image:
        "https://i.gaw.to/content/photos/38/57/385743_2019_Hyundai_Santa_Fe.jpg",
      price: "49.99$",
       quantity: "2 days",
    },
    {
      id: 3,
      name: " Mitsubishi Outlander 2024 ",
      description: "Modern SUV with sleek design, smart technology, and excellent fuel efficiency for everyday use.",
      image:
        "https://di-uploads-pod13.dealerinspire.com/jiddmotors/uploads/2024/08/Behind-the-Wheel-of-the-2024-Mitsubishi-Outlander-Sport.png",
      price: "54.99$",
       quantity: "1 days",
    },
    {
      id: 4,
      name: "Toyota RAV4 2024",
      description: "Reliable and versatile SUV with strong performance and great efficiency for city and adventure.",
      image:
        "https://dealerinspire1.s3.amazonaws.com/KDi-B-dqtiXrrVOyJy4%3D/CDy2BvBgoiXPo024/Vm3qVg%3D%3D/Vm3qVrldkFOfrkOzNjoo/RAV4.jpg",
      price: "59.99$",
       quantity: "1 days",
    },
    {
      id: 5,
      name: "GMC 2022 ",
      description: "Powerful and roomy SUV with bold styling, perfect for comfort and long-distance travel.",
      image:
        "https://media.ed.edmunds-media.com/gmc/terrain/2022/oem/2022_gmc_terrain_4dr-suv_at4_fq_oem_1_1600x1067.jpg",
      price: "69.99$",
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
                <Suv
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
export default SuvList;
