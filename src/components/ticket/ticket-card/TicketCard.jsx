import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { updateTicket } from '../../../apis/tickets';
import { UpdatedTicketContext } from '../../kanban-board/KanbanBoard';
import { types, priorities } from '../../../constants';
import { findIcon } from '../utils/findIcon';
import './ticket-card.scss';

export const TicketCard = ({ ticket }) => {
   const { updateTicket: changeTicket } = useContext(UpdatedTicketContext);

   const changeTicketStatus = async (ticketId, status) => {
      const newTicket = { status };
      const updatedTicket = await updateTicket(ticket.id, newTicket);
      changeTicket(updatedTicket);
   };

   return (
      <div className='ticket p-2 my-2'>
         {/* <button
         onClick={() => changeTicketStatus('inprogress')}
         >
            Start progress
         </button> */}
         <Link to={`/tickets/${ticket.id}`}>
            <h6 className='text-start fw-lighter'>{`Ticket #${ticket.id}`}</h6>
         </Link>
         <p className='fs-6 p-1'>{ticket.title}</p>
         <span>{findIcon(types, ticket.type)}</span>
         <span className='px-3'>{findIcon(priorities, ticket.priority)}</span>
      </div>
   );
};
