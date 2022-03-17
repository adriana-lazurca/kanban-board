import { Link } from 'react-router-dom';

import './menu.scss';

export const Menu = () => {
   return (
      <div>
         <ul>
            <li>
               <Link to='/'>
                  <h6>Home</h6>
               </Link>
            </li>
         </ul>
      </div>
   );
};
