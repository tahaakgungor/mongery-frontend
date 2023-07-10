// types
import { PricingPlan, Invoice } from './types';

const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        name: 'Basic',
        price: 19,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
    {
        id: 1,
        name: 'Premium',
        price: 29,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: true,
    },
    {
        id: 2,
        name: 'Developer',
        price: 39,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
    {
        id: 3,
        name: 'Business',
        price: 49,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
];

const pricingPlans2: PricingPlan[] = [
    {
        id: 1,
        name: 'Basic',
        price: 19,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
    {
        id: 1,
        name: 'Premium',
        price: 29,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: true,
    },
    {
        id: 2,
        name: 'Developer',
        price: 39,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
];

const invoiceDetails: Invoice = {
    invoice_id: '2023-06-300001',
    customer: 'Cem Akgüngör',
    notes: 'Thanks a lot because you keep purchasing our products. Our company promises to provide high quality products for you as well as outstanding customer service for every transaction.',
    order_date: ' 30 Haziran 2023',
    order_status: 'Sipariş Alındı',
    order_id: '#3218',
    address: {
        owner: 'Mongery Yazılım',
        line_1: 'Mahfesığmaz Mah. 79048 SK. No: 4/2 Daire: 3 Çukurova/ADANA',
        city: 'Adana',
        state: 'Türkiye',
        zip: 999,
        phone: '+90 (536) 960 30 53',
    },
    items: [
        {
            id: 1,
            name: 'Tel',
            description: '2x5',
            quantity: 20,
            unit_cost: '$500',
            total: '$10000',
        },
        {
            id: 2,
            name: 'Çivi',
            description: 'Çivi',
            quantity: 50,
            unit_cost: '$50',
            total: '$2500',
        },
        {
            id: 3,
            name: 'Jiletli Tel',
            description: 'Jiletli Tel Kalın',
            quantity: 15,
            unit_cost: '$500',
            total: '$7500',
        },
       
    ],
    sub_total: 20000.0,
    discount: 10,
    vat: 20.0,
    total: 21600.0,
};

export { pricingPlans, pricingPlans2, invoiceDetails };
