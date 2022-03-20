import { useState } from 'react';

import { BoardColumn } from '../board-column/BoardColumn';
import { NavigationColumns } from '../navigation-columns/NavigationColumns';

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

         <BoardColumn tickets={columnTickets} selectedColumnName={selectedColumnName} />
      </div>
   );
};
