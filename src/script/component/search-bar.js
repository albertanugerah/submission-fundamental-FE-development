class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('.input-keyword').value;
  }

  render() {
    this.innerHTML = `
            <div class="row">
                <div class="col mx-auto my-5">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control input-keyword" id="input-keyword" placeholder="Search Movie....">
                            <div class="input-group-append">
                                <button class="btn btn-primary search-button" type="button">Search</button>
                            </div>
                    </div>
                </div>
            </div>
         `;

    this.querySelector('.search-button').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
