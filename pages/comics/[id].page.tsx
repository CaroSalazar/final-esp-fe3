import { Comic } from "dh-marvel/features/card.type";
import { NextPage } from "next";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { CardDescription } from "dh-marvel/components/comicsID/cardDescription";
import { CardDetalle } from "dh-marvel/components/comicsID/cardDetalle";
import { CardImage } from "dh-marvel/components/comicsID/cardImage";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { useEffect } from "react";
import Link from "next/link";

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query;
  const res = await fetch(`http:localhost:3000/api/comics/${id}`);
  const data = await res.json();

  return { props: { data: data } };
}

interface comicIDProps {
  data: Comic;
}

const ComicId: NextPage<comicIDProps> = ({ data }) => {
  return (
    <>
      <Box>
        <BodySingle title={data.comic.title}>
         <Stack spacing={2} alignItems="center">
          <Grid sx={{ display: "flex", flexDirection: "row"}}>
            <Grid>
              <CardImage
                title={data.comic.title}
                image={
                  data.comic.thumbnail.path +
                  "." +
                  data.comic.thumbnail.extension
                }
              />
            </Grid>
            <Grid>
              <CardDetalle
                title={data.comic.title}
                price={data.comic.price}
                oldPrice={data.comic.oldPrice}
                stock={data.comic.stock}
              />
            </Grid>
          </Grid>
          </Stack>
          <Box>
          <Grid>
            <CardDescription
              description={data.comic.description}
              available={data.comic.characters.available}
              characters={
                data.comic.characters.available
                  ? data.comic.characters.items.map((item: any) => {
                      return (
                        <Link href={"/personajes"}>
                          <ul>
                            <li>{item.name}</li>
                          </ul>
                        </Link>
                      );
                    })
                  : null
              }
            />
          </Grid>
          </Box>
         
        </BodySingle>
      </Box>
    </>
  );
};

export default ComicId;
