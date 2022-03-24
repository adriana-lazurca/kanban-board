import { Menu } from '../menu/Menu';

export const Layout = ({ children }) => {
   return (
      <div className='container-fluid header-color mb-5'>
         <header className='row header'>
            <nav className='col'>
               <Menu />
            </nav>
         </header>
         <main>{children}</main>
      </div>
   );
};
