import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=4c509d71d2cd389ce61594abcd554090&language=ko-KR/movie_id=${id}`
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
