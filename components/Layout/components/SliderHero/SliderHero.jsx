import React from "react";


export default function SliderHero() {

  
  return (

    <div className="d-lg-flex position-relative">
      <div className="container d-lg-flex align-items-lg-center content-space-t-3 content-space-lg-0 min-vh-lg-100">

        <div className="w-100">
          <div className="row">
            <div className="col-lg-5">
              <div className="mb-5">
                <h1 className="display-4 mb-3">
                  Realize suas obras com a Ducol 

                  <span className="text-primary text-highlight-warning">
                    <span className="js-typedjs"
                          dataHTypedOptions='{
                            "strings": ["startup.", "future.", "success."],
                            "typeSpeed": 90,
                            "loop": true,
                            "backSpeed": 30,
                            "backDelay": 2500
                          }'></span>
                  </span>
                </h1>
                
                <p className="lead">Ducol Engenharia Ltda, empresa maranhense com profissionais dedicados e comprometidos com a solução de problemas nos diversos ramos de engenharia, construção e prestação de
serviços.</p>
              </div>

              <div className="d-grid d-sm-flex gap-3">
                <a className="btn btn-primary btn-transition px-6" href="./page-login-simple.html">Solicitar orçamento</a>
                <a className="btn btn-link" href="#">Conheça a Ducol <i className="bi-chevron-right small ms-1"></i></a>
              </div>
            </div>

          </div>

        </div>



        <div className="col-lg-7 col-xl-6 d-none d-lg-block position-absolute top-0 end-0 pe-0" style={{minWidth: 6.75 + 'rem'}}> 
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1137.5 979.2">
            <path fill="#F9FBFF" d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
              c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"/>
            <defs>
              <path id="mainHeroSVG1" d="M1137.5,0H450.4l-278,279.7C22.4,430.6,24.3,675,176.8,823.5l0,0C316.9,960,537.7,968.7,688.2,843.6l449.3-373.4V0z"/>
            </defs>
            <clipPath id="mainHeroSVG2">
              <use xlinkHref="#mainHeroSVG1"/>
            </clipPath>
            <g transform="matrix(1 0 0 1 0 0)" clipPath="url(#mainHeroSVG2)">
              <image width={750} height={750} xlinkHref="./assets/img/750x750/ducol-home-hero.jpeg" transform="matrix(1.4462 0 0 1.4448 52.8755 0)"></image>
            </g>
          </svg>
        </div>

      </div>
    </div>

  );
}