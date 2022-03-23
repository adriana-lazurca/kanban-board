import { TicketForm } from '../ticket-form/TicketForm';
import { KanbanModal } from '../modal/KanbanModal';

import { useState, useRef } from 'react';
import { BsPlusLg } from 'react-icons/bs';

export const CreateTicketButton = () => {
   const [showModal, setShowModal] = useState();
   const resetFormRef = useRef();

   const openModal = () => {
      setShowModal(true);
   };

   const closeModal = () => {
      setShowModal(false);
      resetFormRef.current();
   };

   const resetWith = (resetForm) => {
      resetFormRef.current = resetForm;
   };

   return (
      <>
         <button className='border border-white p-2 m-3' onClick={openModal}>
            <BsPlusLg className='m-2'/>
             Add ticket
         </button>

         <KanbanModal show={showModal} showFooter={false} onCancel={closeModal}>
            <TicketForm onCancel={closeModal} onSave={closeModal} resetWith={resetWith} />
         </KanbanModal>
      </>
   );
};
