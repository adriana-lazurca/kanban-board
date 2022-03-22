import axios from 'axios';

export const getTickets = async () => {
   try {
      const { data } = await axios.get('http://localhost:3001/tickets');
      return data;
   } catch (error) {
      console.error('No tickets found!', error);
   }
};

export const getTicket = async (userId) => {
   try {
      const { data } = await axios.get(`http://localhost:3001/users/?id=${userId}`);
      return data;
   } catch (error) {
      console.error('No tickets found!', error);
   }
};

export const createTicket = async (ticket) => {
   const url = 'http://localhost:3001/tickets';

   try {
      const { data } = await axios.post(url, ticket);
      return data;
   } catch (error) {
      console.error('There was an error!', error);
   }
};