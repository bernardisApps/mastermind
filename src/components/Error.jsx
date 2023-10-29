export default function Error({error, cerrarAlerta}){

  return(
    <div style={{
      position:'absolute',
      top:'40%',
      width:'80%',
      left:'10%',
    }} >
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          No hay números seleccionados o elegiste menos de 4 dígitos.
          <button type="button" className="btn-close" onClick={cerrarAlerta} aria-label="Close">                 </button>
        </div>
      )}
    </div>
  )
}