class ModalDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div
      class="modal fade"
      id="movieDetailModal"
      tabindex="-1"
      aria-labelledby="movieDetailModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;
  }
}
customElements.define('modal-detail', ModalDetail);
