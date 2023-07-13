export type ProjectsList = {
    id: number;
    image: string;
    title: string;
    category: string;
    state: string;
    shortDesc: string;
    price: number;
    quantity: number;
    variant: string;
    customInput?: CustomInput;
};

export type CustomInput = {
    name: string;
    placeholder: string;
    [key: string]: string;
}

export type SepetData = {
    id: number;
    image: string;
    title: string;
    category: string;
    state: string;
    shortDesc: string;
    price: number;
    quantity: number;
    variant: string;
    customInput?: CustomInput;
};