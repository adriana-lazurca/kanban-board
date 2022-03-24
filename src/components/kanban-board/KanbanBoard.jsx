import React, { useEffect, useState } from 'react';

import { DesktopBoard } from '../desktop-board/DesktopBoard';
import { MobileBoard } from '../mobile-board/MobileBoard';
import { CreateTicketButton } from '../create-ticket-button/CreateTicketButton';
import { useIsMobile } from '../../hooks/useIsMobile';
import { getTickets } from '../../apis/tickets';
import { columns } from '../../constants';

export const UpdatedTicketContext = React.createContext();

export const KanbanBoard = () => {
   const [tickets, setTickets] = useState([]);

   const updateTicket = (newTicket) => {
      const newTickets = [...tickets];

      const ticketIndex = newTickets.findIndex((ticket) => ticket.id === newTicket.id);

      if (ticketIndex !== -1) {
         newTickets[ticketIndex] = newTicket;
         setTickets(newTickets);
      }
   };

   const addTicket = (ticket) => {
      const newTickets = [...tickets, ticket];
      setTickets(newTickets);
   };

   useEffect(() => {
      const fetchTickets = async () => {
         const data = await getTickets();
         setTickets(data);
      };
      fetchTickets();
   }, []);

   const isMobile = useIsMobile();

   return (
      <UpdatedTicketContext.Provider value={{ updateTicket, addTicket }}>
         <CreateTicketButton />

         {isMobile && <MobileBoard columns={columns} tickets={tickets} />}
         {!isMobile && <DesktopBoard columns={columns} tickets={tickets} />}
      </UpdatedTicketContext.Provider>
   );
};
