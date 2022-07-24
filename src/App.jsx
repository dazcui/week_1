import { useState } from 'react'
import './App.css'
import QuoteBox from './component/QuoteBox'
import quotes from './quotes.json'
import colors from './utils/colors'

function App() {

  //realizamos un random sin decimales
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }
  //creamos dos variables uno para las citas y el otro para los colores
  let quotesRandom = getRandomElement(quotes);
  let colorRandom = getRandomElement(colors);

  //creamos dos estados con el hook useState uno para las citas y otro para los colores
  const [randomQuote, setrandomQuote] = useState(quotesRandom)
  const [randomColors, setrandomColors] = useState(colorRandom)

  //creamos un objeto para el color de fondo de la pagina
  const objectStyle={
    backgroundColor:randomColors
  }
  
  //creamos una funcion para el uso del boton y cambio de citas con los colores
  const getRandomAll=()=>{
    quotesRandom = getRandomElement(quotes)
    colorRandom = getRandomElement(colors)

    setrandomQuote(quotesRandom )
    setrandomColors(colorRandom)
  }

  //creamos 3 componentes uno de citas, otro de colores y el ultimo de boton
  return (
    <div className="App" style={objectStyle}>
      <QuoteBox 
      randomQuote = {randomQuote} 
      randomColors = {randomColors}
      getRandomAll = {getRandomAll} />
    </div>
  )
}

export default App
