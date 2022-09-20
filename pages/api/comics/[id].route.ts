import { NextApiRequest, NextApiResponse } from "next";
import { Comic } from "dh-marvel/features/card.type";
import { getComic} from "dh-marvel/services/marvel/marvel.service";

type Data = {
  comic: Comic[];
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {id} = req.query;
  if (req.method === "GET") {
    const comicID = await getComic(Number(id));
    res.status(200).json({ comic: comicID });
  }
 }
  
