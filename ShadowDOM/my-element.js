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
    this.attachShadow({ mode: 'open' }); // creamos un shadowDOM con el modo open para que podamos acceder a el desde fuera y lo podamos ver -> por buenas practicas se recomienda usar el modo open de lo contrario se llamaria un "componente inutil"
    // nuestro elemento aparecera como un #shadow-root en el inspector de elementos y existen varios tipos de DOM's: lightDOM, shadowDOM, el shadowRoot hace parte del shadowDOM
    // con el shadowDOM se puede encapsular el CSS y JS de un componente, evitando que se mezcle con el CSS y JS de la pagina principal
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
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); // esto ya no funciona porque hay que decirle al componente que renderice lo que hay dentro del shadowDOM
    // ahora para poder acceder a un elemento del shadowDOM desde fuera del componente se debe hacer de la siguiente manera:
    // this.shadowRoot.querySelector('p').style.color = 'red';
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myElement);
