import React from 'react'

const PintarDatos = () => {

    const [movies,setMovie] = React.useState([])

    const datos = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=014bc0606526da89697d50be16fb0f9c&language=en-US&page=1')
            const dato =  await res.json()
            // setMovie(dato.results)
            //  console.log(movies);
        } catch (error) {
            console.log('no se encontro nada');
        }
    }
    
    datos()


  return (
    <div>
        
    </div>
  )
}

export default PintarDatos