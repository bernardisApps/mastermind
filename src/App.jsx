import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import NumbersContainer from './components/NumbersContainer';
import { useEffect, useState } from 'react';
import Ganaste from './components/Ganaste';
import Resultados from './components/Resultados';
import Botonera from './components/Botonera';
import Error from './components/Error';
import Ayuda from './components/Ayuda';
import Memoria from './components/Memoria';

export default function App() {

  const [ayuda, setAyuda] = useState(false);
  const [numeroAleatorio, setNumeroAleatorio] = useState([]);
  const [ganaste, setGanaste] = useState(false);
  const [pruebas, setPruebas] = useState([]);
  const [numerosElegidos, setNumerosElegidos] = useState([]);
  const [error, setError] = useState(false);

  function generarNumerosAleatorios() {
    let numeros = [];
    while (numeros.length < 4) {
      const numeroAleatorio = Math.floor(Math.random() * 10);
      if (numeros.indexOf(numeroAleatorio) === -1) {
        numeros.push(numeroAleatorio);
      }
    }
    return numeros;
  }

  useEffect(() => {
      setNumeroAleatorio(generarNumerosAleatorios());
      setGanaste(false);   
  }, []);

  const cerrarAlerta = () => {
    setError(false);
  };

  function reset(){
    setNumeroAleatorio(generarNumerosAleatorios());
    setGanaste(false);
  }


  return (
    <main className='container'>

      <Error error={error} cerrarAlerta={cerrarAlerta} />
      
      <div className='row'>
        
          <div className='col-md-8 col-12 mx-auto principal'>
            
            <h4 className='title' >MasterMind</h4>
            
            <div className='m-4'>
              <h3>Resultados</h3>
            </div>

            <Resultados pruebas={pruebas}/>


            <div className='m-3' >
              {
                 numerosElegidos.length > 0 ? <> <h1 style={{color:'white', margin:'0px'}}>{numerosElegidos}</h1> </> : <p                       style={{color:'red', margin:'0px'}} >No hay números elegidos</p>
              }
            </div>

            <Memoria pruebas={pruebas} />
              
            <NumbersContainer 
              setError={(v)=>{setError(v)}}
              numerosElegidos={numerosElegidos}
              setNumerosElegidos ={(n)=>{setNumerosElegidos(n)}} 
            />
            
            <Botonera
              setAyuda = {()=>{setAyuda(true)}}
              numerosElegidos = {numerosElegidos}
              setNumerosElegidos = {(n)=>{setNumerosElegidos(n)}}
              numeroAleatorio = {numeroAleatorio}
              setError = {(e)=>{setError(e)}}
              reiniciar = {()=>{reset()}}
              setPruebas = {(v)=>{setPruebas(v)}}
              pruebas = {pruebas}
              setGanaste= {(v)=>{setGanaste(v)}}
            />
          </div>

        {
          ganaste && 
          <Ganaste 
            movimientos = {pruebas.length}
            reiniciar={() => { reset() }}
            setPruebas={()=>{setPruebas([])}} />
        }
      </div>
               
                
            

           
              
          
            
      
      <div className='propaganda'>
        <p>
          BernardisApps® 2023
        </p>
      </div>

      {ayuda && <Ayuda setAyuda={()=>{setAyuda(false)}} />}
      
    </main>
  )
}
