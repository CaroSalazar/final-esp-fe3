import { Box, Step, StepLabel, Stepper, Stack, Button } from "@mui/material";
import { useState } from "react";
import BodySingle from "../layouts/body/single/body-single";

export const DatosPersonales = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <BodySingle title={"checkout"}>
      <Box>
        <Stepper sx={{ width: "100%" }} activeStep={step}>
          <Step>
            <StepLabel>Datos pesonales</StepLabel>
          </Step>
          <Step>
            <StepLabel>Dirección de entrega</StepLabel>
          </Step>
          <Step>
            <StepLabel>Datos del pago</StepLabel>
          </Step>
        </Stepper>
        {step === 0 && <p>Datos personales</p>}
        {step === 1 && <p>Dirección de entrega</p>}
        {step === 2 && <p>Datos del pago</p>}
      </Box>

      <Stack direction="row" mt={2}>
        {step !== 0 && <Button>Anterior</Button>}
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={() => setStep(1)}>
          {step === 2 ? "Finalizar" : "Siguiente"}
        </Button>
      </Stack>
    </BodySingle>
  );
};
