import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { NextPage } from "next";
import { useState } from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

const Checkout: NextPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  return (
    <BodySingle title={"Checkout"}>
      <Box>
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

        {activeStep === 0 && <h2>Datos personales</h2>} 
        {activeStep === 1 && <h1>Dirección de entrega</h1>}
        {activeStep === 2 && <h1>Datos del pago</h1>}
      </Box>
    </BodySingle>
  );
};
export default Checkout;
