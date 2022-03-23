import { Draggable } from 'react-beautiful-dnd';

import { TicketCard } from '../ticket-card/TicketCard';
import './board-column.scss';

export const BoardColumn = ({ tickets }) => {
   return (
      <div className='container-fluid'>
         <div className='row'>
            <div className='board-column col mx-2 py-2'>
               {tickets.map((ticket, index) => (
                  <DraggableItem id={ticket.id} index={index} key={ticket.id}>
                     <TicketCard key={ticket.id} ticket={ticket} />
                  </DraggableItem>
               ))}
            </div>
         </div>
      </div>
   );
};

const DraggableItem = ({ id, index, children }) => {
   return (
      <Draggable draggableId={id} index={index} key={id}>
         {(provided, snapshot) => {
            return (
               <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={{
                     ...provided.draggableProps.style,
                     backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                     userSelect: 'none',
                  }}
               >
                  {children}
               </div>
            );
         }}
      </Draggable>
   );
};
