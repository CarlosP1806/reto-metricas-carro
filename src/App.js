import { Container, Grid, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import "./index.css";
import { LineChart } from "@mui/x-charts";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Typography
          variant="h6"
          sx={{ textAlign: "center", mt: "1.5rem", mb: "1.5rem" }}
        >
          Variables
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Typography sx={{ mb: "1rem" }}>
              Sensor BMP280 (Presión y temperatura)
            </Typography>
            <Grid container spacing={3}>
              <Grid item sm={2}>
                <img
                  src="/images/sensor-bmp280.jpg"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item sm={3}>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                />
              </Grid>
              <Grid item sm={3}>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                />
              </Grid>
              <Grid item sm={3}>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <Typography>Sensor GY-61 (Aceleración)</Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography>Sensor HC-SR04 (Distancia)</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
