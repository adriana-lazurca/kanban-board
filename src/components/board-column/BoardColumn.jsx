import { TicketCard } from '../ticket-card/TicketCard';
import './board-column.scss';

export const BoardColumn = () => {
   return (
      <div className='container'>
         <div className='row'>
            <div className='board-column col mx-2 py-2'>
               <TicketCard />
               <TicketCard />
               <TicketCard />
            </div>
         </div>
      </div>
   );
};
