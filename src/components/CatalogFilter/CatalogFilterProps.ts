import {itemInterface} from "../../models/item";

export interface CatalogFilterProps {
    itemsList?: itemInterface[];
    maxPrice: number;
    range: number[];
    setRange: any;
    search: string;
    setSearch: (item: string) => void;
}