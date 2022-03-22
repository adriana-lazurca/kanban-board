import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Select } from '../select/Select';
import { Input } from '../input/Input';
import { createTicket } from '../../apis/tickets';
import React from 'react';

const types = [
   {
      name: 'task',
      title: 'Task',
   },
   {
      name: 'bug',
      title: 'Bug',
   },
];

const priorities = [
   {
      name: 'high',
      title: 'High',
   },
   {
      name: 'low',
      title: 'Low',
   },
];

const initialValues = {
   title: '',
   description: '',
   type: 'task',
   priority: 'low',
};

const validationSchema = Yup.object({
   title: Yup.string()
      .required('Please enter a title')
      .max(30, 'The title should have maximum 30 characters')
      .min(3, 'The title should have minimum 3 characters'),
   description: Yup.string().max(100, 'The description should have maximum 100 characters'),
});

export const TicketForm = ({ onCancel, onSave, resetWith }) => {
   const handleSubmit = async (values) => {
      const ticket = { ...values, status: 'todo' };
      await createTicket(ticket);
      onSave();
   };

   return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
         {({ resetForm }) => {
            resetWith(resetForm);
            return (
               <Form className='fw-bold'>
                  <Input label='Title' name='title' type='text' />
                  <Input label='Description' name='description' type='text' />
                  <Select label='Type' name='type' options={types} />
                  <Select label='Priority' name='priority' options={priorities} />

                  <div className='modal-footer'>
                     <button type='submit' className='btn btn-primary'>
                        Save
                     </button>
                     <button
                        type='button'
                        className='btn btn-secondary'
                        onClick={() => {
                           onCancel();
                        }}
                     >
                        Cancel
                     </button>
                  </div>
               </Form>
            );
         }}
      </Formik>
   );
};
