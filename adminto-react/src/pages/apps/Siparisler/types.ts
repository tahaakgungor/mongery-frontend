import { UserData } from "../../../redux/actions";
import { MusterilerData } from "../../../redux/musteriler/actions";

export type SiparislerList = {
    id: number;
    image: string;
    title: string;
    category: string;
    state: string;
    shortDesc: string;
    price: number;
    quantity: number;
    variant: string;
    urun: string;
};

