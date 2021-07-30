class NavbarApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav class="navbar navbar-dark bg-dark">
                <span class="navbar-brand mx-auto h1">Movie Database</span>
            </nav>`;
  }
}
customElements.define('navbar-app', NavbarApp);
