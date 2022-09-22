import { NextPage } from "next";
import { Character } from "dh-marvel/features/characters.type";
import { CardCharacter } from "dh-marvel/components/characterCard/Card";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";

export async function getServerSideProps(context: { query: { id: any } }) {
    const { id } = context.query;
    const res = await fetch(`http:localhost:3000/api/characters/${id}`);
    const data = await res.json();
  console.log(data);
  
    return { props: { data: data } };
  }
interface Props {
  data: Character;
}

const Characters: NextPage<Props> = ({ data }) => {
  return (
    <>
      <BodySingle title={data.character.title}>
        <CardCharacter
          id={data.character.id}
          title={data.character.title}
          image={data.character.thumbnail.path + "." + data.character.thumbnail.extension}
          description={data.character.description}
        />
      </BodySingle>
    </>
  );
};
export default Characters;
