import axios from 'axios';

export const getTickets = async () => {
   try {
      const { data } = await axios.get('http://localhost:3001/tickets');
      return data;
   } catch (error) {
      console.error('No tickets found!', error);
   }
};
