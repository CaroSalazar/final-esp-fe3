import { NextApiRequest, NextApiResponse } from "next";
import { getCharacter} from "dh-marvel/services/marvel/marvel.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {id} = req.query;
  if (req.method === "GET") {
    const character = await getCharacter(Number(id));
    res.status(200).json({ character: character });
  }
 }
