import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../layout/Layout';
import { KanbanBoard } from '../kanban-board/KanbanBoard';
import { TicketDetails } from '../ticket-details/TicketDetails';

export const Navigation = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path='/'
               element={
                  <Layout>
                     <KanbanBoard />
                  </Layout>
               }
            />
            <Route
               path='/tickets/:ticketId'
               element={
                  <Layout>
                     <TicketDetails />
                  </Layout>
               }
            />
         </Routes>
      </BrowserRouter>
   );
};
