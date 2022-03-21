export const TicketCard = ({ ticket }) => {
   return (
      <div className='bg-light p-2 my-2'>
         <h6 className='text-start fw-lighter'>{`Ticket #${ticket.id} ${ticket.status}`}</h6>
         <p className='fs-6 p-1'>{ticket.title}</p>
         <p className='fs-6 p-1'>{ticket.description}</p>
         <span className='p-1'>{ticket.type}</span>
         <span>{ticket.priority}</span>
      </div>
   );
};
