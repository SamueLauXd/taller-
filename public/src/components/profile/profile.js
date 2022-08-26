class MyProfile extends HTMLElement {
    //Metodo para declarar que atributos/parametros
    //vamos a utilizar en nuestra clase
    static get observedAttributes() {
      return ['name', 'perfil', 'post', 'likes', 'vistas', 'dias', 'comentador', 'comentario',];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    //Se ejecuta cuando la clase está
    //montado en nuestra pagina/html
    connectedCallback() {
      this.render();
    }
  
    //Metodo que se encarga de ejecutarse
    //si algun valor cambia
    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="/src/components/profile/style.css"
            <section>
              <div class="general">
                <img class="perfil"src="${this.perfil}"></img>
                <h1 class="nameuser">${this.name}</h1>
                <h1 class="comentuser"><b>${this.comentador}</b> ${this.comentario}</h1>
                <image class="points"src="./assets/points.png"></image>
                <image image class="publicacion"src="${this.post}"></image>
                <image class="corazon"src="./assets/Heart.png"></image>
                <image class="compartir"src="./assets/Share.png"></image>
                <image class="comentar"src="./assets/comentario.png"></image>
                <image class="guardar"src="./assets/Save.png"></image>
                <image class="contenido"src="./assets/contenido.jpg"></image>
                <h1 class="info">${this.likes} likes | ${this.vistas} vistas</h1>
                <h1 class="day">${this.dias}</h1>
              </div>
            </section>
          `;
    }
  }
  
  customElements.define('my-profile', MyProfile);
  export default MyProfile;