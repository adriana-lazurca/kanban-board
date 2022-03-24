import { Draggable } from 'react-beautiful-dnd';

export const DraggableItem = ({ id, index, children }) => {
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
                      backgroundColor: snapshot.isDragging ? '#032830' : '#087990',
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
 