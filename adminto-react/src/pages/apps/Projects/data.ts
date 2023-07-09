// types
import { ProjectsList } from './types';

// images
import user1 from '../../../assets/images/users/user-1.jpg';
import user2 from '../../../assets/images/users/user-2.jpg';
import user3 from '../../../assets/images/users/user-3.jpg';
import user4 from '../../../assets/images/users/user-4.jpg';
import user5 from '../../../assets/images/users/user-5.jpg';
import user6 from '../../../assets/images/users/user-6.jpg';
import user7 from '../../../assets/images/users/user-7.jpg';
import user8 from '../../../assets/images/users/user-8.jpg';
import user9 from '../../../assets/images/users/user-9.jpg';
import user10 from '../../../assets/images/users/user-10.jpg';

export const projects: ProjectsList[] = [
    {
        id: 1,
        image: user1,
        title: 'Tel',
        category: 'Demir-Celik',
        state: 'Bitti',
        shortDesc:
            '2.60 TEL',
        price: 1200,
        quantity: 0,
        variant: 'danger',
    },
    {
        id: 2,
        image: user2,
        title: 'App Design and Develop',
        category: 'ANDROID',
        state: 'Mevcut',
        shortDesc: 'New common language will be more simple and regular than the existing European languages...',
        price: 1200,
        quantity: 100,
        variant: 'success',
    },
    {
        id: 3,
        image: user3,
        title: 'Landing page Design',
        category: 'WEB DESIGN',
        state: 'Mevcut',
        shortDesc:
            'It will be as simple as occidental in fact it will be to an english person it will seem like simplified English...',
        price: 1200,
        quantity: 68,
        variant: 'success',
    },
    {
        id: 4,
        image: user4,
        title: 'App Design and Develop',
        category: 'ANDROID',
        state: 'Mevcut',
        shortDesc:
            'Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators...',
        price: 1200,
        quantity: 45,
        variant: 'warning',
    },
    {
        id: 5,
        image: user5,
        title: 'Landing page Design',
        category: 'WEB DESIGN',
        state: 'Bitti',
        shortDesc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium deleniti...',
        price: 1200,
        quantity: 0,
        variant: 'danger',
    },
    {
        id: 6,
        image: user6,
        title: 'New Admin Design',
        category: 'WEB DESIGN',
        state: 'Mevcut',
        shortDesc:
            'Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary....',
        price: 1200,
        quantity: 40,
        variant: 'warning',
    },
];
