import { Field } from 'formik';

export const Select = ({ options, label, name }) => {
   return (
      <div className='mb-3 mx-1'>
         <label className='me-3 opacity-75' htmlFor={name}>{label}</label>
         <Field as='select' id={name} name={name}>
            {options.map((option) => {
               return (
                  <option key={option.name} value={option.name}>
                     {option.title}
                  </option>
               );
            })}
         </Field>
      </div>
   );
};
