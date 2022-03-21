import { useCallback, useRef } from 'react';
import { useEffect } from 'react';
import { Modal } from 'bootstrap/dist/js/bootstrap.min.js';

export const KanbanModal = ({ show, children, onCancel, showFooter = true }) => {
   const modalElementRef = useRef();
   const modalRef = useRef();

   const showModal = useCallback(() => {
      modalRef.current?.show();
   }, [modalRef]);

   const hideModal = useCallback(() => {
      modalRef.current?.hide();
   }, [modalRef]);

   useEffect(() => {
      show ? showModal() : hideModal();
   }, [show, showModal, hideModal]);

   useEffect(() => {
      modalRef.current = new Modal(modalElementRef.current, {
         backdrop: 'static',
         keyboard: false,
      });
   }, []);

   return (
      <div
         className='modal fade'
         id='exampleModal'
         tabIndex='-1'
         ref={modalElementRef}
         aria-labelledby='exampleModalLabel'
         aria-hidden='true'
      >
         <div className='modal-dialog'>
            <div className='modal-content'>
               <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                     Modal title
                  </h5>
                  <button
                     type='button'
                     className='btn-close'
                     data-bs-dismiss='modal'
                     aria-label='Close'
                     onClick={() => onCancel()}
                  ></button>
               </div>

               <div className='modal-body'>{children}</div>

               {showFooter && (
                  <div className='modal-footer'>
                     <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                        onClick={() => onCancel()}
                     >
                        Cancel
                     </button>
                     <button type='button' className='btn btn-primary'>
                        Save
                     </button>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};
