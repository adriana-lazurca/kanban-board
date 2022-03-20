import { TicketCard } from '../ticket-card/TicketCard';
import './board-column.scss';

export const BoardColumn = ({ tickets }) => {
   return (
      <div className='container-fluid'>
         <div className='row'>
            <div className='board-column col mx-2 py-2'>
               {tickets.map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
               ))}
            </div>
         </div>
      </div>
   );
};
