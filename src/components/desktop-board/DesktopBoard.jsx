import { useEffect, useState, useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

import { BoardColumn } from '../board-column/BoardColumn';
import { UpdatedTicketContext } from '../kanban-board/KanbanBoard';
import { TicketCard } from '../ticket';
import { DroppableContainer, DraggableItem } from '../dnd';
import { updateTicket } from '../../apis/tickets';
import './desktop-board.scss';

const onDragEnd = (result, columns, setColumns, onStatusChange) => {
   if (!result.destination) return;
   const { source, destination } = result;

   if (source.droppableId !== destination.droppableId) {
      // drag to another container
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
         ...columns,
         [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
         },
         [destination.droppableId]: {
            ...destColumn,
            items: destItems,
         },
      });

      onStatusChange(removed.id, destColumn.name);
   } else {
      // drag inside the same container
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
         ...columns,
         [source.droppableId]: {
            ...column,
            items: copiedItems,
         },
      });
   }
};

export const DesktopBoard = ({ columns, tickets }) => {
   const [containers, setContainers] = useState();

   const { updateTicket: changeTicket } = useContext(UpdatedTicketContext);

   const onStatusChange = async (ticketId, status) => {
      const newTicket = { status };
      const updatedTicket = await updateTicket(ticketId, newTicket);

      updatedTicket && changeTicket(updatedTicket);
   };

   useEffect(() => {
      const items = tickets.map((ticket) => ({
         ...ticket,
         id: ticket.id.toString(),
      }));

      const containers = {};

      columns.forEach((column) => {
         const columnItems = items.filter((item) => item.status === column.name);

         containers[uuid()] = {
            ...column,
            items: columnItems,
         };
      });

      setContainers(containers);
   }, [columns, tickets]);

   return (
      <div className='container-fluid container-tickets pb-5'>
         <div className='row'>
            <DragDropContext onDragEnd={(result) => onDragEnd(result, containers, setContainers, onStatusChange)}>
               {containers &&
                  Object.entries(containers).map(([containerId, container]) => {
                     return (
                        <section className='col' key={containerId}>
                           <DroppableContainer id={containerId}>
                              <div className='text-center py-1'>
                                 <h6 className='d-inline py-2 px-2'>{container.title.toUpperCase()}</h6>
                                 <span className='container-length fw-lighter'>{container.items.length}</span>
                              </div>
                              <BoardColumn
                                 tickets={container.items}
                                 selectedColumnName={container.name}
                                 columnTitle={container.title}
                                 renderTicket={(ticket, index) => (
                                    <DraggableItem id={ticket.id} index={index} key={ticket.id}>
                                       <TicketCard key={ticket.id} ticket={ticket} />
                                    </DraggableItem>
                                 )}
                              />
                           </DroppableContainer>
                        </section>
                     );
                  })}
            </DragDropContext>
         </div>
      </div>
   );
};
