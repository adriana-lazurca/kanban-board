import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { BoardColumn } from '../board-column/BoardColumn';

export const DesktopBoard = ({ columns, tickets }) => {
   const [containers, setContainers] = useState();

   const onStatusChange = (status) => {
      
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
      <div className='container-fluid pb-5'>
         <div className='row'>
            <DragDropContext onDragEnd={(result) => onDragEnd(result, containers, setContainers, onStatusChange)}>
               {containers &&
                  Object.entries(containers).map(([containerId, container]) => {
                     return (
                        <div className='col' key={containerId}>
                           <h6 className='text-center'>{container.title}</h6>

                           <DroppableContainer id={containerId}>
                              <BoardColumn
                                 tickets={container.items}
                                 selectedColumnName={container.name}
                                 columnTitle={container.title}
                              />
                           </DroppableContainer>
                        </div>
                     );
                  })}
            </DragDropContext>
         </div>
      </div>
   );
};

const DroppableContainer = ({ id, children }) => {
   return (
      <Droppable key={id} droppableId={id}>
         {(provided, snapshot) => {
            return (
               <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                     background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                  }}
               >
                  {children}
                  {provided.placeholder}
               </div>
            );
         }}
      </Droppable>
   );
};

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
      onStatusChange(destColumn.name);
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
