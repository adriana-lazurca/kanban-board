import './navigation-columns.scss'

export const NavigationColumns = ({ columns, selectedColumnName, onSelect }) => {
   return (
      <ul className='nav justify-content-center mb-2'>
         {columns.map((column, index) => (
            <li className='nav-item' key={`column-${column.name}-${index}`}>
               <div
                  key={`column-${column.name}-${index}`}
                  className={`nav-link ${column.name === selectedColumnName ? 'text-dark' : 'text-black-50'}`}
                  aria-current='page'
                  onClick={() => {
                     onSelect(column.name);
                  }}
               >
                  {column.title}
               </div>
            </li>
         ))}
      </ul>
   );
};
