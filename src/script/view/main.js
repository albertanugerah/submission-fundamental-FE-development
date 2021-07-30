/* eslint-disable import/extensions */
import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');

  const renderResult = (results) => {
    movieListElement.movies = results;
  };
  function showMovieDetail(movie) {
    const { Poster, Title, Year, Director, Actors, Writer, Plot } = movie;
    return `
    <div class="container-fluid">
          <div class="row">
           <div class="col-md-3">
             <img src="${Poster}" class="img-fluid">              
           </div>
           <div class="col-md">
             <ul class="list-group">
               <li class="list-group-item"><h4>${Title} (${Year})</h4></li>
               <li class="list-group-item"><strong>Director : </strong> ${Director}</li>
               <li class="list-group-item"><strong>Actors : </strong>${Actors}</li>
               <li class="list-group-item"><strong>Writer : </strong> ${Writer}</li>
               <li class="list-group-item"><strong>Plot : </strong><br> ${Plot}</li>
             </ul>
           </div>
         </div>
       </div>`;
  }

  const fallbackResult = (err) => {
    movieListElement.renderError(err.message);
  };

  function updateUIDetail(movie) {
    const movieDetail = showMovieDetail(movie);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
  }

  const onButtonSearchClicked = () => {
    DataSource.SearchMovies(searchElement.value).then(renderResult).catch(fallbackResult);
  };
  const onButtonDetailClicked = async (element) => {
    if (element.target.classList.contains('modal-detail-button')) {
      const { imdbid } = element.target.dataset;
      const movieDetail = await DataSource.getMovieDetail(imdbid);
      updateUIDetail(movieDetail);
    }
  };

  searchElement.clickEvent = onButtonSearchClicked;
  document.addEventListener('click', onButtonDetailClicked);
};
export default main;
