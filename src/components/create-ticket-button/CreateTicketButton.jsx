import { TicketForm } from '../ticket-form/TicketForm';
import { KanbanModal } from '../modal/KanbanModal';

import { useState } from 'react';

export const CreateTicketButton = ({ columns }) => {
   const [showModal, setShowModal] = useState();

   const openModal = () => {
      setShowModal(true);
   };

   const closeModal = () => {
      setShowModal(false);
   };

   return (
      <>
         <button onClick={openModal}>+ Create ticket</button>
         <KanbanModal show={showModal} showFooter={false} onCancel={closeModal}>
            <TicketForm onCancel={closeModal} onSave={closeModal} />
         </KanbanModal>
      </>
   );
};
