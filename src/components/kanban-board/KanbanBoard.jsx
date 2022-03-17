import { Fragment, useState } from 'react';

import { BoardColumn } from '../board-column/BoardColumn';

const columns = [
   { name: 'todo', title: 'To do' },
   { name: 'inprogress', title: 'In progress' },
   { name: 'done', title: 'Done' },
];

const NavigationBoard = ({ columns, selectedName, onSelect }) => {
   return (
      <ul class='nav justify-content-center mb-2'>
         {columns.map((column) => (
            <li class='nav-item'>
               <a
                  class={`nav-link ${column.name === selectedName ? 'text-dark' : 'text-black-50'}`}
                  aria-current='page'
                  href='#'
                  onClick={() => {
                     onSelect(column.name);
                  }}
               >
                  {column.title}
               </a>
            </li>
         ))}
      </ul>
   );
};

export const KanbanBoard = () => {
   const isMobile = true;
   
   return (
      <Fragment>
         {isMobile && <MobileKanbanBoard />}
         {!isMobile && <DesktopKanbanBoard />}
      </Fragment>
   );
};

const MobileKanbanBoard = () => {
   const [selectedName, setSelectedName] = useState('todo');

   const column = columns.find((column) => column.name === selectedName);

   return (
      <div>
         <NavigationBoard columns={columns} selectedName={selectedName} onSelect={setSelectedName} />

         <BoardColumn title={column.title} />
      </div>
   );
};

const DesktopKanbanBoard = () => {
   const [selectedName, setSelectedName] = useState('todo');

   const column = columns.find((column) => column.name === selectedName);

   return (
      <div>
         <NavigationBoard columns={columns} selectedName={selectedName} onSelect={setSelectedName} />

         <div>{column.title}</div>
         <BoardColumn title={column.title} />
      </div>
   );
};
