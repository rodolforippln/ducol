import React from "react";

export default function Header() {

  return (

    <header id="header" className="navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light navbar-show-hide" >
  
      <div className="container">
        <nav className="js-mega-menu navbar-nav-wrap">

          <a className="navbar-brand" href="./index.html" ariaLabel="Front">
            <img className="navbar-brand-logo" src="./assets/svg/logos/logo-ducol-horizontal.svg" alt="Logo"/>
          </a>

          <button className="navbar-toggler" type="button" dataBsToggle="collapse" dataBsTarget="#navbarNavDropdown" ariaControls="navbarNavDropdown" ariaExpanded="false" ariaLabel="Toggle navigation">
            <span className="navbar-toggler-default">
              <i className="bi-list"></i>
            </span>
            <span className="navbar-toggler-toggled">
              <i className="bi-x"></i>
            </span>
          </button>
        

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navbar-absolute-top-scroller">
              <ul className="navbar-nav">

                <li className="hs-has-mega-menu nav-item">
                  <a id="landingsMegaMenu" className="hs-mega-menu-invoker nav-link dropdown-toggle active" aria-current="page" href="#" role="button" dataBsToggle="dropdown" ariaExpanded="false">Serviços</a>
  

                  <div className="hs-mega-menu dropdown-menu w-100" ariaLabelledby="landingsMegaMenu" style={{minWidth : 30 + 'rem'}}>
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block">
                      

                        <div className="navbar-dropdown-menu-banner" style={{backgroundImage: `url(./assets/svg/components/shape-3.svg")`}}>
                          <div className="navbar-dropdown-menu-banner-content">
                            <div className="mb-4">
                              <span className="h2 d-block">Branding Works</span>
                              <p>Experience a level of our quality in both design &amp; customization works.</p>
                            </div>
                            <a className="btn btn-primary btn-transition" href="#">Learn more <i className="bi-chevron-right small"></i></a>
                          </div>
                        </div>

                      </div>

  
                      <div className="col-lg-6">
                        <div className="navbar-dropdown-menu-inner">
                          <div className="row">
                            <div className="col-sm mb-3 mb-sm-0">
                              <span className="dropdown-header">Classic</span>
                              <a className="dropdown-item active" href="./landing-classic-corporate.html">Corporate</a>
                              <a className="dropdown-item " href="./landing-classic-analytics.html">Analytics <span className="badge bg-primary rounded-pill ms-1">Hot</span></a>
                              <a className="dropdown-item " href="./landing-classic-studio.html">Studio</a>
                              <a className="dropdown-item " href="./landing-classic-marketing.html">Marketing</a>
                              <a className="dropdown-item " href="./landing-classic-advertisement.html">Advertisement</a>
                              <a className="dropdown-item " href="./landing-classic-consulting.html">Consulting</a>
                              <a className="dropdown-item " href="./landing-classic-portfolio.html">Portfolio</a>
                              <a className="dropdown-item " href="./landing-classic-software.html">Software</a>
                              <a className="dropdown-item " href="./landing-classic-business.html">Business</a>
                            </div>

  
                            <div className="col-sm">
                              <div className="mb-3">
                                <span className="dropdown-header">App</span>
                                <a className="dropdown-item " href="./landing-app-ui-kit.html">UI Kit</a>
                                <a className="dropdown-item " href="./landing-app-saas.html">SaaS</a>
                                <a className="dropdown-item " href="./landing-app-workflow.html">Workflow</a>
                                <a className="dropdown-item " href="./landing-app-payment.html">Payment</a>
                                <a className="dropdown-item " href="./landing-app-tool.html">Tool</a>
                              </div>
  
                              <span className="dropdown-header">Onepage</span>
                              <a className="dropdown-item " href="./landing-onepage-corporate.html">Corporate</a>
                              <a className="dropdown-item " href="./landing-onepage-saas.html">SaaS <span className="badge bg-primary rounded-pill ms-1">Hot</span></a>
                            </div>

                          </div>

                        </div>
                      </div>

                    </div>

                  </div>

                </li>

                <li className="hs-has-sub-menu nav-item">
                  <a id="companyMegaMenu" className="hs-mega-menu-invoker nav-link dropdown-toggle " href="#" role="button" dataBsToggle="dropdown" ariaExpanded="false">Ducol</a>
  

                  <div className="hs-sub-menu dropdown-menu" ariaLabelledby="companyMegaMenu" style={{minWidth : 14 + 'rem'}}>  
                    <a className="dropdown-item " href="./page-about.html">About</a>
                    <a className="dropdown-item " href="./page-services.html">Services</a>
                    <a className="dropdown-item " href="./page-customer-stories.html">Customer Stories</a>
                    <a className="dropdown-item " href="./page-customer-story.html">Customer Story</a>
                    <a className="dropdown-item " href="./page-careers.html">Careers</a>
                    <a className="dropdown-item " href="./page-careers-overview.html">Careers Overview</a>
                    <a className="dropdown-item " href="./page-hire-us.html">Hire Us</a>
                    <a className="dropdown-item " href="./page-pricing.html">Pricing</a>
                    <a className="dropdown-item " href="./page-contacts-agency.html">Contacts: Agency</a>
                    <a className="dropdown-item " href="./page-contacts-startup.html">Contacts: Startup</a>
                  </div>

                </li>

                <li className="hs-has-sub-menu nav-item">
                  <a id="accountMegaMenu" className="hs-mega-menu-invoker nav-link dropdown-toggle " href="#" role="button" dataBsToggle="dropdown" ariaExpanded="false">Obras realizadas</a>
  

                  <div className="hs-sub-menu dropdown-menu" ariaLabelledby="accountMegaMenu" style={{minWidth: 14 + 'em'}}>                  

                    <div className="hs-has-sub-menu nav-item">
                      <a id="authenticationMegaMenu" className="hs-mega-menu-invoker dropdown-item dropdown-toggle " href="#" role="button" dataBsToggle="dropdown" ariaExpanded="false">Authentication</a>
  
                      <div className="hs-sub-menu dropdown-menu" ariaLabelledby="authenticationMegaMenu" style={{minWidth: 14 + 'em'}} >
                        <a className="dropdown-item" href="#" dataBsToggle="modal" dataBsTarget="#signupModal">Signup Modal</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item " href="./page-login.html">Login</a>
                        <a className="dropdown-item " href="./page-signup.html">Signup</a>
                        <a className="dropdown-item " href="./page-reset-password.html">Reset Password</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item " href="./page-login-simple.html">Login Simple</a>
                        <a className="dropdown-item " href="./page-signup-simple.html">Signup Simple</a>
                        <a className="dropdown-item " href="./page-reset-password-simple.html">Reset Password Simple</a>
                      </div>
                    </div>

      
                    <a className="dropdown-item " href="./account-overview.html">Personal Info</a>
                    <a className="dropdown-item " href="./account-security.html">Security</a>
                    <a className="dropdown-item " href="./account-notifications.html">Notifications</a>
                    <a className="dropdown-item " href="./account-preferences.html">Preferences</a>
                    <a className="dropdown-item " href="./account-orders.html">Orders</a>
                    <a className="dropdown-item " href="./account-wishlist.html">Wishlist</a>
                    <a className="dropdown-item " href="./account-payments.html">Payments</a>
                    <a className="dropdown-item " href="./account-address.html">Address</a>
                    <a className="dropdown-item " href="./account-teams.html">Teams</a>
                  </div>

                </li>
  

                <li className="hs-has-sub-menu nav-item">
                  <a id="pagesMegaMenu" className="hs-mega-menu-invoker nav-link dropdown-toggle " href="#" role="button" dataBsToggle="dropdown" ariaExpanded="false">Serviços</a>
  

                  <div className="hs-sub-menu dropdown-menu" ariaLabelledby="pagesMegaMenu" style={{minWidth: 14 + 'em'}} > 
                    <a className="dropdown-item " href="./page-faq.html">FAQ</a>
                    <a className="dropdown-item " href="./page-terms.html">Terms &amp; Conditions</a>
                    <a className="dropdown-item " href="./page-privacy.html">Privacy &amp; Policy</a>
                    <a className="dropdown-item " href="./page-coming-soon.html">Coming Soon</a>
                    <a className="dropdown-item " href="./page-maintenance-mode.html">Maintenance Mode</a>
                    <a className="dropdown-item " href="./page-status.html">Status</a>
                    <a className="dropdown-item " href="./page-invoice.html">Invoice</a>
                    <a className="dropdown-item " href="./page-error-404.html">Error 404</a>
                  </div>

                </li>

                <li className="hs-has-sub-menu nav-item">
                  <a id="blogMegaMenu" className="hs-mega-menu-invoker nav-link dropdown-toggle " href="#" role="button" dataBsToggle="dropdown" ariaExpanded="false">Blog</a>
  

                  <div className="hs-sub-menu dropdown-menu" ariaLabelledby="blogMegaMenu" style={{minWidth: 14 + 'em'}}>
                    <a className="dropdown-item " href="./blog-journal.html">Journal</a>
                    <a className="dropdown-item " href="./blog-metro.html">Metro</a>
                    <a className="dropdown-item " href="./blog-newsroom.html">Newsroom</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item " href="./blog-article.html">Article</a>
                    <a className="dropdown-item " href="./blog-author-profile.html">Author Profile</a>
                  </div>
 
                </li>

                <li className="hs-has-sub-menu nav-item">
                  <a id="portfolioMegaMenu" className="hs-mega-menu-invoker nav-link dropdown-toggle " href="#" role="button" dataBsToggle="dropdown" ariaExpanded="false">Portfolio</a>
  

                  <div className="hs-sub-menu dropdown-menu" ariaLabelledby="portfolioMegaMenu" style={{minWidth: 14 + 'em'}} >
                    <a className="dropdown-item " href="./portfolio-grid.html">Grid</a>
                    <a className="dropdown-item " href="./portfolio-product-article.html">Product Article</a>
                    <a className="dropdown-item " href="./portfolio-case-studies-branding.html">Case Studies: Branding</a>
                    <a className="dropdown-item " href="./portfolio-case-studies-product.html">Case Studies: Product</a>
                  </div>

                </li>  

                <li className="nav-item">
                  <a className="btn btn-primary btn-transition" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" target="_blank">Solicitar orçamento</a>
                </li>

              </ul>
            </div>
          </div>

        </nav>
      </div>
    </header>  

  );
}
