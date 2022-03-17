import { useNavigate } from 'react-router-dom';

export const TicketCard = () => {
   let navigate = useNavigate();

   const ticket = {
      id: 1,
   };

   const handleClick = () => {
      navigate(`/tickets/${ticket.id}`);
   };

   return (
      <div className='bg-light p-2 my-2'>
         {/* <button onClick={handleClick}>Ticket</button> */}
         Ticket {ticket.id}
         <div>Description</div>
      </div>
   );
};
