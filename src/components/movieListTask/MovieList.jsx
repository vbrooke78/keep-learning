import { useState } from 'react';
import movies from './utils/movies.json';

export const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchParam] = useState(['title', 'director', 'genre', 'cast']);

  const [showInstructions, setShowInstructions] = useState(false);

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
      <button
        className="instructionsButton"
        onClick={() => setShowInstructions((bool) => !bool)}
      >
        Show/Hide Instructions
      </button>
      <br />
      <br />
      {showInstructions && (
        <section>
          <hr />
          <h3>Instructions:</h3>
          <p>
            Your task is to build a movie search bar. We have provided the data
            for you in a movies.json file.
          </p>
          <h4>You must complete the following:</h4>
          <ul>
            <li>
              A results table displaying the title, director, genre, cast and
              average rating of each movie,
            </li>
            <li>
              A search bar that will only display movies that match the current
              search,
            </li>
            <li>
              The search bar must be able to search for any movie title,
              director, genre or cast member,
            </li>
          </ul>
          <h4>Challenge:</h4>
          <p>
            Can you create a 500 millisecond delay before updating the list once
            the user has stopped typing?
          </p>
          <hr />
        </section>
      )}
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
