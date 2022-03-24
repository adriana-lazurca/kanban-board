import { useState } from 'react';

import { BoardColumn } from '../../board-column/BoardColumn';
import { NavigationColumns } from '../navigation-columns/NavigationColumns';
import { TicketCard } from '../../ticket';
import './mobile-board.scss';

export const MobileBoard = ({ columns, tickets }) => {
   const [selectedColumnName, setSelectedColumnName] = useState('todo');

   const columnTickets = tickets.filter((ticket) => ticket.status === selectedColumnName);

   return (
      <section>
         <NavigationColumns
            columns={columns}
            selectedColumnName={selectedColumnName}
            onSelect={setSelectedColumnName}
         />

         <div className='mobile-column'>
            <BoardColumn
               tickets={columnTickets}
               selectedColumnName={selectedColumnName}
               renderTicket={(ticket) => <TicketCard key={ticket.id} ticket={ticket} />}
            />
         </div>
      </section>
   );
};
