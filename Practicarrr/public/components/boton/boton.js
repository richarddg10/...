class Boton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles.css">
                <section>
                </section>
            `;
        }
    }
}
customElements.define('app-container', Boton);
export default Boton;
