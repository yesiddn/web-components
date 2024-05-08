class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  getTemplate() {
    const template = document.createElement('template');
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
        /* solo afecta a los elementos que estén dentro del shadow DOM */
        
        ::slotted(*) {} /* Selecciona todos los elementos slotted */

        ::slotted(span) {
          font-size: 2rem;
          color: #e74c3c;
        } /* Selecciona solo los elementos span slotted */
        
        ::slotted(.text) {
          font-size: 1.5rem;
          color: #3498db
        } /* Selecciona solo los elementos con la clase text */
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
