import { FC } from "react";
import Card from "@mui/material/Card";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

type propsComic = {
  title: string;
  image: string;
  id: number;
};
export const CardComic: FC<propsComic> = ({ title, image, id }) => {
  const handleClick = () => {
    getComicId();
  };

  const getComicId = async () => {
    const response = await fetch("/api/comics/" + id);
    const data = await response.json();
  };

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        sx={{ width: 220 }}
        height="190"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Link href={`/comics/${id}`}>
          <Button onClick={handleClick} size="small">
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
