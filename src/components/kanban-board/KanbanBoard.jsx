import { Fragment } from 'react';
import { useEffect, useState } from 'react';

import { DesktopBoard } from '../desktop-board/DesktopBoard';
import { MobileBoard } from '../mobile-board/MobileBoard';
import { useIsMobile } from '../../hooks/useIsMobile';
import { getTickets } from '../../apis/tickets';

export const columns = [
   { name: 'todo', title: 'To do' },
   { name: 'inprogress', title: 'In progress' },
   { name: 'done', title: 'Done' },
];

export const KanbanBoard = () => {
   const [tickets, setTickets] = useState([]);

   useEffect(() => {
      const fetchTickets = async () => {
         const data = await getTickets();
         setTickets(data);
      };
      fetchTickets();
   }, []);

   const isMobile = useIsMobile();

   return (
      <Fragment>
         {isMobile && <MobileBoard columns={columns} tickets={tickets} />}
         {!isMobile && <DesktopBoard columns={columns} tickets={tickets} />}
      </Fragment>
   );
};
