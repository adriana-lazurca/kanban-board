import { useState, useRef, useContext } from 'react';
import { BsPlusLg } from 'react-icons/bs';

import { TicketForm } from '../ticket';
import { KanbanModal } from '../modal/KanbanModal';
import { UpdatedTicketContext } from '../kanban-board/KanbanBoard';
import { createTicket } from '../../apis/tickets';

export const AddTicketButton = () => {
   const [showModal, setShowModal] = useState();
   const resetFormRef = useRef();

   const { addTicket } = useContext(UpdatedTicketContext);

   const openModal = () => {
      setShowModal(true);
   };

   const closeModal = () => {
      setShowModal(false);
      resetFormRef.current();
   };

   const createNewTicket = async (ticket) => {
      const newTicket = await createTicket(ticket);
      addTicket(newTicket);
      closeModal();
   };

   const resetWith = (resetForm) => {
      resetFormRef.current = resetForm;
   };

   return (
      <>
         <button className='border rounded-3 border-white p-2 m-3' onClick={openModal}>
            <BsPlusLg className='m-2' />
            Add ticket
         </button>

         <KanbanModal show={showModal} showFooter={false} onCancel={closeModal}>
            <TicketForm onCancel={closeModal} onSave={createNewTicket} resetWith={resetWith} />
         </KanbanModal>
      </>
   );
};
