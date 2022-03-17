import { Menu } from '../menu/Menu';

export const Layout = ({ children }) => {
   return (
      <div className='container header-color mb-5'>
         <div className='row header'>
            <div className='col'>
               <Menu />
            </div>
         </div>
         <div>{children}</div>
      </div>
   );
};
