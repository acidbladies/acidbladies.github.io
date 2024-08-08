/*Etiqueta*/
class Encabezado extends HTMLElement {
  constructor() {
    super();
    /*Atributos*/
    const identificador = this.getAttribute("identificador");
    
    const elementoHtml = document.createElement(identificador);
    elementoHtml.innerHTML = `

    <div class="row sticky-top">
      <nav class="navbar navbar-dark px-2 bg-dark rounded-pill">
        <div class="container-fluid ">

          <a class="navbar-brand" href="./index.html">
            <img src="./Multimedia/Pulpo_Acid.png" alt="" width="50" height="50" class="d-inline-block align-text-top">

          </a>
          <a style="font-size: 3em; color: #ffffff;">Acid Bladies</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">

              <a class="navbar-brand" href="./index.html" style="font-size: 2em;">
                <img src="./Multimedia/AcidBladies.png" alt="" width="42" height="42"
                  class="d-inline-block align-text-top">
                Acid Bladies
              </a>

              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">

              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" style="font-size: 1.2em;"
                    href="./index.html">Inicio</a>
                </li>

              </ul>

            </div>
          </div>

        </div>
      </nav>
    </div>

    `;
    this.appendChild(elementoHtml);
  }
}
customElements.define('encabezado-de-pagina', Encabezado);
