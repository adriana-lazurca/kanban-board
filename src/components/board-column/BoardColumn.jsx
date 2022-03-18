import { TicketCard } from '../ticket-card/TicketCard';
import { getTickets } from '../../apis/tickets';
import './board-column.scss';

import { useEffect, useState } from 'react';

export const BoardColumn = ({ selectedName }) => {
   const [tickets, setTickets] = useState([]);

   useEffect(async () => {
      const data = await getTickets();
      setTickets(data);
   }, []);

   const columnTickets = tickets.filter((ticket) => ticket.status === selectedName);

   return (
      <div className='container-fluid'>
         <div className='row'>
            <div className='board-column col mx-2 py-2'>
               {columnTickets.map((ticket) => (
                  <TicketCard ticket={ticket} selectedName={selectedName} />
               ))}
            </div>
         </div>
      </div>
   );
};
