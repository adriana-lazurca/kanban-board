import { useState } from 'react';

import { BoardColumn } from '../board-column/BoardColumn';
import { NavigationColumns } from '../navigation-columns/NavigationColumns';
import { TicketCard } from '../ticket-card/TicketCard';

export const MobileBoard = ({ columns, tickets }) => {
   const [selectedColumnName, setSelectedColumnName] = useState('todo');

   const columnTickets = tickets.filter((ticket) => ticket.status === selectedColumnName);

   return (
      <div>
         <NavigationColumns
            columns={columns}
            selectedColumnName={selectedColumnName}
            onSelect={setSelectedColumnName}
         />

         <div style={{ width: '90%', margin: 'auto', backgroundColor: 'lightgray', padding: 8 }}>
            <BoardColumn
               tickets={columnTickets}
               selectedColumnName={selectedColumnName}
               renderTicket={(ticket) => <TicketCard key={ticket.id} ticket={ticket} />}
            />
         </div>
      </div>
   );
};
