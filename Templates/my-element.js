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
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>Hello world!</h2>
        <div>
          <p>Texto de ejemplo para el componente.</p>
        </div>
      </section>
      ${this.getStyles()}
    `;

    return template; // forma mas elegante de crear nuestro template
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
    this.appendChild(this.getTemplate().content.cloneNode(true)); // con el true clonamos todo el contenido del template no solo el primer nodo
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myElement);
