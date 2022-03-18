export const NavigationColumns = ({ columns, selectedName, onSelect }) => {
   return (
      <ul class='nav justify-content-center mb-2'>
         {columns.map((column) => (
            <li class='nav-item'>
               <a
                  class={`nav-link ${column.name === selectedName ? 'text-dark' : 'text-black-50'}`}
                  aria-current='page'
                  href='#'
                  onClick={() => {
                     onSelect(column.name);
                  }}
               >
                  {column.title}
               </a>
            </li>
         ))}
      </ul>
   );
};
