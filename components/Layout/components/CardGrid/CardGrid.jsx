import React from "react";

export default function FooterCopyright() {
  return (

    <div className="container content-space-2 content-space-t-xl-3 content-space-b-lg-3">

      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
        <h2>Construimos e administramos suas obras civis</h2>
      </div>


      <div className="text-center mb-10">

        <ul className="list-inline list-checked list-checked-primary">
          <li className="list-inline-item list-checked-item">Edificações</li>
          <li className="list-inline-item list-checked-item">Pavimentação</li>
          <li className="list-inline-item list-checked-item">Obras Civis</li>
        </ul>

      </div>

      <div className="row mb-5 mb-md-0">
        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">

          <div className="card card-sm h-100">
            <div className="p-2">
              <img className="card-img" src="./assets/img/others/banner-ducol-um.WEBP" alt="Image Description" />
            </div>

            <div className="card-body">
              <h4 className="card-title">Edificações</h4>
              <p className="card-text">Ducol Engenharia is an easier way to search on Android.</p>


              <ul className="list-pointer mb-0">
                <li className="list-pointer-item">Advanced Analytics</li>
                <li className="list-pointer-item">Digital Marketing</li>
                <li className="list-pointer-item">Organization</li>
              </ul>

            </div>
            
            <a className="card-footer card-link border-top" href="#">Solicite orçamento <i className="bi-chevron-right small ms-1"></i></a>
          </div>

        </div>


        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">

          <div className="card card-sm h-100">
            <div className="p-2">
              <img className="card-img" src="./assets/img/others/banner-ducol-dois.JPG" alt="Image Description" />
            </div>

            <div className="card-body">
              <h4 className="card-title">Pavimentação</h4>
              <p className="card-text">Ducol Engenharia is a new way to communicate with your team.</p>


              <ul className="list-pointer mb-0">
                <li className="list-pointer-item">Cost Transformation</li>
                <li className="list-pointer-item">Customer Experience</li>
                <li className="list-pointer-item">Mergers and Acquisitions</li>
              </ul>

            </div>
            
            <a className="card-footer card-link border-top" href="#">Solicite orçamento <i className="bi-chevron-right small ms-1"></i></a>
          </div>

        </div>


        <div className="col-sm-6 col-lg-4">

          <div className="card card-sm h-100">
            <div className="p-2">
              <img className="card-img" src="./assets/img/480x220/img3.jpg" alt="Image Description" />
            </div>

            <div className="card-body">
              <h4 className="card-title">Obras Civis</h4>
              <p className="card-text">Ducol Engenharia an easier way to manage contacts, sales and grow lasting relationships.</p>


              <ul className="list-pointer mb-0">
                <li className="list-pointer-item">Enterprise Technology</li>
                <li className="list-pointer-item">Private Equity</li>
                <li className="list-pointer-item">Sustainability</li>
              </ul>

            </div>
            
            <a className="card-footer card-link border-top" href="#">Solicite orçamento <i className="bi-chevron-right small ms-1"></i></a>
          </div>

        </div>

      </div>

    </div>

  );
}