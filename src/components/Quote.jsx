import React from 'react'
import './Quote.css'
import QuoteImage from "../assets/images/quote.png"


const Quote = () => {
const navigate=useNavigate("")

  return (
    <>
    <div className="quote-img">
        <img src={QuoteImage} onClick={navigate("/")}></img>
        </div>
        </>
         
  )
}

export default Quote
