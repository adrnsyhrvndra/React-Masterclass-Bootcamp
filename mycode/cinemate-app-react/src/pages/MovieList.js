import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';
import { useEffect } from 'react';

export const MovieList = ({apiPath,title}) => {

  // const [movies, setMovies] = useState([]);

  const {data:movies} = useFetch(apiPath);

  useEffect(() => {
    
    document.title= `${title} | Sarjana Brewok`;

  });

  return (

    <main>

      <section className="max-w-7xl mx-auto py-7">

        <div className="flex justify-start flex-wrap other:justify-evenly">

          { movies.map((movie) => (

            <Card
              key={movie.id}
              movie={movie}
            />

          ))}


        </div>

      </section>

    </main>

  )

}
