import TicketNum from "./ticketNum";
export default function Ticket({ ticket }) {
 
  return (
    <div>
      {ticket.map((num, index) => (
        <TicketNum num={num} key={index} />
      ))}
    </div>
  );
}

