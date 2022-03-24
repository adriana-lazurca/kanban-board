import { ErrorMessage, useField } from 'formik';

export const Input = ({ label, ...props }) => {
   const [field, meta] = useField(props);

   return (
      <div className='mb-3 opacity-75'>
         <label htmlFor={field.name}>{label}</label>
         <input
            className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
            {...field}
            {...props}
            autoComplete='off'
         />
         <ErrorMessage component='div' name={field.name} className='error' />
      </div>
   );
};
