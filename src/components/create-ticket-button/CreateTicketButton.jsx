import { TicketForm } from '../ticket-form/TicketForm';
import { KanbanModal } from '../modal/KanbanModal';

import { useState, useRef } from 'react';

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
         <button onClick={openModal}>+ Create ticket</button>

         <KanbanModal show={showModal} showFooter={false} onCancel={closeModal}>
            <TicketForm onCancel={closeModal} onSave={closeModal} resetWith={resetWith} />
         </KanbanModal>
      </>
   );
};
