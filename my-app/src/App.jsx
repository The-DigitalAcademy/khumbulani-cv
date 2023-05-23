import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
        <nav id="top-bar"> <nav className="navbar navbar-expand-lg float-right " id="mainNav">
        <div className="w3-top active-page">
          <div className="w3-bar w3-black w3-card">
            <a
              className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
              href="javascript:void(0)"
              title="Toggle Navigation Menu"
            >
              <i className="fa fa-bars"></i>
            </a>
           
            <nav className="navbar-container container navbar-item"/>
            <a href="/"   className="w3-bar-item w3-button w3-padding-large flexbox">
              {" "}
              My CV
            </a>
            <a
              href="..Portfolio"
              className="w3-bar-item w3-button w3-padding-large w3-hide-small flexbox" aria-current="page"
            >
              {" "}
              Portfolio
            </a>
          </div>
        </div>
      </nav> </nav>
     

      <br />
      <div className="circle circle-border">
        <img
        src="https://avatars.githubusercontent.com/u/57489225?v=4"
        className="img-circle"
        alt="Cinque Terre"
        width="304"
        height="236" 
      ></img></div> 
      <br />
      <br />
      <div className="container"></div>
      <h1 className="masthead-heading text-uppercase mb-4">
        <em>Khumbulani</em> <em>Ntuli</em>
      </h1>
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
        <p className="masthead-subheading font-weight-light mb-0">
          {" "}
          softerware _ websites _ harderware{" "}
        </p>

        <br />
        <div className="card bg-dark text-white">
          <div className="card text-bg-primary mb-1 ">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="card-img-overlay">
              {" "}
              <div className="row ">
                <div className="col-lg-4 ms-auto text-black">
                  <br /><br /><br />
                  <i className="fas fa-star"></i>
                  <p className="lead">
                    HTML , CSS and JavaScript. Web browsers , web server ,
                    multimedia web pages.
                  </p>
                </div>
                <div className="col-lg-4 me-auto text-black">
                  <br /><br /><br />
                  <i className="fas fa-star"></i>
                  <p className="lead">
                    Mongodb , Mongoose or database , HTM files .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br /><br /><br />
        <h2 className="page-section-heading text-center text-uppercase text-green mb-0">
          SKILLS
        </h2>
        <br />
        <br />
        <div className="col-md-6 col-lg-4 mb-5">
          <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal1"
          >
            <br />
            <br />
            <br />
            <br />
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>

            <div className="container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SgU53BJz2LmTxSP_oTDu-9tl0ymX_Zxp5Q&usqp=CAU"
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text">HTML</div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <div className="col-md-6 col-lg-4 mb-5 mb-md-5">
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal2"
        >
          <br />
          <br />
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <div className="container">
            <img
              src="data:image/png;base64,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"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="text">Css</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal4"
        >
          <br />
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <div className="container">
            <img
              src="data:image/png;base64,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"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="text">Jc</div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal5"
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <div className="container">
            <img
              src="data:image/png;base64,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"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="text">Mongdb</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal6"
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <div className="container">
            <img
              src="data:image/png;base64,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"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="text">React</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="text-uppercase mb-4">Around the Web</h4>
        <a
          className="btn btn-outline-light btn-social mx-1"
          href="https://www.google.com/"
        >
          <i className="fab fa-google"></i>
        </a>
        <a
          className="btn btn-outline-light btn-social mx-1"
          href="https://web.whatsapp.com/"
        >
          <i className="fab fa-fw fa-whatsapp"></i>
        </a>

        <br />
        <br />
        <br />
        <br />
        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright &copy; Khumbulani_Ntuli 2023</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
