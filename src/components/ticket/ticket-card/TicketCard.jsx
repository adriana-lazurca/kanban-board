import React from 'react';
import { Link } from 'react-router-dom';

import { types, priorities } from '../../../constants';
import { findIcon } from '../utils/findIcon';
import './ticket-card.scss';

export const TicketCard = ({ ticket }) => (
   <section className={'ticket p-2 my-2'}>
      <Link to={`/tickets/${ticket.id}`}>
         <h6 className='fs-6 text-start fw-lighter'>{`ticket #${ticket.id}`}</h6>
      </Link>
      <h6 className='text-start text-white py-3'>{ticket.title}</h6>
      <figure className='d-inline'>{findIcon(types, ticket.type)}</figure>
      <figure className='d-inline px-3'>{findIcon(priorities, ticket.priority)}</figure>
   </section>
);
