import { NextApiRequest, NextApiResponse } from "next";
import { getComic} from "dh-marvel/services/marvel/marvel.service";
import { Character } from "dh-marvel/features/characters.type";

type Data = {
  character: Character[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {id} = req.query;
  if (req.method === "GET") {
    const characterID = await getComic(Number(id));
    res.status(200).json({ character: characterID });
  }
 }
  
