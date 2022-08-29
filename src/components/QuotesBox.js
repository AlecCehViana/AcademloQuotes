import React from "react";
import { useState } from "react";
import quotes from '../quotes.json'
 

const colors = ["#240046", "#8d0801", "#005b00", "#ff7b00", "#990033", "#140152"]

const QuotesBox = () => {
    let RandomNumber =Math.floor(Math.random()*quotes.length);
    const [ index, setIndex] = useState(RandomNumber)
   
    const changeQuote = () => {
        let RandomNumber =Math.floor(Math.random()*quotes.length);
        setIndex(RandomNumber)
        

    }
    const randomColor = Math.floor(Math.random() * colors.length )
    document.body.style = `background: ${colors[randomColor]}`

 console.log(quotes)
 return (
     <div className="containerBox" style={{color: colors[randomColor] }}>
        
        <div className="quote-design"> <h2>"{quotes[index].quote}"</h2>  </div>

        <div className="author-design"> <h4> — {quotes[index].author}</h4></div>
      
        <button onClick={changeQuote} style={{backgroundColor: colors[randomColor] }}> <i class="fa-solid fa-shuffle"></i></button>
     
     </div>
 )
}
export default QuotesBox