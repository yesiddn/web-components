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
  }

  getTemplate() {
    const template = document.createElement('template');
    // mediante el uso del slot, el texto que existe en el ligh dom del componente se renderiza en el shadow dom como un #text que me redirige al texto que se encuentra en el light dom
    template.innerHTML = `
      <section>
        <h2>
          <slot name="title"></slot>
        </h2>
        <div>
          <p><slot name="content"></slot></p>
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
