import './App.css';

function App() {
  return (

    //navbart szintén a bootstrap-ből másoljuk ki 
    // Components Navbar
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* //container text-center classname-t használja a bootstrap, hogy középre rendezzen
      //az mt-5 margin-top-ot jelent (1-5-ig adható) */}
      <div className="container text-center mt-5">
        <h1>Gallery</h1>
        {/* 
        // ide másoljuk be a bootstrap-ből a képek helyét, készítünk neki egy row div-et abba másoljuk
        // az inline sílt-át kell obj-mmá alakítani
        // ahhoz, hogy több képet jelenítsünk meg egy loopot kell csinálni
        */}
        <div className="row">
          {/* //ez a loop 9 képet fog megjeleníteni */}
          {Array.apply(null, { length: 9 }).map((_, index) => {
            //return kell
            return (
              //oszlopokba rendezés col névvel megadjuk itt is az eltartást
              <div key={index} className="col mb-5">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="https://via.placeholder.com/200" className="card-img-top" alt="image" />
                </div>
              </div>
            )
          })
          }
          {/* //eddig csomizzuk a loopot */}
        </div>
      </div>
    </>
  );
}

export default App;
