import {itemInterface} from "../../models/item";
import {currencySymbol} from "../../resources/constants";

export const getMaxPrice = (itemsList: itemInterface[]) => {
    let res = itemsList[0].price
    for (const item of itemsList) {
        if (item.price > res) {
            res = item.price
        }
    }
    return res
}
export const valueText = (value: number) => `${value} ${currencySymbol}`;
