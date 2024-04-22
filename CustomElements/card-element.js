const template = document.createElement('div');
template.classList.add('card');
template.innerHTML = `
  <h2 class="title">New Card</h3>
  <p class="description">This is an example of a card description. Made as a practice for Platzi's Web components course.</p>
  <small class="author">Made by @nazarenoalt and edited by @yesiddn</small>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&display=swap');
    * {
      font-family: 'Open Sans', Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
    }
    .card {
      width: 200px;
      margin: 20px;
      padding: 20px;
      border: 1px solid rgba(181, 232, 184, 0.3);
      border-radius: 8px;
      box-shadow: 5px 5px 10px rgba(181, 232, 184, 0.3);
    }
    .title {
      margin: 10px 0;
    }
    .description {
      margin-bottom: 10px;
      color: rgb(134, 134, 134);
    }
  </style>
`;

class cardElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.appendChild(template);
  }
}

customElements.define('card-element', cardElement);
