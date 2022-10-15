import { llamarApi } from './services/dataFetch.js';

import { variables } from './components/peliculas/peliculas.js';

class AppContainer extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        const infoApi = await llamarApi();
        this.render(infoApi);

        const btn = this.shadowRoot?.querySelector('button');
        btn?.addEventListener('click', () => {
            const event: CustomEvent<{title: string}> = new CustomEvent('guardar-fav', {
                detail: {title: this.title},
                composed: true
            });
           this.dispatchEvent(event);

           localStorage.setItem('currentPelicula', ...);        
        });
    }

    render(infoApi: Array<variables>) {
        if (this.shadowRoot) {

            const peliculas = infoApi.map(({title, release_date, image}) => `
            <section>
                <h1 id="title">${title}</h1>
                <h4 id="release_date">${release_date}</h4>
                <image id="image" src="${image}"/>
                <button>Click</button>
            </section>
            `);

            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles.css">
            <section>
                ${peliculas.join('')}
            </section>

            `;
        }
    }
}

customElements.define ('app-container', AppContainer);