import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTicket } from '../../apis/tickets';
import { types, priorities } from '../../constants';
import './ticket-details.scss';

export const TicketDetails = () => {
   const [ticket, setTicket] = useState();
   const { ticketId } = useParams();

   const findIcon = (items, type) => {
      const item = items.find((item) => item.name === type);
      return item.icon;
   };

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
            <div className='bg-light p-2 my-2 mx-2'>
               <h2 className='d-inline text-start fw-bold '>{`Ticket #${ticket.id}/`}</h2>
               <h2 className='d-inline text-start fw-bold'>{ticket.title}</h2>
               <div>
                  <h6 className='my-4'>Details</h6>
                  <p className='fs-6 fw-lighter p-1'>
                     <span className='fw-lighter m-2'>Type:</span>
                     <span className='fw-bold '>
                        {`${ticket.type.toUpperCase()} `}
                        {findIcon(types, ticket.type)}
                     </span>
                  </p>
                  <p className='fs-6 fw-lighter p-1'>
                     <span className='fw-lighter m-2'>Priority:</span>
                     <span className='fw-bold '>
                        {' '}
                        {`${ticket.priority.toUpperCase()} `} {findIcon(priorities, ticket.priority)}
                     </span>
                  </p>
                  <p className='fs-6 fw-lighter p-1'>
                     <span className='fw-lighter m-2'>Status:</span>
                     <span className='fw-bold '>{`${ticket.status.toUpperCase()}`}</span>
                  </p>
               </div>

               <div>
                  <h6 className='my-4'>Description</h6>
                  <div className='description'>{ticket.description}</div>
               </div>
            </div>
         )}
      </>
   );
};
