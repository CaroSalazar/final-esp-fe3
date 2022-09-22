import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "./InputText";
import {
  DireccionEntregaForm,
  ValidationSchemaAdressDirection,
} from "./DireccionEntrega.types";
import StepperNavigation from "./StepperNavigation";

export type DireccionEntregaProps = {
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
};

const DireccionEntrega: FC<DireccionEntregaProps> = ({
  activeStep,
  handleNext,
  handleBack

}) => {
  const methods = useForm<DireccionEntregaForm>({
    resolver: yupResolver(ValidationSchemaAdressDirection),
    defaultValues: {
      address1: "Test",
      address2: "User",
      city: "test@user.com",
      state: "gregg",
      zipCode: "989",
    },
  });

  const { watch, setFocus, handleSubmit } = methods;
  const address1 = watch("address1");
  const address2 = watch("address2");
  const state = watch("state");
  const zipCode = watch("zipCode");

  
  const onSubmit = (data: DireccionEntregaForm) => {
    console.log(data);
    handleNext();
  };

  const submitBack = () =>{
    handleBack();
  }


  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <InputText label="Direccion" name="address1" />
          <InputText label="Departamento, piso, etc." name="address2" />
          <InputText label="Ciudad" name="city" />
          <InputText label="Provincia" name="state" />
          <InputText label="Cod Postal" name="zipCode" />
        </FormProvider>
      </form>

      <StepperNavigation
        activeStep={activeStep}
        onNextClick={handleSubmit(onSubmit)}
        handleBack={handleSubmit(submitBack)}
      />
    </Stack>
  );
};

export default DireccionEntrega;
