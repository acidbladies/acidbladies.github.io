/*Etiqueta*/
class PieDePagina extends HTMLElement{
    constructor() {
        super();
        /*Atributos*/
        const identificador = this.getAttribute("identificador");
        /*---------*/
        const elementoHtml = document.createElement(identificador);
        elementoHtml.innerHTML = `

        <div class="container-fluid">

          <div class="container-fluid">
            <div class="row pt-1 ">
              <div class="col text-center redondeo_borde  py-1" style="background-color: #953086;">

                <div class="row align-items-center ">

                  <div class="col-md-3">

                    <img src="./Multimedia/AcidBladies.png" alt="" width="80" height="80" class="d-inline-block">

                  </div>


                  <div class="col-md-6">

                    <table class="table table-borderless letraF  justify-content-center">
                      <thead class="justify-content-center" style="background-color: #953086;">
                        <tr>
                          <th class="justify-content-center  pt-4" scope="col"
                            style="font-size: 1.5em; background-color: #953086; color: #FFFFFF; text-align: center;">Medios
                            Sociales</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="background-color: #953086;">
                            <div class="text-center">

                              <a href="https://www.instagram.com/acidbladies/"><img src="./Multimedia/Instagram.png"
                                  width="50" height="50" class="d-inline-block align-text-top" /></a>
                              <a href="https://www.facebook.com/AcidBladies/"><img src="./Multimedia/Facebook.png"
                                  width="50" height="50" class="d-inline-block align-text-top" /></a>
                              <a href="https://www.youtube.com/channel/UCwIV7t-ELzKOztctvvSf6tQ"><img
                                  src="./Multimedia/Youtube.png" width="50" height="50"
                                  class="d-inline-block align-text-top" /></a>

                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>

                  <div class="col-md-3">

                    <img src="./Multimedia/Cobweb_PP.png" alt="" width="203rem" height="62rem">

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        `;
        this.appendChild(elementoHtml);
    }
}
customElements.define('pie-de-pagina', PieDePagina);
