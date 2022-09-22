import { FC } from "react";
import Card from "@mui/material/Card";
import { CardContent, CardMedia, Stack, Typography } from "@mui/material";

type propsCharacter = {
  title: string;
  image: string;
  id: number;
  description: string;
};
export const CardCharacter: FC<propsCharacter> = ({
  title,
  image,
  description,
  id,
}) => {
  return (
    <Card sx={{ maxWidth: 380, textAlign:'center'}}>
      <Stack spacing={2} alignItems="center">
        <CardMedia
          component="img"
          sx={{ width: 210, objectFit: "contain" }}
          height="200"
          image={image}
          alt={title}
        />
      </Stack>
      <CardContent>
        <Typography variant="subtitle1" color="text.primary">
          {title}
        </Typography>
        <Typography variant="subtitle2" color="text.primary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
