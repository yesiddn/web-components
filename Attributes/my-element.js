const template = document.createElement('div');
template.innerHTML = `
  <style>
    .text {
      color: blue;
    }
    p {
      color: black;
    }
  </style>
  <p class="text">Hello world 2!</p>
  <p>Texto de ejemplo para la clase.</p>
`;

class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // recibir el contenido del elemento por medio de atributos
    this.title = this.getAttribute('title');
    this.paragraph = this.getAttribute('paragraph');
    this.img = this.getAttribute('img');
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = /* html */ `
      <section>
        <h2>${this.title}</h2>
        <div>
          <p>${this.paragraph}</p>
          <img src=${this.img} alt="${this.title}">
        </div>
      </section>
      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    return `
      <style>
        h2 {
          color: green;
        }
      </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myElement);
