// types
import { Message, ProjectDetail } from './types';

// images
import avatar1 from '../../../assets/images/users/user-1.jpg';
import avatar2 from '../../../assets/images/users/user-2.jpg';
import avatar3 from '../../../assets/images/users/user-3.jpg';
import avatar4 from '../../../assets/images/users/user-4.jpg';
import avatar5 from '../../../assets/images/users/user-5.jpg';

const messages: Message[] = [
    //a
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
        name: 'Fatma Özlem',
        startDate: '01/01/2023',
        dueDate: '26/04/2023',
        status: 'Yolda',
        variant: 'danger',
        clients: 'Cem Akgüngör',
    },
    {
        id: 2,
        name: 'Hacı Mehmet',
        startDate: '01/01/2023',
        dueDate: '26/04/2023',
        status: 'Teslim Edildi',
        variant: 'success',
        clients: 'Cem Akgüngör',
    },
    {
        id: 3,
        name: 'Mükerrem Zeynep',
        startDate: '01/05/2023',
        dueDate: '10/05/2023',
        status: 'Bekliyor',
        variant: 'pink',
        clients: 'Hazar Taylan',
    },
    {
        id: 4,
        name: 'Bestami Ağırağaç',
        startDate: '01/01/2023',
        dueDate: '31/05/2023',
        status: 'İşleme Alındı',
        variant: 'purple',
        clients: 'Hazar Taylan',
    },
    {
        id: 5,
        name: 'Şennur Ağnar',
        startDate: '01/01/2023',
        dueDate: '31/05/2023',
        status: 'Yükleme Yapılıyor',
        variant: 'warning',
        clients: 'Taha Akgüngör',
    },
    {
        id: 6,
        name: 'Tutkum Ahmadı Asl',
        startDate: '01/01/2023',
        dueDate: '31/05/2023',
        status: 'Teslim Edildi',
        variant: 'success',
        clients: 'Taha Akgüngör',
    },
];

export { messages, projectDetails };
