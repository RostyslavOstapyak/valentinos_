import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import ItemCard from "../../components/ItemCard";
import {itemsList} from "../../resources/itemsList";
import CatalogFilter from "../../components/CatalogFilter";
import {Stack} from "@mui/material";
import {getMaxPrice} from "../../components/CatalogFilter/utils";

const CatalogPage = () => {
    const [filteredList, setFilteredList] = useState(itemsList);
    const [range, setRange] = React.useState<number[]>([20, 220]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const res = itemsList.filter(item =>
            item.price >= range[0] &&
            item.price <= range[1]
        )
        if (search) {
            res.filter(item => item.name.toUpperCase().includes(search.toUpperCase()))
        }
        setFilteredList(res)
    }, [range, search])

    return (
        <Box sx={{flex: 1}}>
            <CatalogFilter itemsList={itemsList} maxPrice={getMaxPrice(itemsList)} range={range} setRange={setRange}
                           search={search} setSearch={setSearch}/>
            <Stack spacing={3} alignItems="center">
                {filteredList.map(item => (<ItemCard key={item.id} item={item}/>))}
            </Stack>
        </Box>
    );
};

export default CatalogPage;