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
    
    this.p = document.createElement('p');
  } // primer cicle de vida del component -> poner variables y propiedades en memoria

  connectedCallback() {
    this.p.textContent = '¡Hola mundo!';
    this.appendChild(this.p); // esta es una forma de añadir un elemento al DOM pero es muy manual
    this.appendChild(template); 
  } // segundo cicle de vida del component -> todo el contenido de nuestra clase como component ya es un nodo del DOM
}

customElements.define('my-element', myElement); // para darle un nombre al custom element y la clase que lo define -> https://developer.mozilla.org/en-US/docs/Web/API/Web_components#html_templates
