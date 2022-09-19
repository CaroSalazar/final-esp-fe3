import { NextApiRequest, NextApiResponse } from "next";
import { Comic } from "dh-marvel/features/card.type";
import { getComic} from "dh-marvel/services/marvel/marvel.service";
import comics from "dh-marvel/test/mocks/comics";

type Data = {
  comics: Comic[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === "GET") {
    const {id} = req.query;
    const comicID = await getComic(Number(id));
    res.status(200).json({ comics: comicID.data });
  }
 }
  

