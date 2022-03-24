export const TicketDetail = ({ title, children }) => (
   <p className='row align-items-center fs-6 fw-lighter p-1'>
      <span className='col-6 col-sm-5 col-md-3 col-lg-2 fw-lighter'>{title}:</span>
      <span className='col-6 col-sm-5 col-md-4 col-lg-3 fw-bold'>{children}</span>
   </p>
);
