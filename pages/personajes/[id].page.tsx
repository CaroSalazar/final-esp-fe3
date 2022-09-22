import { NextPage } from "next";
import { Character } from "dh-marvel/features/characters.type";
import { CardCharacter } from "dh-marvel/components/characterCard/Card";

export async function getServerSideProps(context: { query: { id: number } }) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/personajes/${id}`);
  const data = await res.json();
  return { props: { data: data } };
}

interface Props {
  data: Character;
}

const Characters: NextPage<Props> = ({ data }) => {
  return (
    <CardCharacter
      id={data.id}
      name={data.name}
      image={data.thumbnail.path + "." + data.thumbnail.extension}
      description={data.description}
    />
  );
};
export default Characters;
