import { useParams } from 'react-router-dom';

export const TicketDetails = () => {
   const { ticketId } = useParams();

   return <div>Ticket with number {ticketId}</div>;
};
