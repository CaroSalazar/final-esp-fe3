import InputText from "dh-marvel/components/formsCheckout/InputText";
import React, { FC, useContext, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export type PersonalFormData = {
  email: string;
  name: string;
  lastname: string;
};

const PersonalDataForm: FC = () => {
  const personalFormSchema = yup
    .object({
      name: yup.string().required("Nombre requerido"),
      lastname: yup.string().required("Apellido requerido"),
      email: yup
        .string()
        .email("Email no valido")
        .required("Email requerido"),
        
    })
    .required();

  const methods = useForm<PersonalFormData>({
    resolver: yupResolver(personalFormSchema),
    defaultValues: {
      name: "Test",
      lastname: "User",
      email: "test@user.com",
    },
  });

  const { setFocus, handleSubmit } = methods;

  useEffect(() => {
    setFocus("name");
  }, []);

  return (
    <section>
      <h2>Datos Personales</h2>

      <form>
        <FormProvider {...methods}>
          <InputText label="Nombre" name="name" />
          <InputText label="Apellido" name="lastname" />
          <InputText label="Email" name="email" />
        </FormProvider>
      </form>
    </section>
  );
};

export default PersonalDataForm;
