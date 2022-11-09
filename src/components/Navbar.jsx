import React from 'react'

const Navbar = () => {

  return (
    <div>
        
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src= 'netflix.png' alt="" width={50} height={50} />
                </a>
                
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Películas</a>
                  </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Estrenos</a>
                      </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Géneros
                          </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Accíon</a></li>
                        <li><a className="dropdown-item" href="#">Aventura</a></li>
                        <li><hr className="dropdown-divider"/>Terror</li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                </li>
                   
              </ul>
                <form className="d-flex position-relative" role="search">
                  <input className="form-control me-2" type="search" placeholder="Buscar películas..." aria-label="Search"/>
                    <img src="" alt=""/>
                </form>
            </div>
          </div>
        </nav>


          <div>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
    <div className="carousel-inner mb-3">
      <div className="carousel-item active" data-bs-interval="5000">
        <img src="https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg" className="d-block w-100 img-fluid imagen-rami" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="d-flex align-items-start ">Avengers: Endgame</h5>
          <p className="text-truncate d-flex align-items-start">After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.</p>
        </div>
      </div>
        <div className="carousel-item " data-bs-interval="2000" >
          <img src="https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" className="d-block w-100 img-fluid imagen-rami "  alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="d-flex align-items-start">Spider-Man: No Way Home</h5>
            <p className="text-truncate">Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</p>
          </div>
      </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://image.tmdb.org/t/p/original/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg" className="d-block w-100 img-fluid imagen-rami " alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="d-flex align-items-start">Star Wars: The Last Jedi</h5>
            <p className="text-truncate">Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.</p>
          </div>
        </div>      
    </div>
  </div>
  </div>
  </div>
          

      
  )
}

export default Navbar