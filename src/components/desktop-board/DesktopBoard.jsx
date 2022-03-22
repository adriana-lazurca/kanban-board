import { BoardColumn } from '../board-column/BoardColumn';

export const DesktopBoard = ({ columns, tickets }) => {
   return (
      <div className='container-fluid'>
         <div className='row'>
            {columns.map((column, index) => {
               const columnTickets = tickets.filter((ticket) => ticket.status === column.name);

               return (
                  <div className='col' key={`column-${column.name}-${index}`}>
                     <h6 className='text-center'>{column.title}</h6>
                     <BoardColumn tickets={columnTickets} selectedColumnName={column.name} columnTitle={column.title} />
                  </div>
               );
            })}
         </div>
      </div>
   );
};
