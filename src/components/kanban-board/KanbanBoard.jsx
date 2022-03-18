import { Fragment } from 'react';

import { DesktopBoard } from '../desktop-board/DesktopBoard';
import { MobileBoard } from '../mobile-board/MobileBoard';
import { useIsMobile } from '../../hooks/useIsMobile';

export const columns = [
   { name: 'todo', title: 'To do' },
   { name: 'inprogress', title: 'In progress' },
   { name: 'done', title: 'Done' },
];

export const KanbanBoard = () => {
   const isMobile = useIsMobile();

   return (
      <Fragment>
         {isMobile && <MobileBoard columns={columns} />}
         {!isMobile && <DesktopBoard columns={columns} />}
      </Fragment>
   );
};
