import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './lottery.jsx'
import Ticket from './ticket.jsx'
import { Sum } from './ticketgenerate.jsx'

function App() {
  let winConditoin=(arr)=>{
    return Sum(Ticket)===15;
  }
  return (
    <>
      <Lottery winConditoin={winConditoin}/>
      {/* <Ticket n={3} totalSum={15}/> */}
      <h1>Your Task is to find the combination of the 15 with 3 number sum.</h1>
    </>
  )
}

export default App
