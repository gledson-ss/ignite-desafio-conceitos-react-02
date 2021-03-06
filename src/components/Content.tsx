import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { api } from '../services/api'
import '../styles/content.scss';
import { Header } from "./Header";

interface contentProps {
  selectedGenreId: number;
}

export function Content({ selectedGenreId }: contentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({ } as GenreResponseProps);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div className="container">
      <Header title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}