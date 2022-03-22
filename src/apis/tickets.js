import axios from 'axios';

export const getTickets = async () => {
   const url = 'http://localhost:3001/tickets';
   try {
      const { data } = await axios.get(url);
      return data;
   } catch (error) {
      console.error('No tickets found!', error);
   }
};

export const getTicket = async (ticketId) => {
   const url = `http://localhost:3001/tickets/${ticketId}`;
   try {
      const { data } = await axios.get(url);
      return data;
   } catch (error) {
      console.error('No ticket found!', error);
   }
};

export const createTicket = async (ticket) => {
   const url = 'http://localhost:3001/tickets';
   try {
      const { data } = await axios.post(url, ticket);
      return data;
   } catch (error) {
      console.error("Can't create ticket!", error);
   }
};

export const updateTicket = async (ticketId, updtatedTicket) => {
   const url = `http://localhost:3001/tickets/${ticketId}`;
   try {
      const { data } = await axios.patch(url, updtatedTicket);
      return data;
   } catch (error) {
      console.error("Can't update ticket!", error);
   }
};
