import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";

export const checkoutPost = async (data: CheckoutInput | any) => {
  await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 405) {
        console.log("Error de servidor. Intente nuevamente");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (data.error) {
        switch (data.error) {
          case "INCORRECT_ADDRESS":
            console.log("Dirección de entrega incorrecta");
            break;
          case "CARD_WITHOUT_FUNDS":
            console.log("Tarjeta sin fondos disponibles");
            break;
          case "CARD_WITHOUT_AUTHORIZATION":
            console.log(
              "Tarjeta sin autorización. Comuníquese con su banco e intente nuevamente."
            );
            break;
          case "ERROR_CARD_DATA_INCORRECT":
            console.log("Datos de tarjeta incorrecta");
            break;
          default:
            console.log("Datos de tarjeta incorrecta");
            break;
        }
      } else {
        console.log("confirmado");
      }
    });
};
