import { useParams } from 'react-router-dom';

export const GamePage = () => {
  const { id } = useParams();

  return <div>GAME: {id}</div>;
};
