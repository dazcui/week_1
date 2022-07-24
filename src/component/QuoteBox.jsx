import React from 'react'


const QuoteBox = ({randomQuote ,randomColors, getRandomAll} ) => {

  console.log(randomQuote);

const objectStyle={
  color:randomColors
}
const objestBgStyle={
  backgroundColor : randomColors
}


  return (

    <div className='QuoteBox' style={objectStyle}>
      <div className='image'>
      <i class="fa-solid fa-quote-left"></i>
      </div>
      <div className='quote'>
        <p> {randomQuote.quote}</p>
      </div>
      <div className='autor'>
        <p> randomQuote.author</p>
      </div>
      <div className='button'>
        <button onClick={getRandomAll} style={objestBgStyle}>&#62;</button>
      </div>
    </div>

  )
}

export default QuoteBox