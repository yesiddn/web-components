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
    // :host es una pseudoclase que le da estilos base al componente
    return `
      <style>
        :host {
          display: inline-block;
          width: 100%;
          min-width: 300px;
          max-width: 450px;
          font-size: 20px;
          background: #f9f9f9;
        }

        :host([dark]) {
          background: #222;
          color: #f9f9f9;
        }

        :host(.highlight) {
          color: #9b59b6;
        }

        :host-context(article.card) {
          display: block;
          max-width: 100%;
        }

        :host-context(article.card) h2 {
          color: #3498db;
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
