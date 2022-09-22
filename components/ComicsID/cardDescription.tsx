import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  CardContent,
  Typography,
} from "@mui/material";
import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type comicIDProps = {
  id: number,
  description: string;
  characters: string[] | string;
  available: number;
};

export const CardDescription: FC<comicIDProps> = ({
  description,
  characters,
  available,
  id
}) => {
  return (
    <>
    <div >
      <Accordion key={id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Descripción</Typography>
        </AccordionSummary>
        <AccordionDetails key={id} sx={{ backgroundColor: "whitesmoke" }}>
          {description ? (
            <Typography>{description}</Typography>
          ) : (
            <Typography>Sin descripcion disponible</Typography>
          )}
        </AccordionDetails>
      </Accordion>
      {available ? (
        <Accordion key={id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Personajes</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "whitesmoke" }}>
            <Typography>{characters}</Typography>
          </AccordionDetails>
        </Accordion>
      ) : null}
      </div>
    </>
  );
};
