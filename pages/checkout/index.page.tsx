import { Box, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import StepperForm from "dh-marvel/components/formCheckout/StepperForm";
import CardDatosComic from "dh-marvel/components/formCheckout/CardDatosComic";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { NextPage } from "next";

const Check: NextPage = () => {
  let title = localStorage.getItem("title");
  let price = localStorage.getItem("price");
  let path = localStorage.getItem("pathImage");
  let extension = localStorage.getItem("extensionImage");
  let image = path + "." + extension;

  return (
    <BodySingle title={`Checkout: ${title}`}>
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" spacing={8}>
          <StepperForm />

          <CardDatosComic
            title={String(title)}
            image={String(image)}
            price={Number(price)}
          />
        </Stack>
      </Box>
    </BodySingle>
  );
};
export default Check;
