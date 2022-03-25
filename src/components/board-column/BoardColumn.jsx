import './board-column.scss';

export const BoardColumn = ({ tickets, renderTicket }) => {
   return (
      <div className='container-fluid rounded-3 px-1'>
         <div className='row'>
            <div className='board-column col mx-2 pb-2'>
               {tickets.map((ticket, index) => renderTicket(ticket, index))}
            </div>
         </div>
      </div>
   );
};
