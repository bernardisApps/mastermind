import './Styles/Ganaste.css';
export default function Ganaste({reiniciar, setPruebas,movimientos}){

  return(
    <div className='card ganaste '>
      <div className='card-body'>
        <h1 className='card-title m-3'>Ganaste!</h1>
        <h4 className='card-text m-3'>Has acertado la combinación exacta</h4>
        <h4>En {movimientos} movimientos </h4>
        <button 
          onClick={()=>{reiniciar();setPruebas()}} 
          className='btn btn-success m-3 btn-lg'>
          Nuevo Juego
        </button>
      </div>
    </div>
  )
}