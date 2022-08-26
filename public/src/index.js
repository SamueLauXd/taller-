import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-profile name="Apple Latinoamerica"  
        post="./assets/publicacion.png"
        perfil="./assets/perfil.png"
        comentador="selfmadesamuel" 
        comentario="Helmocho" 
        likes="30" 
        vistas="56" 
        dias="Hace 20 minutos"></my-profile>
        <br>
        <my-profile name="Apple Latinoamerica"  
        post="./assets/publicacion.png"
        perfil="./assets/perfil.png"
        comentador="selfmadesamuel" 
        comentario="Helmocho" 
        likes="30" 
        vistas="56" 
        dias="Hace 20 minutos"></my-profile>
        `
    }
}

customElements.define("app-container",AppContainer);