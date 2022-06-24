import { useState } from 'react';
import movies from './utils/movies.json';

export const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchParam] = useState(['title', 'director', 'genre', 'cast']);

  const search = () => {
    return movies.filter((movie) => {
      return searchParam.some((newItem) => {
        return (
          movie[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <>
      <h1>Movie List Filter</h1>
      <form className="searchBar">
        <label htmlFor="searchList">Search: </label>
        <input
          id="searchList"
          className="searchInput"
          placeholder="search by Title, Director, Genre or cast member "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <table className="table">
        <tbody>
          <tr className="tableHeader">
            <th>Title</th>
            <th>Director</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Cast</th>
            <th>Average Rating</th>
          </tr>
          {search(movies).map((movie) => {
            return (
              <tr key={movie.title}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
                <td>{movie.cast.join(', ')}</td>
                <td>
                  {movie.ratings.rottenTomatoes.reduce((a, b) => a + b) /
                    movie.ratings.rottenTomatoes.length}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
