import { Box, Container, Typography, Stack, Link } from "@mui/material";

export default function Footer() {

  return (

    <Box

      component="footer"

      sx={{

        backgroundColor: "#111",

        color: "#fff",

        py: 3,

        mt: 5,

        textAlign: "center",

      }}

    >

      <Container maxWidth="lg">
       
        <Typography variant="h2" gutterBottom sx={{fontWeight:"bold"}}>

          Drive
          <Box component="span" sx={{color:"#ff6600",textShadow:"0 0 8px #ff6600",fontWeight:"bold"}}>Z</Box>

        </Typography>
       
      

        <Stack

          direction="row"

          spacing={3}

          justifyContent="center"

          sx={{ mb: 2 }}

        >

          <Link href="#" color="inherit" underline="hover">

            Facebook

          </Link>

          <Link href="#" color="inherit" underline="hover">

            Instagram

          </Link>

          <Link href="#" color="inherit" underline="hover">

            Twitter

          </Link>

          

        </Stack>

        <Typography variant="body2" sx={{ opacity: 0.6 }}>

          © {new Date().getFullYear()} DriveZ. All rights reserved.

        </Typography>

      </Container>

    </Box>

  );

}