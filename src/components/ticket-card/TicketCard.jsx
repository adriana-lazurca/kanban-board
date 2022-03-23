import React, { useContext } from 'react';
import { RiBugLine } from 'react-icons/ri';
import { MdOutlineTask } from 'react-icons/md';
import { FcHighPriority } from 'react-icons/fc';
import { FcLowPriority } from 'react-icons/fc';

import { Link } from 'react-router-dom';
import { updateTicket } from '../../apis/tickets';
import { UpdatedTicketContext } from '../kanban-board/KanbanBoard';
import './ticket-card.scss';

const types = [
   {
      name: 'task',
      title: 'Task',
      icon: <MdOutlineTask />,
   },
   {
      name: 'bug',
      title: 'Bug',
      icon: <RiBugLine />,
   },
];
const priorities = [
   {
      name: 'high',
      title: 'High',
      icon: <FcHighPriority />,
   },
   {
      name: 'low',
      title: 'Low',
      icon: <FcLowPriority />,
   },
];
const findIcon = (items, type) => {
   const item = items.find((item) => item.name === type);
   return item.icon;
};

export const TicketCard = ({ ticket }) => {
   const sendNewTicket = useContext(UpdatedTicketContext);

   const changeTicketStatus = async (status) => {
      const newTicket = { status };
      const updatedTicket = await updateTicket(ticket.id, newTicket);
      sendNewTicket(updatedTicket);
   };

   return (
      <div className='ticket p-2 my-2'>
         <button onClick={() => changeTicketStatus('inprogress')}>Start progress</button>
         <Link to={`/tickets/${ticket.id}`}>
            <h6 className='text-start fw-lighter'>{`Ticket #${ticket.id} ${ticket.status}`}</h6>
         </Link>
         <p className='fs-6 p-1'>{ticket.title}</p>
         <span>{findIcon(types, ticket.type)}</span>
         <span className='px-3'>{findIcon(priorities, ticket.priority)}</span>
      </div>
   );
};
