import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTicket } from '../../../apis/tickets';
import { types, priorities } from '../../../constants';
import { findIcon } from '../utils/findIcon';
import './ticket-details.scss';

const capitalizeFirstLetter = (word) => {
   return word.charAt(0).toUpperCase() + word.slice(1);
};

export const TicketDetails = () => {
   const [ticket, setTicket] = useState();
   const { ticketId } = useParams();

   useEffect(() => {
      const fetchTicket = async () => {
         const data = await getTicket(ticketId);
         setTicket(data);
      };
      fetchTicket();
   }, [ticketId]);

   return (
      <>
         {ticket && (
            <section className='container-fluid p-2 my-4 mx-2'>
               <h2 className='text-start fw-bold'>{ticket.title}</h2>
               <section className='container-fluid align-items-center'>
                  <h6 className='text-start my-4'>Details</h6>
                  <p className='row align-items-center fs-6 fw-lighter p-1'>
                     <span className='col-2 col-sm-1 fw-lighter m-2'>Type:</span>
                     <span className='col-9 col-sm-5 fw-bold '>
                        {capitalizeFirstLetter(ticket.type)}
                        {findIcon(types, ticket.type)}
                     </span>
                  </p>

                  <p className='row align-items-center fs-6 fw-lighter p-1'>
                     <span className='col-2 col-sm-1 fw-lighter m-2'>Priority:</span>
                     <span className='col-9 col-sm-5 fw-bold'>
                        {' '}
                        {capitalizeFirstLetter(ticket.priority)} {findIcon(priorities, ticket.priority)}
                     </span>
                  </p>
                  <p className='row align-items-center fs-6 fw-lighter p-1'>
                     <span className='col-2 col-sm-1 fw-lighter m-2'>Status:</span>
                     <span className='col-9 col-sm-5 fw-bold '>{capitalizeFirstLetter(ticket.status)}</span>
                  </p>
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
