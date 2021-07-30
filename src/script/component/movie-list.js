/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import $ from 'jquery';
import './movie-item.js';

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.classList.add('col', 'my-2');
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `
                    <div class="alert alert-warning alert-dismissible fade show mx-auto" role="alert">
                        <p class ="f-3">${message}</p>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
    $(() => {
      window.setTimeout(() => {
        $('.alert')
          .fadeTo(500, 0)
          .slideUp(500, function () {
            $(this).remove();
          });
      }, 10000);
    });
  }
}
customElements.define('movie-list', MovieList);
