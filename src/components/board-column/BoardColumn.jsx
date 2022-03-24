import './board-column.scss';

export const BoardColumn = ({ tickets, renderTicket }) => {
   return (
      <div className='container-fluid'>
         <div className='row'>
            <div className='board-column col mx-2 py-2'>
               {tickets.map((ticket, index) => renderTicket(ticket, index))}
            </div>
         </div>
      </div>
   );
};
