import { Droppable } from 'react-beautiful-dnd';

export const DroppableContainer = ({ id, children }) => {
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