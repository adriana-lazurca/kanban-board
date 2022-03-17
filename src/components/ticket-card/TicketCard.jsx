import { useNavigate } from 'react-router-dom';

export const TicketCard = () => {
   let navigate = useNavigate();

   const ticket = {
      id: 1,
   };

   const handleClick = () => {
      navigate(`/tickets/${ticket.id}`);
   };

   return <button onClick={handleClick}>Ticket</button>;
};
