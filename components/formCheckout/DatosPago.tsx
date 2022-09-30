import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import React, { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "./InputText";
import { DatosPagoForm, ValidationSchemaData } from "./DatosPago.types";
import StepperNavigation from "./StepperNavigation";
import useOrder from "./contexto/useOrder";
import { checkoutPost } from "dh-marvel/services/checkout/checkout.service";
import { validCard } from "dh-marvel/pages/api/checkout.route";

export type DatosPagoProps = {
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
};

const DatosPago: FC<DatosPagoProps> = ({
  activeStep,
  handleNext,
  handleBack,
}) => {
  const { dispatch, state } = useOrder();

  const methods = useForm<DatosPagoForm>({
    resolver: yupResolver(ValidationSchemaData),
    defaultValues: {
      nameOnCard: "Visa",
      number: validCard,
      expDate: "25/07",
      cvc: "789",
    },
  });

  const { setFocus, handleSubmit } = methods;

  const submitBack = () => {
    handleBack();
  };
  const onSubmit = (data: DatosPagoForm) => {
    dispatch({
      type: "SET_CARD",
      payload: data,
    });
    checkoutPost({ ...state.order, card: data });
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
        </FormProvider>
      </form>

      <StepperNavigation
        activeStep={activeStep}
        handleBack={handleSubmit(submitBack)}
        onNextClick={handleSubmit(onSubmit)}
      />
    </Stack>
  );
};

export default DatosPago;
