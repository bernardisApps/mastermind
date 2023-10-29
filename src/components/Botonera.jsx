import './Styles/Botonera.css';

export default function Botonera({setAyuda,numerosElegidos,setNumerosElegidos,numeroAleatorio,setError,reiniciar, setPruebas, pruebas, setGanaste}){

  function probar(array) {
    if (array.length < 4) {
      setError(true);
      const audio = new Audio('./src/sounds/error.mp3');
      audio.volume = 0.8;
      audio.play();
    } else {
      console.log(numeroAleatorio);
      const comparacion = comparar(array, numeroAleatorio);
      if (comparacion.bien == 4){
        const audio = new Audio('./src/sounds/ganaste.mp3');
        audio.volume = 0.5;
        audio.play();
        setPruebas([...pruebas, comparacion]);
        setNumerosElegidos([]);
        setGanaste(true);

      }else{
      const audio = new Audio('./src/sounds/probar.mp3');
      audio.volume = 0.3;
      audio.play();
      setPruebas([...pruebas, comparar(array, numeroAleatorio)]);
      setNumerosElegidos([]);
      }
    }
  }

  function borrar() {
    setNumerosElegidos([]);
  }

  function comparar(nElegido, numeroAleatorio) {
    const resultado = {
      numero: nElegido,
      bien:0,
      regulares:0,
    }

    for (let i = 0; i < 4 ; i++){
      if (nElegido[i] === numeroAleatorio[i]){
        resultado.bien += 1;
      }else{
        if (nElegido.includes(numeroAleatorio[i])){
          resultado.regulares += 1;
        }
      }
    }
    return resultado;
  }

  return(
    <div className='botonera'>

      <div className='col'>
        <button
          style={{width:'95%'}}
          className='btn btn-outline-success m-1'
          onClick={() => probar(numerosElegidos)}
          title='Probar la combinación seleccionada'
        >
          &#9655;
        </button>
      </div>

      <div className='col'>
        <button
          style={{width:'95%'}}
          className='btn btn-outline-danger m-1'
          onClick={() => borrar()}
          title='Borrar la combinación seleccionada'
        >
          &#9003;
        </button>
      </div>

      <div className='col'>
        <button
          style={{width:'70%'}}
          className="btn btn-outline-info m-1"
          title='Ayuda'
          onClick= {() => setAyuda()}
          >
          ❔
        </button>
      </div>

      <div className='col'>
        <button
          style={{width:'70%'}}
          className='btn btn-outline-warning m-1'
          title='Resetar la combinación de la máquina'
          onClick={()=>{reiniciar(true); setPruebas([])}}
        >&#8634;</button>
      </div>
      
    </div>
  )
}