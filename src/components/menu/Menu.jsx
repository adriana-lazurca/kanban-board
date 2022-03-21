import { Link } from 'react-router-dom';

import './menu.scss';

export const Menu = () => {
   return (
      <nav className='menu'>
         <ul>
            <li>
               <Link to='/'>
                  <h6 className='text-white'>Kanban Board</h6>
               </Link>
            </li>
         </ul>
      </nav>
   );
};
