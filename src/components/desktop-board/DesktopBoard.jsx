import { BoardColumn } from '../board-column/BoardColumn';

export const DesktopBoard = ({ columns }) => {
   return (
      <div div className='container-fluid'>
         <div className='row'>
            {columns.map((column) => (
               <div className='col'>
                  <h6 className='text-center'>{column.title}</h6>
                  <BoardColumn selectedName={column.name} columnTitle={column.title} />
               </div>
            ))}
         </div>
      </div>
   );
};
