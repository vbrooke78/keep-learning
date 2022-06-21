import movies from './utils/movies.json';

export const MovieList = () => {
  return (
    <>
      <h1>Movie List Filter</h1>
      <div className="searchBar">
        <label htmlFor="search">Search: </label>
        <input
          name="search"
          className="searchInput"
          placeholder="search by Title, Director, Genre or cast member "
        />
      </div>
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
          {movies.map((movie) => {
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
