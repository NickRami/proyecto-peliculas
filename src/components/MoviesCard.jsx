import React from 'react'

const MoviesCard = () => {


  const [movies,setMovie] = React.useState([])

  const datos = async () => {
      try {
          const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=014bc0606526da89697d50be16fb0f9c&language=en-US&page=1')
          const dato =  await res.json()
          // setMovie(dato.results)
          //  console.log(movies);
      } catch (error) {
         
      }
  }
  
  datos()

  return (
    
 <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="container">
          <h3 class="text-start text-white mb-3">Películas Populares</h3> 
              <div class="carousel-item active " data-bs-interval="10000">
                  <div className='row'>
                     <div className='col-sm-3'>
                         <div  class="card shadow-sm bg-body rounded" style={{width: '230px',heigth:'450px'}}>
                            <img src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" class="card-img-top w-100" alt="..."/>
                              <button class="btn btn-primary position-absolute btn-sm">2018</button>
                               <div class="card-body  text-bg-light p-3 position-relative">
                                 <h5 class="card-title text-center">Avengers Infinity War</h5>
                                 <i class="fa-solid fa-star position-absolute bottom-0 start-0 translate-middle text-warning ms-3 "><p class="position-absolute top-0 start-50 text-dark ms-2">8.3</p></i>
                                </div>
                          </div> 
                      </div>
                      
                      <div class=" col-sm-3">
                         <div class='card shadow-sm bg-body rounded' style={{width: '230px',heigth:'450px'}}>
                             <img src="https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" class="card-img-top w-100 " alt="..."/>
                              <button class="btn btn-primary position-absolute btn-sm ">2022</button>
                             <div class="card-body  text-bg-light p-3">
                                <h5 class="card-title text-center ">The Batman</h5>
                                <i class="fa-solid fa-star position-absolute bottom-0 start-0 translate-middle text-warning ms-3 "><p class="position-absolute top-0 start-50 text-dark ms-2">7.8</p></i>   
                            </div>
                         </div>
                      </div>
                      
                      <div class=" col-sm-3">
                          <div class="card shadow-sm bg-body rounded" style={{width: '230px',heigth:'450px'}}>
                             <img src="https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg" class="card-img-top" alt="..."/>
                              <button class="btn btn-primary position-absolute btn-sm">2003</button>
                             <div class="card-body text-bg-light p-3">
                              <h5 class="card-title text-center ">Finding Nemo</h5>
                              <i class="fa-solid fa-star position-absolute bottom-0 start-0 translate-middle text-warning ms-3"><p class="position-absolute top-0 start-50 text-dark ms-2">8.1</p></i>
                            </div>
                           </div>
                     </div>
                    
                    <div class=" col-sm-3">
                      <div class="card shadow-sm bg-body rounded" style={{width: '230px',heigth:'450px'}}>
                        <img src="https://image.tmdb.org/t/p/w500/a0Syo09bmNJgehjfeVL6meR9Mjh.jpg" class="card-img-top " alt="..."/>
                         <button class="btn btn-primary position-absolute btn-sm">2017</button>
                         <div class="card-body text-bg-light p-3">
                            <h5 class="card-title text-center">Tarzan</h5>
                            <i class="fa-solid fa-star position-absolute bottom-0 start-0 translate-middle text-warning ms-3 "><p class="position-absolute top-0 start-50 text-dark ms-2">6.9</p></i>
                        </div>
                    </div>
                   </div>
                 </div>
             </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
        </div>
    </div>
</div>
    
 )
}

export default MoviesCard