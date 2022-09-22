import { Stack } from "@mui/material";
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import StepperNavigation from "./StepperNavigation";
import {
  DatosPersonalesForm,
  ValidationSchemaPersonaldata,
} from "./DatosPersonales.types";
import InputText from "./InputText";

export type DatosPersonalesProps = {
  activeStep: number;
  handleNext: () => void;
};

const DatosPersonales: FC<DatosPersonalesProps> = ({
  activeStep,
  handleNext,
}) => {
  const methods = useForm<DatosPersonalesForm>({
    resolver: yupResolver(ValidationSchemaPersonaldata),
    defaultValues: {
      name: "Test",
      lastname: "User",
      email: "test@user.com",
    },
  });
  const { watch, setFocus, handleSubmit } = methods;
  const email = watch("email");
  const name = watch("name");
  const lastname = watch("lastname");

  const onSubmit = (data: DatosPersonalesForm) => {
    console.log(data);
    handleNext();
  };

  useEffect(() => {
    setFocus("name");
  }, []);

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <InputText name="name" label="Name" />
          <InputText name="lastname" label="LastName" />
          <InputText name="email" label="Email" />
        </FormProvider>
      </form>
      <StepperNavigation
        activeStep={activeStep}
        handleBack={() => console.log("do nothing")}
        onNextClick={handleSubmit(onSubmit)}
      />
    </Stack>
  );
};

export default DatosPersonales;
