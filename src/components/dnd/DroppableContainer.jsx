import { Droppable } from 'react-beautiful-dnd';

export const DroppableContainer = ({ id, children }) => {
    return (
       <Droppable key={id} droppableId={id}>
          {(provided, snapshot) => {
             return (
                <div className='rounded-3'
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                   style={{
                      background: snapshot.isDraggingOver ? '#add8e6' : '#dbdbdb',
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