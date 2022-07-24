import { useState } from 'react'
import './App.css'
import QuoteBox from './component/QuoteBox'
import quotes from './quotes.json'
import colors from './utils/colors'

function App() {
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }
  let quotesRandom = getRandomElement(quotes);
  let colorRandom = getRandomElement(colors);

  const [randomQuote, setrandomQuote] = useState(quotesRandom)
  const [randomColors, setrandomColors] = useState(colorRandom)

  const objectStyle={
    backgroundColor:randomColors
  }
  const getRandomAll=()=>{
    quotesRandom = getRandomElement(quotes)
    colorRandom = getRandomElement(colors)

    setrandomQuote(quotesRandom )
    setrandomColors(colorRandom)
  }

  return (
    <div className="App" style={objectStyle}>
      <QuoteBox randomQuote = {randomQuote} 
      randomColors = {randomColors}
      getRandomAll = {getRandomAll} />
    </div>
  )
}

export default App
