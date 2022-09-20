import { Button, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

type detalleComicProps = {
  title: string;
  price: number;
  oldPrice: number;
  stock: number;
};

export const CardDetalle: FC<detalleComicProps> = ({
  title,
  price,
  oldPrice,
  stock,
}) => {
  return (
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body1" component="div">
        Antes ${oldPrice}
      </Typography>
      <Typography variant="subtitle1" component="div">
        ${price}
      </Typography>
      {stock ? (
        <Link href="/checkout">
          <Button size="small">Comprar</Button>
        </Link>
      ) : (
        <Button size="small" disabled>
          Comprar
        </Button>
      )}
    </CardContent>
  );
};
