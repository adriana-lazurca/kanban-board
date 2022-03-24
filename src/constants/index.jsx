import { RiBugLine } from 'react-icons/ri';
import { MdOutlineTask } from 'react-icons/md';
import { FcHighPriority } from 'react-icons/fc';
import { FcLowPriority } from 'react-icons/fc';

export const columns = [
   { name: 'todo', title: 'To do' },
   { name: 'inprogress', title: 'In progress' },
   { name: 'done', title: 'Done' },
];

export const types = [
   {
      name: 'task',
      title: 'Task',
      icon: <MdOutlineTask />,
   },
   {
      name: 'bug',
      title: 'Bug',
      icon: <RiBugLine />,
   },
];

export const priorities = [
   {
      name: 'high',
      title: 'High',
      icon: <FcHighPriority />,
   },
   {
      name: 'low',
      title: 'Low',
      icon: <FcLowPriority />,
   },
];
