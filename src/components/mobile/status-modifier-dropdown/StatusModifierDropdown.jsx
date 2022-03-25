import { StatusModifierMenu } from '../status-modifier-menu/StatusModifierMenu';
import './status-modifier-dropdown.scss'

export const StatusModifierDropdown = ({ status, onSelect }) => {
   return (
      <div className='status-container'>
         <div className='btn-group' role='group' aria-label='Button group with nested dropdown'>
            <div className='btn-group' role='group'>
               <button
                  id='btnGroupDrop1'
                  type='button'
                  className='btn btn-primary dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
               >
                  Move to
               </button>

               <StatusModifierMenu status={status} onSelect={onSelect} />
            </div>
         </div>
      </div>
   );
};
