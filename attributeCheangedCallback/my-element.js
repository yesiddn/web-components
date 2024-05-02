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

  // para generar el ciclo de vida hay que escribir los metodos tal cual y asi el componente puede encontrar estos metodos
  static get observedAttributes() {
    return ['title', 'paragraph', 'img'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    // de esta forma esta validando la existencia de un atributo, esto genera un loop y en la consola se registra un error
    // if (attr === 'title') {
    //   this.title = newVal;
    // }

    // if (attr === 'paragraph') {
    //   this.paragraph = newVal;
    // }

    // if (attr === 'img') {
    //   this.img = newVal;
    // }

    // valida si el atributo realmente cambio y entonces agregarle el nuevo valor para no tener un loop.
    if (oldVal !== newVal) {
      this[attr] = newVal;
    }
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
