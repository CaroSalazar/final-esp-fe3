import { Accordion, AccordionDetails, AccordionSummary, Button, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type detalleComicProps = {
  description: string;
  characters: string[];
};

export const CardDetalle: FC<detalleComicProps> = ({ description, characters }) => {
  return(
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Descripción</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ backgroundColor: "whitesmoke" }}>
      <Typography>{description}</Typography>
    </AccordionDetails>
  </Accordion>
  
  )
};
