import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import React, { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "./InputText";
import { DatosPagoForm, ValidationSchemaData } from "./DatosPago.types";
import StepperNavigation from "./StepperNavigation";

export type DatosPagoProps = {
  activeStep: number;
  handleNext: () => void;
};

const DatosPago: FC<DatosPagoProps> = ({ activeStep, handleNext }) => {
  const methods = useForm<DatosPagoForm>({
    resolver: yupResolver(ValidationSchemaData),
    defaultValues: {
      nameOnCard: "Test",
      number: "42424242 4242 4242",
      expDate: "test@user.com",
      cvc: "gregg",
    },
  });

  const { watch, setFocus, handleSubmit } = methods;
  const nameOnCard = watch("nameOnCard");
  const number = watch("number");
  const expDate = watch("expDate");
  const cvc = watch("cvc");

  const onSubmit = (data: DatosPagoForm) => {
    console.log(data);
    handleNext();
  };
  useEffect(() => {
    setFocus("nameOnCard");
  }, []);
  return (
    <Stack>
      <form>
        <FormProvider {...methods}>
          <InputText label="Nombre Tarjeta" name="nameOnCard" />
          <InputText label="Numero de Tarjeta" name="number" />
          <InputText label="exp MM/YY" name="expDate" />
          <InputText label="CVV" name="cvc" />

          <div>
            nameOnCard: {nameOnCard}
            number: {number}
            expDate: {expDate}
            cvc: {cvc}
          </div>
        </FormProvider>
      </form>

      <StepperNavigation
        activeStep={activeStep}
        onPrevClick={() => console.log("do nothing")}
        onNextClick={handleSubmit(onSubmit)}
      />
    </Stack>
  );
};

export default DatosPago;
