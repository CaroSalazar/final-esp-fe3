import { Button, CardContent, Typography } from "@mui/material";
import { FC } from "react";

type detalleComicProps = {
  title: string;
  prices: number,
};

export const CardDetalle: FC<detalleComicProps> = ({ title, prices }) => {
  return(
    <CardContent>
    <Typography variant="h5" component="div">
    {title}
    </Typography>
    <Typography variant="body1" component="div">
    {prices}
    </Typography>
    <Typography variant="subtitle1" component="div">
    {prices}
    </Typography>
    <Button size="small">Comprar</Button>
  </CardContent>
  )
};
