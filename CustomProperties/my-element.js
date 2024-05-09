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
          --primary-color: tomato;
          --secondary-color: salmon;
          --heading-primary: 32px;
          --heading-secondary: 24px;
          display: inline-block;
          width: 100%;
          min-width: 300px;
          max-width: 450px;
          font-size: 20px;
          background: #f9f9f9;
        }

        section {
          background: var(--primary-color);
          color: white;
          padding: 20px;
          border-radius: 5px;
        }

        section div {
          background: var(--secondary-color);
          padding: 10px;
          border-radius: 5px;
        }

        h2 {
          font-size: var(--heading-primary);
        }

        p {
          font-size: var(--heading-secondary);
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
