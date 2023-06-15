import React from 'react';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import ItemCard from "../ItemCard";
import Typography from '@mui/joy/Typography';

import {itemInterface} from "../../models/item";
import {itemsList} from "../../resources/itemsList";
import {getPromotedItems} from "../../utils";

const Home = () => {
    return (
        <Box sx={{flex: 1}}>
            <Stack alignItems="center" sx={{marginTop: '1em'}} spacing={3}>
                <Typography level="h1" fontSize="x" sx={{mb: 0.5}}> Топ продукти</Typography>
                {getPromotedItems(itemsList as itemInterface[]).map(el => (
                    <ItemCard key={el.id} item={el}/>
                ))}
            </Stack>
        </Box>
    );
};

export default Home;