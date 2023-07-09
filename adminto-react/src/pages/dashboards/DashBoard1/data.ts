// types
import { Message, ProjectDetail } from './types';

// images
import avatar1 from '../../../assets/images/users/user-1.jpg';
import avatar2 from '../../../assets/images/users/user-2.jpg';
import avatar3 from '../../../assets/images/users/user-3.jpg';
import avatar4 from '../../../assets/images/users/user-4.jpg';
import avatar5 from '../../../assets/images/users/user-5.jpg';

const messages: Message[] = [
    {
        id: 1,
        avatar: avatar1,
        sender: 'Cem Akgüngör',
        text: "500 Ton 2x5 Tel",
        time: '13:40 PM',
    },
    {
        id: 2,
        avatar: avatar2,
        sender: 'Taha Akgüngör',
        text: "120 Ton Çivili Tel",
        time: '13:34 PM',
    },
    {
        id: 3,
        avatar: avatar3,
        sender: 'Hazar Taylan',
        text: '250 Ton Jiletli Tel',
        time: '13:17 PM',
    },
  
];

const projectDetails: ProjectDetail[] = [
    {
        id: 1,
        name: 'Cem Akgüngör',
        startDate: '01/01/2017',
        dueDate: '26/04/2017',
        status: 'Yolda',
        variant: 'danger',
        clients: 'Mongery',
    },
    {
        id: 2,
        name: 'Adminto Frontend v1',
        startDate: '01/01/2017',
        dueDate: '26/04/2017',
        status: 'Released',
        variant: 'success',
        clients: 'Mongery',
    },
    {
        id: 3,
        name: 'Adminto Admin v1.1',
        startDate: '01/05/2017',
        dueDate: '10/05/2017',
        status: 'Pending',
        variant: 'pink',
        clients: 'Mongery',
    },
    {
        id: 4,
        name: 'Adminto Frontend v1.1',
        startDate: '01/01/2017',
        dueDate: '31/05/2017',
        status: 'Work in Progress',
        variant: 'purple',
        clients: 'Adminto admin',
    },
    {
        id: 5,
        name: 'Adminto Admin v1.3',
        startDate: '01/01/2017',
        dueDate: '31/05/2017',
        status: 'Coming soon',
        variant: 'warning',
        clients: 'Coderthemes',
    },
    {
        id: 6,
        name: 'Adminto Admin v1.3',
        startDate: '01/01/2017',
        dueDate: '31/05/2017',
        status: 'Coming soon',
        variant: 'blue',
        clients: 'Adminto admin',
    },
];

export { messages, projectDetails };
