# Kanban Board Project

The project is a minimal Kanban board on which you can create, view and move tickets between columns

### Technologies:

-  **ReactJS**
-  **React Router** for the navigation
-  **React Icons** for creating icons
-  **React Beautiful Dnd** to create drag and drop interactions
-  **Formik** and **Yup** for form creation and validation
-  **Json-server** for mocking the back-end
-  **Axios** for for calling back-end APIs
-  **Bootstrap** for styling
-  **Concurrently** for running front-end and back-end in parallel

### State management

To persist ticket state through a page refresh, I used REF and Context.

### Run project

```
npm start
```

### APIs

-  **Get tickets**<br />
   GET http://localhost:3001/tickets

-  **Get ticket**<br />
   GET http://localhost:3001/tickets/<ticket_id>

-  **Create ticket**<br />
   POST http://localhost:3001/tickets<br />
   Body:
   ```
   {
       "title": 'Ticket 1',
       "description": 'Description for ticket 1',
       "type": 'task',
       "priority": 'low',
   }
   ```

-  **Delete ticket**<br />
   DELETE http://localhost:3001/tickets/<ticket_id>
