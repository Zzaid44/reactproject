import { Container, Grid, Typography } from "@mui/material";
import Sedan from "./Sedan";

function SedanList() {
  const SedanMenu = [
    {
      id: 1,
      name: "Toyota Camry 2020",
      description: "A comfortable and reliable sedan with smooth performance and excellent fuel efficiency.",
      image:
        "https://media.ed.edmunds-media.com/toyota/camry/2020/oem/2020_toyota_camry_sedan_se-nightshade-edition_fq_oem_1_1600x1067.jpg",
      price: "34.99$",
      quantity: "1 days",
    },

    {
      id: 2,
      name: " Hyundai Sonata 2018",
      description: "A stylish sedan with a spacious interior and a smooth, fuel-efficient ride.",
      image:
        "https://media.ed.edmunds-media.com/hyundai/sonata/2018/oem/2018_hyundai_sonata_sedan_limited-20t_fq_oem_1_1600x1067.jpg",
      price: "29.99$",
      quantity: "2 days",
    },
    {
      id: 3,
      name: "Kia Optima 2019",
      description: "A modern sedan offering comfort, sleek design, and great value for everyday driving.",
      image:
        "https://media.ed.edmunds-media.com/kia/optima/2019/oem/2019_kia_optima_sedan_sx_fq_oem_3_1600x1067.jpg",
      price: "29.99$",
      quantity: "2 days",
    },
    {
      id: 4,
      name: "Toyota Corolla 2020",
      description: "A compact and dependable sedan known for its efficiency and easy handling.",
      image:
        "https://dealer26407.dealeron.com/blogs/6087/wp-content/uploads/2024/10/2020-Toyota-Corolla.jpg",
      price: "29.99$",
      quantity: "2 days",
    },
    {
      id: 5,
      name: "Ford Fusion 2017",
      description: "A well-balanced sedan with a comfortable ride and solid performance for daily use.",
      image:
        "https://cdn.motor1.com/images/mgl/zjKK6/s3/2017-ford-fusion.webp",
      price: "29.99$",
      quantity: "2 days",
    },
    {
      id: 6,
      name: "Honda Accord 2017",
      description: "A spacious and reliable sedan with strong performance and advanced safety features.",
      image:
        "https://hips.hearstapps.com/autoweek/assets/s3fs-public/2017-honda-accord-hybrid-1.jpg",
      price: "29.99$",
      quantity: "2 days",
    },
    {
      id: 7,
      name: "fox wagon 2020",
      description: "A refined sedan with a premium feel, smooth driving experience, and solid build quality.",
      image:
        "https://www.carscoops.com/wp-content/uploads/2018/12/49db3fbb-2019-vw-passat-1024x554.jpg",
      price: "29.99$",
      quantity: "2 days",
    },
  ];

  return (
    <>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={6}>
          {SedanMenu.map((car) => {
            return (
              <Grid key={car.id}>
                <Sedan
                  name={car.name}
                  description={car.description}
                  price={car.price}
                  image={car.image}
                  quantity={car.quantity}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
export default SedanList;
