import {Box, Step, StepLabel, Stepper} from "@mui/material";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { checkoutPost } from "dh-marvel/services/checkout/checkout.service";
import router from "next/router";
import {FC, useState} from "react";
import DatosPago from "./DatosPago";
import DatosPersonales from "./DatosPersonales";
import DireccionEntrega from "./DireccionEntrega";


const StepperForm: FC = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

    const handleClickBack = () =>{
        setActiveStep(activeStep-1);
    }
    const handleSubmitDatosPersonales = () => {
        setActiveStep(1);
    }

    const handleSubmitDireccionEntrega = () => {
        setActiveStep(2);
    }

    const handleSubmit = () => {
        router.push({
            pathname:'/confirmacion-compra'
        })
    }

    return <>
        <Box sx={{width: '60%'}}>
            <Stepper
                sx={{width: '100%', marginBottom: 2}}
                activeStep={activeStep}>
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

            {activeStep === 0 && 
                <DatosPersonales activeStep={activeStep} handleNext={handleSubmitDatosPersonales}/>
            }
            {activeStep === 1 &&
                <DireccionEntrega activeStep={activeStep} handleNext={handleSubmitDireccionEntrega} handleBack={handleClickBack}/>
            }
              {activeStep === 2 &&
               <DatosPago activeStep={activeStep} handleNext={handleSubmit} handleBack={handleClickBack}/>
             }
        </Box>
    </>
}

export default StepperForm;