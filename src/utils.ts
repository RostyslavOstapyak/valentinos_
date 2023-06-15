import {itemInterface} from "./models/item";

export const getPromotedItems = (list: itemInterface[]) => list.filter(el => el.isPromoted)

export const handleAddItemToCart = (item: itemInterface) => {
    const storedItemsJSON = localStorage.getItem('items');
    let items = [];

    if (storedItemsJSON) {
        // Parse the stored items JSON string into an array
        items = JSON.parse(storedItemsJSON);
    }

    // Add the new item to the array
    items.push(item);

    // Convert the array back to JSON string
    const updatedItemsJSON = JSON.stringify(items);

    // Save the updated array back to local storage
    localStorage.setItem('items', updatedItemsJSON);
}

