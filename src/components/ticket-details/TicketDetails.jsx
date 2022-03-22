import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTicket } from '../../apis/tickets';

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
            <div className='bg-light p-2 my-2'>
               <h2 className='text-start fw-lighter'>{ticket.title}</h2>
               <div>
                  <h6>Details</h6>
                  <p className='fs-6 p-1'>{`Type: ${ticket.type}`}</p>
                  <p className='fs-6 p-1'>{`Priority: ${ticket.priority}`}</p>
                  <p className='fs-6 p-1'>{`Status: ${ticket.status}`}</p>
               </div>

               <div>
                  <h6>Description</h6>
                  <p>{ticket.description}</p>
               </div>
            </div>
         )}
      </>
   );
};
