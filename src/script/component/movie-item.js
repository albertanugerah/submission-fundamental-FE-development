class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="card" >
              <img src="${this._movie.Poster}" class="card-img-top" alt="">
                <div class="card-body">
                  <h6 class="card-title fs-5">${this._movie.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${this._movie.Year}</h6>
                  <a href="#" class="btn btn-primary btn-sm modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${this._movie.imdbID}">Show Details</a>
                </div>
              </div>
              `;
  }
}
customElements.define('movie-item', MovieItem);
