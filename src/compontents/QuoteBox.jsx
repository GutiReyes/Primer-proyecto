import React, { useState } from 'react';
import quotes from "../quotes.json";
import "../styles/quotebox.css";

const  colours = ["brown","black","darkblue","darkred","darkgreen","teal","darkmagenta","blue"]

const QuoteBox = () => {

    const randomIndex = Math.floor(Math.random()*quotes.length);
    const [phrase, setPhrase] = useState(randomIndex);

    const changePhrase = () => {
        const randomIndex = Math.floor(Math.random()*quotes.length)
        setPhrase(randomIndex);
    };

    const randomColor = Math.floor(Math.random()*colours.length)
    const colour = colours[randomColor]

    document.body.style = `background: ${colour}`
    return (
        <div className='quotebox'>
            <h3 style = {{color:colour}} ><i class="fa-solid fa-quote-left"></i> {quotes[phrase].quote} <i class="fa-solid fa-quote-right"></i></h3>
            <h5 style = {{color:colour}}>{quotes[phrase].author}</h5>
            <div className='quote1'>
                <button onClick={changePhrase} style={{background:colour}}><i className="fa-solid fa-chevron-right" style={{color:"white"}}></i></button>
            </div>
        </div>
    );
};
export default QuoteBox;