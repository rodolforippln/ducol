import React from "react";

export default function HeroSlider() {
  return (

    <main id="content" role="main">

      <div className="d-sm-flex">
        <div className="container d-sm-flex align-items-sm-center vh-sm-100 content-space-t-3 content-space-b-1 content-space-b-sm-3 content-space-sm-0">
          <div className="row justify-content-sm-between align-items-sm-center flex-grow-1">
            <div className="col-9 col-sm-5 mb-5 mb-sm-0">
              <img className="img-fluid" src="./assets/img/illustrations/yelling.png" alt="SVG Illustration" />
            </div>
  
            <div className="col-sm-6">

              <div className="mb-4">
                <h1>Site em Construção.</h1>
                <p className='const'>Você precisa de algum suporte? Contate-me em (098) 2107.3201 - 2107.3244 Entrarei em contato com você assim que começar oficialmente.</p>
              </div>  

            </div>

          </div>

        </div>
      </div>

    </main>

  );
}
