// ciclo de vida de un componente personalizado: https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_custom_elements#usando_callbacks_de_ciclo_de_vida

class MyCustomElement extends HTMLElement {
  constructor() {
    super();

    console.log('Hello from constructor! -> Memory');
  }

  connectedCallback() {
    console.log('Hello from DOM!');
  }

  disconnectedCallback() {
    // nos servirá para deslindar de eventos a nuestros e hijos conectados a este componente, dentro de esa función podremos retirarlos para liberar espacio en memoria.
    console.log('Goodbye from DOM!');
  }
}

customElements.define('my-custom-element', MyCustomElement);

document.querySelector('my-custom-element').remove();