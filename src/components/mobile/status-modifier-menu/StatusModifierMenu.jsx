import './status-modifier-menu.scss'

const nextStatuses = {
   todo: {
      inprogress: 'In progress',
      done: 'Done',
   },
   inprogress: {
      todo: 'To do',
      done: 'Done',
   },
   done: {
      inprogress: 'In progress',
      todo: 'To do',
   },
};

export const StatusModifierMenu = ({ status, onSelect }) => {
   return (
      <ul className='dropdown-menu' aria-labelledby='btnGroupDrop1'>
         {Object.entries(nextStatuses[status]).map(([nextStatus, label]) => (
            <li key={nextStatus}>
               <div className='dropdown-item' onClick={() => onSelect(nextStatus)}>
                  {label}
               </div>
            </li>
         ))}
      </ul>
   );
};
