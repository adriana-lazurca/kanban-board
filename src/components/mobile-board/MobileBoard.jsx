import { useState } from 'react';

import { BoardColumn } from '../board-column/BoardColumn';
import { NavigationColumns } from '../navigation-columns/NavigationColumns';

export const MobileBoard = ({ columns }) => {
   const [selectedName, setSelectedName] = useState('todo');

      return (
      <div>
         <NavigationColumns columns={columns} selectedName={selectedName} onSelect={setSelectedName} />

         <BoardColumn selectedName={selectedName}/>
      </div>
   );
};
