import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTicket } from '../../../apis/tickets';
import { types, priorities } from '../../../constants';
import { findIcon } from '../utils/findIcon';
import { TicketDetail } from './';
import './ticket-details.scss';

const capitalizeFirstLetter = (word) => {
   return word.charAt(0).toUpperCase() + word.slice(1);
};

export const TicketDetails = () => {
   const [ticket, setTicket] = useState();
   const { ticketId } = useParams();

   useEffect(() => {
      const fetchTicket = async () => {
         const ticket = await getTicket(ticketId);
         setTicket(ticket);
      };
      fetchTicket();
   }, [ticketId]);

   return (
      <>
         {ticket && (
            <section className='container-fluid p-2 my-4 mx-2'>
               <h2 className='text-start fw-bold'>{ticket.title}</h2>

               <section className='ticket-details container-fluid align-items-center'>
                  <h6 className='text-start my-4'>Details</h6>

                  <TicketDetail title='Type'>
                     {capitalizeFirstLetter(ticket.type)}
                     <span className='px-3'>{findIcon(types, ticket.type)}</span>
                  </TicketDetail>

                  <TicketDetail title='Priority'>
                     {capitalizeFirstLetter(ticket.priority)}
                     <span className='px-3'>{findIcon(priorities, ticket.priority)}</span>
                  </TicketDetail>

                  <TicketDetail title='Status'>{capitalizeFirstLetter(ticket.status)}</TicketDetail>
               </section>

               <section className='my-5'>
                  <h6 className='my-4'>Description</h6>
                  {ticket.description === '' ? (
                     <div className='description'>No description</div>
                  ) : (
                     <div className='description'>{ticket.description}</div>
                  )}
               </section>
            </section>
         )}
      </>
   );
};
