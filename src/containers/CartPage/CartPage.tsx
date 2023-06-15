import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Avatar, List, ListItem} from "@mui/joy";
import {ListItemAvatar, ListItemText, Stack} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import {itemInterface} from "../../models/item";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import OrderForm from "../../components/OrderForm";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";

const CartPage = () => {
    const navigate = useNavigate();
    const [itemsList, setItemsList] = useState([] as itemInterface[])
    const [isForm, setIsForm] = useState(false);

    const handleRedirectTo = (path: string) => {
        navigate(path)
    };

    const handleOpenForm = () => {
        setIsForm(true)
    }

    const handleRemoveItem = (item: itemInterface) => {
        const updatedList = itemsList.filter(listItem => listItem.id !== item.id)

        setItemsList(updatedList)
        localStorage.removeItem('items')
        localStorage.setItem('items', JSON.stringify(updatedList))
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items') || '')
        if (items) {
            setItemsList(items)
        }
    }, []);

    return (
        <Box sx={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Stack sx={{boxShadow: '0 0 5px 1px', padding: '2em', borderRadius: '12px'}}>
                <List>
                    {itemsList.map(item => (
                        <ListItem key={item.id}>
                            <Tooltip title={item.description}>
                                <Stack direction={'row'}>
                                    <ListItemAvatar>
                                        <Avatar alt={item.name} src={item.image}/>
                                    </ListItemAvatar>

                                    <ListItemText primary={item.name}
                                                  secondary={item.description?.substring(0, 150) + '...'}/>

                                    <Tooltip title={'Видалити'}>
                                        <IconButton onClick={() => handleRemoveItem(item)}>
                                            <DeleteForeverIcon sx={{fill: '#1976d2'}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            </Tooltip>
                        </ListItem>
                    ))}
                </List>
                <Stack spacing={3}>
                    <Button variant={'contained'} onClick={handleOpenForm}>Оформити замовлення</Button>

                    <Button variant={'outlined'} onClick={() => handleRedirectTo('/catalog')}>Продовжити
                        покупки</Button>
                </Stack>
                <OrderForm isModal={isForm} onClose={() => setIsForm(false)}/>
            </Stack>
        </Box>
    );
};

export default CartPage;