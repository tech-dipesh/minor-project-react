import "./lottery.css";
import { useState } from "react";
import {Generate, Sum} from "./ticketgenerate";
import Ticket from "./ticket";
import Button from "./button";


export default function Lottery({n=3, winCondition}){
  const [ticket, setticket]=useState(Generate(n));

  let isWin=Sum(ticket)===winCondition;
  
  let newGenerateTicket=()=>{
    setticket(Generate(n));    
  }
  return (
    <>
    <h2>Welcome to the lottery Game</h2>
    <div className="ticket">
     <Ticket ticket={ticket}/>
    </div>
    <Button action={newGenerateTicket}/>

      {/* <button onClick={newGenerateTicket}>Generate Again</button> */}
      <h3>{isWin&& "Congratulations" }</h3>
    </>
  )
}



// we are given lottery tickets with a 3 digit number
// the number would be generated randomly
// if the sum of all digits is 15, we win the Lottery.