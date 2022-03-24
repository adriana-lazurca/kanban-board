import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { updateTicket } from '../../../apis/tickets';
import { UpdatedTicketContext } from '../../kanban-board/KanbanBoard';
import { types, priorities } from '../../../constants';
import { findIcon } from '../utils/findIcon';
import { useIsMobile } from '../../../hooks/useIsMobile';

import './ticket-card.scss';

export const TicketCard = ({ ticket }) => {
   const { updateTicket: changeTicket } = useContext(UpdatedTicketContext);

   const changeTicketStatus = async (ticketId, status) => {
      const newTicket = { status };
      const updatedTicket = await updateTicket(ticket.id, newTicket);
      changeTicket(updatedTicket);
   };
   const isMobile = useIsMobile();

   return (
      <section className={`ticket p-2 my-2 ${isMobile ? 'bg-mobile' : ''}`}>
         {/* {`button ${showAbout ? 'button--active' : 'button--inactive'}` */}
         {/* <button
         onClick={() => changeTicketStatus('inprogress')}
         >
            Start progress
         </button> */}
         <Link to={`/tickets/${ticket.id}`}>
            <h6 className='fs-6 text-start fw-lighter'>{`ticket #${ticket.id}`}</h6>
         </Link>
         <h6 className='text-start text-white py-3'>{ticket.title}</h6>
         <figure className='d-inline'>{findIcon(types, ticket.type)}</figure>
         <figure className='d-inline px-3'>{findIcon(priorities, ticket.priority)}</figure>
      </section>
   );
};
