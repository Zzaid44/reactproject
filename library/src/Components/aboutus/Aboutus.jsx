import { Box, Container, Typography, Grid, Paper } from "@mui/material";

export default function AboutUs() {

  return (

    <Box

      id="about"

      sx={{

        py: 8,

        backgroundColor: "#111",

        color: "#fff",

      }}

    >

      <Container maxWidth="lg">

        <Typography

          variant="h3"

          sx={{

            fontWeight: "bold",

            mb: 2,

            textAlign: "center",

          }}

        >

          About Us

        </Typography>

        <Typography

          sx={{

            textAlign: "center",

            color: "#bbb",

            mb: 6,

            maxWidth: "800px",

            mx: "auto",

          }}

        >

          DriveZ provides reliable and professional car rental services

          with clear booking policies to ensure comfort and safety for all

          customers.

        </Typography>

        <Grid container spacing={4}>

          {/* Booking Conditions */}

          <Grid item xs={12} md={6}>

            <Paper

              sx={{

                p: 4,

                height: "100%",

                backgroundColor: "#1a1a1a",

                borderRadius: "16px",

              }}

            >

              <Typography

                variant="h5"

                sx={{ mb: 3, color: "#ffffff", fontWeight: "bold" }}

              >

                Booking Conditions

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • The booking must be made by the driver himself.

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • The driver must be an adult with a valid driving license.

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • Tourists are required to provide an international driving

                license.

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • Jordanian citizens must provide a national ID card.

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • Tourists must provide their passport.

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • A signed cheque equal to the car value is required to

                guarantee the rental company’s rights.

              </Typography>

              <Typography sx={{ color: "#ddd" }}>

                • The vehicle must be inspected carefully by both the company

                and the customer before delivery.

              </Typography>

            </Paper>

          </Grid>

          {/* Rental Policy */}

          <Grid item xs={12} md={6}>

            <Paper

              sx={{

                p: 4,

                height: "100%",

                backgroundColor: "#1a1a1a",

                borderRadius: "16px",

              }}

            >

              <Typography

                variant="h5"

                sx={{ mb: 3, color: "#ffffff", fontWeight: "bold" }}

              >

                Rental Policy

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • The rental period must be agreed upon before booking the

                vehicle.

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • If you wish to extend your booking, please contact us by

                phone.

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • Extension is only possible if the vehicle is not already

                booked for the delivery date.

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • Caravan booking is available for tourists only.

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • Minimum caravan rental period is 3 days.

              </Typography>

              <Typography sx={{ mb: 2, color: "#ddd" }}>

                • Bookings are confirmed through phone calls or email.

              </Typography>

              <Typography

                sx={{

                  color: "#ffffff",

                  fontWeight: "bold",

                  mt: 3,

                }}

              >

                Contact Information

              </Typography>

              <Typography sx={{ color: "#ddd", mt: 1 }}>

                📞 0771211336

              </Typography>

              <Typography sx={{ color: "#ddd" }}>

                📞 0770163839

              </Typography>

              <Typography sx={{ color: "#ddd", mt: 1 }}>

                ✉️ zaidbanisakher286@gmail.com

              </Typography>

            </Paper>

          </Grid>

        </Grid>

      </Container>

    </Box>

  );

}