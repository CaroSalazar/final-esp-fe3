import { FC } from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { toNamespacedPath } from "node:path/win32";

type propsCharacter = {
  name: string;
  image: string;
  id: number;
  description: string;
};
export const CardCharacter: FC<propsCharacter> = ({ name, image, description, id }) => {
  return (
    <Card sx={{ maxWidth: 380 }} key={id}>
      <Stack spacing={2} alignItems="center">
        <CardMedia
          component="img"
          sx={{ width: 210, objectFit: "contain" }}
          height="200"
          image={image}
          alt={name}
        />
      </Stack>
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
