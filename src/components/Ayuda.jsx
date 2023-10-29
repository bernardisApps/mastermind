import './Styles/Ayuda.css';

export default function Ayuda({setAyuda}){

  return(
    <div className='ayuda'>
      <h1>Ayuda</h1><hr/>
      <p>
          <strong>Objetivo del Juego:</strong><br/>
          El objetivo del juego Mastermind es adivinar la combinación secreta de números generada por la máquina en el menor número de intentos posible.
      </p>
      <p>
        <strong>Como jugar:</strong><br/>
        La máquina generará una combinación de 4 números aleatorios, el jugador intentará adivinar ese número.
        El jugador deberá elegir 4 números de la botonera, los mismos no se podrán repetir.
        La máquina te indicará en la tabla de resultados si hay números que estan bien (quiere decir que estan en la posición correcta) o regulares (que quiere decir que son parte de la combinación pero no están en la posición correcta).
        Arriba de los números hay unos puntos verdes que al tocarlos se ponen de color rojo, los mismos sirven como ayuda memoria para descartar números.
        La tabla de resultados permite seleccionar números que pensás que estan en la posición correcta y los mismos se pondrán verdes para resaltarlos.
      </p>
      <p>
        <strong>Estrategias para Adivinar el Código:</strong><br/>
        <strong>Prueba Dígitos Diferentes:</strong><br/> En los primeros turnos, prueba dígitos que no hayas utilizado antes para maximizar la cantidad de información obtenida de las pistas.
        <br/><strong>Analiza las Pistas:</strong><br/> Utiliza las pistas proporcionadas en cada turno para eliminar opciones y ajustar tu estrategia.
        <br/><strong>Patrones y Lógica:</strong><br/> Observa patrones en las pistas y ajusta tus suposiciones en consecuencia.
        <br/><strong>Divide y Conquista:</strong><br/> Divide los números en grupos (por ejemplo, 0-4 y 5-9) y realiza suposiciones basadas en qué grupo podría contener el número correcto.
        Recuerda que Mastermind es un juego que mejora con la práctica. Cuanto más juegues, más desarrollarás tu habilidad para         deducir el código secreto.

        ¡Espero que esta guía te sea útil y que disfrutes jugando Mastermind con números! Si tienes más preguntas o necesitas           más ayuda, no dudes en preguntar. ¡Buena suerte!
      </p><hr/>
      <h4 onClick={setAyuda} >Cerrar</h4>
    </div>
  )
}