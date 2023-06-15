import React, {FC} from 'react';
import {ItemCardProps} from "./ItemCardProps";
import {CardActions, CardMedia, Stack} from "@mui/material";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import {Card, CardContent} from "@mui/joy";
import {handleAddItemToCart} from "../../utils";

const ItemCard: FC<ItemCardProps> = ({item}) => {
    return (
        <Card sx={{position: 'relevant', maxWidth: '70%'}}>
            {item.isPromoted && <Stack sx={{position: 'absolute', top: 0, right: 0, transform: 'rotate(45deg)'}}/>}
            <CardMedia
                component='img'
                height="140"
                image={item.image}
                alt={item.name}
            />
            <CardContent sx={{marginBottom: '1em'}}>
                <Typography level="h3" component="h2" sx={{textTransform: 'capitalize'}}>{item.name}</Typography>
                {item.description && (<Typography>{item.description}</Typography>)}
                <Typography sx={{alignSelf: 'flex-end', marginTop: '1em'}} level="h5">Ціна {item.price}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={() => handleAddItemToCart(item)}>
                    <AddIcon/> Add to cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default ItemCard;