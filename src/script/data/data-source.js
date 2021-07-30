/* eslint-disable import/extensions */

class DataSource {
  static SearchMovies(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=148161bb&s=${keyword}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.Response === 'False') {
          throw new Error(responseJson.Error);
        }
        return responseJson.Search;
      });
  }

  static getMovieDetail(imdbid) {
    return fetch(`http://www.omdbapi.com/?apikey=148161bb&i=${imdbid}`)
      .then((response) => response.json())
      .then((movie) => movie);
  }
}
export default DataSource;
