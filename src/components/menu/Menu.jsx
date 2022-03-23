import { Link } from 'react-router-dom';
import { BsKanban } from 'react-icons/bs';

import './menu.scss';

export const Menu = () => {
   return (
      <nav className='menu py-1'>
         <ul className='m-auto p-2'>
            <li>
               <Link to='/'>
               <BsKanban className='mx-2'/>
                  <h6 className='text-white d-inline'>Kanban Board</h6>
               </Link>
            </li>
         </ul>
      </nav>
   );
};
