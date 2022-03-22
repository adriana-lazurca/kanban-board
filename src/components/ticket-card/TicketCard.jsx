import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { updateTicket } from '../../apis/tickets';
import { UpdatedTicketContext } from '../kanban-board/KanbanBoard';

export const TicketCard = ({ ticket }) => {
   const sendNewTicket = useContext(UpdatedTicketContext);

   const changeTicketStatus = async (status) => {
      const newTicket = { status };
      const updatedTicket = await updateTicket(ticket.id, newTicket);
      sendNewTicket(updatedTicket);
   };

   return (
      <div className='bg-light p-2 my-2'>
         <button onClick={() => changeTicketStatus('inprogress')}>Start progress</button>
         <Link to={`/tickets/${ticket.id}`}>
            <h6 className='text-start fw-lighter'>{`Ticket #${ticket.id} ${ticket.status}`}</h6>
         </Link>
         <p className='fs-6 p-1'>{ticket.title}</p>
         <span className='p-1'>{ticket.type}</span>
         <span>{ticket.priority}</span>
      </div>
   );
};
