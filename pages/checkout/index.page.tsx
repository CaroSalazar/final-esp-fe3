import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { NextPage } from "next";
import { useState } from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import DatosPersonales from "dh-marvel/components/formsCheckout/DatosPersonales";
import CardDatosComic from "dh-marvel/components/formsCheckout/cardDatosComic";
import Grid2 from "@mui/material/Unstable_Grid2";

const Checkout: NextPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  let title = localStorage.getItem('title');
  let price = localStorage.getItem('price');
  let path = localStorage.getItem('pathImage')
  let extension = localStorage.getItem('extensionImage');
  let image = path + '.' + extension;

  return (
    <BodySingle title={`Checkout: ${title}`}>
      <Box sx={{ width: "100%" }}>
      <Grid2 container spacing={2}>
        <Grid2 xs={9}>
        <Box sx={{ width: "90%" }}>
          <h2>Login</h2>

          <Stepper sx={{ width: "100%" }} activeStep={activeStep}>
            <Step>
              <StepLabel>Datos Personales</StepLabel>
            </Step>
            <Step>
              <StepLabel>Dirección de entrega</StepLabel>
            </Step>
            <Step>
              <StepLabel>Datos del pago</StepLabel>
            </Step>
          </Stepper>

          {activeStep === 0 && <DatosPersonales />}
          {activeStep === 1 && <h1>Dirección de entrega</h1>}
          {activeStep === 2 && <h1>Datos del pago</h1>}
        </Box>
        </Grid2>
        <Grid2 xs={3} marginTop={10}>
        <Box>
          <CardDatosComic title={String(title)} image={String(image)} price={Number(price)} />
        </Box>
        </Grid2>
      </Grid2>
      </Box>
    </BodySingle>
  );
};
export default Checkout;
