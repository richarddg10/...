var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { llamarApi } from './services/dataFetch.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const infoApi = yield llamarApi();
            this.render(infoApi);
            const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button');
            btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
                const event = new CustomEvent('guardar-fav', {
                    detail: { title: this.title },
                    composed: true
                });
                this.dispatchEvent(event);
                localStorage.setItem('currentPelicula', ...);
            });
        });
    }
    render(infoApi) {
        if (this.shadowRoot) {
            const peliculas = infoApi.map(({ title, release_date, image }) => `
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
customElements.define('app-container', AppContainer);
