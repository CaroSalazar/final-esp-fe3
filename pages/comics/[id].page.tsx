import { Box} from "@mui/material";
import { CardImage } from "dh-marvel/components/ComicsID/cardImage";
import { Comic } from "dh-marvel/features/card.type";
import { NextPage } from "next";

interface props {
  comic: Comic[];
};

export const ComicId: NextPage<props> = ({ comic }) => {
  return (
    <Box sx={{ width: "100%" }}>
  
      <p>hola</p>
    </Box>
  );
};
