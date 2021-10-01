import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";


export default function Footer() {
  return (

      
      <footer className="bg-light">
        <div className="container pb-1 pb-lg-7">
          <div className="row content-space-t-2">
            <div className="col-lg-3 mb-7 mb-lg-0">

              <div className="mb-5">
                <a className="navbar-brand" href="./index.html" aria-label="Space">
                  <img className="navbar-brand-logo" src="./assets/svg/logos/logo-ducol-horizontal.svg" alt="Image Description" />
                </a>
              </div>

              <ul className="list-unstyled list-py-1">
                <li><a className="link-sm link-secondary" href="#"><i className="bi-geo-alt-fill me-1"></i> Avenida Guajajaras, Nº 100 - São Cristovão CEP: 65055-285</a></li>
                <li><a className="link-sm link-secondary" href="tel:55-98-2107-3201"><i className="bi-telephone-inbound-fill me-1"></i> (098) 2107.3201 - 2107.3244</a></li>
                <li><a className="link-sm link-secondary" href="#"><i className="bi-geo-alt-fill me-1"></i> CNPJ: 05.774.310/0001-87 <br/>Insc. Estadual: 12079453-5</a></li>
              </ul>

            
            </div>


            <div className="col-sm mb-7 mb-sm-0">
              <h5 className="mb-3">Empresa</h5>


              <ul className="list-unstyled list-py-1 mb-0">
                <li><a className="link-sm link-secondary" href="#">Sobre</a></li>
                <li><a className="link-sm link-secondary" href="#">Carreira <span className="badge bg-warning text-dark rounded-pill ms-1">Empregos</span></a></li>
                <li><a className="link-sm link-secondary" href="#">Blog</a></li>
                <li><a className="link-sm link-secondary" href="#">Clientes <i className="bi-box-arrow-up-right small ms-1"></i></a></li>
                <li><a className="link-sm link-secondary" href="#">Trabalhe conosco</a></li>
              </ul>

            </div>


            <div className="col-sm mb-7 mb-sm-0">
              <h5 className="mb-3">Serviços</h5>


              <ul className="list-unstyled list-py-1 mb-0">
                <li><a className="link-sm link-secondary" href="#">Construção <i className="bi-box-arrow-up-right small ms-1"></i></a></li>
                <li><a className="link-sm link-secondary" href="#">Consultoria</a></li>
                <li><a className="link-sm link-secondary" href="#">Subestação</a></li>
                <li><a className="link-sm link-secondary" href="#">Edificações</a></li>
                <li><a className="link-sm link-secondary" href="#">Obras Civis</a></li>
              </ul>

            </div>


            <div className="col-sm">
              <h5 className="mb-3">Obras Realizadas</h5>


              <ul className="list-unstyled list-py-1 mb-0">
                <li><a className="link-sm link-secondary" href="#">Edificações</a></li>
                <li><a className="link-sm link-secondary" href="#">Pavimentação</a></li>
                <li><a className="link-sm link-secondary" href="#">Obras Civis</a></li>
                <li><a className="link-sm link-secondary" href="#">Linhas de transmissão</a></li>
                <li><a className="link-sm link-secondary" href="#">Subestação</a></li>
              </ul>

            </div>


            <div className="col-sm">
              <h5 className="mb-3">Recursos</h5>


              <ul className="list-unstyled list-py-1 mb-5">
                <li><a className="link-sm link-secondary" href="#"><i className="bi-question-circle-fill me-1"></i> Ajuda</a></li>
                <li><a className="link-sm link-secondary" href="#"><i className="bi-person-circle me-1"></i> Conta</a></li>
              </ul>

            </div>

          </div>


          <div className="border-top my-7"></div>

          <div className="row mb-7">
            <div className="col-sm mb-3 mb-sm-0">

              <ul className="list-inline list-separator mb-0">
                <li className="list-inline-item">
                  <a className="text-body" href="#">Politica de privacidade</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-body" href="#">Termos de uso</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-body" href="#">Site Map</a>
                </li>
              </ul>

            </div>

            <div className="col-sm-auto">

              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                    <i className="bi-facebook"></i>
                  </a>
                </li>
              
                <li className="list-inline-item">
                  <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                    <i className="bi-google"></i>
                  </a>
                </li>
              
                <li className="list-inline-item">
                  <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                    <i className="bi-twitter"></i>
                  </a>
                </li>
              
                <li className="list-inline-item">
                  <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                    <i className="bi-github"></i>
                  </a>
                </li>
              
                <li className="list-inline-item">

                  <div className="btn-group">
                    <button type="button" className="btn btn-soft-secondary btn-xs dropdown-toggle" id="footerSelectLanguage" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                      <span className="d-flex align-items-center">
                        <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/br.svg" alt="Image description" width="16"/>
                        <span>Portugues (BR)</span>
                      </span>
                    </button>

                    <div className="dropdown-menu" aria-labelledby="footerSelectLanguage">
                      <a className="dropdown-item d-flex align-items-center active" href="#">
                        <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Image description" width="16"/>
                        <span>English (US)</span>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Image description" width="16"/>
                        <span>Deutsch</span>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/es.svg" alt="Image description" width="16"/>
                        <span>Español</span>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Image description" width="16" />
                        <span>中文 (繁體)</span>
                      </a>
                    </div>
                  </div>

                </li>
              </ul>

            </div>
          </div>


          <div className="w-md-85 text-lg-center mx-lg-auto">
            <p className="text-muted small">&copy; Ducol Engenharia Ltda 2021. | Todos os direitos reservados</p>
            <p className="text-muted small">Quando você visita ou interage com nossos sites, serviços ou ferramentas, nós ou nossos provedores de serviço autorizados podemos usar cookies para armazenar informações para ajudar a fornecer a você uma experiência melhor, mais rápida e segura e para fins de marketing.</p>
          </div>

        </div>
      </footer>


  );
}
