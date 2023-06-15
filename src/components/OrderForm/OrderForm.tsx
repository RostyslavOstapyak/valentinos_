import React, {FC} from 'react';
import {Modal} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {OrderFormProps} from "./OrderFormProps";
import {Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useForm} from 'react-hook-form';

const OrderForm: FC<OrderFormProps> = ({isModal, onClose}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const handleClose = () => {
        reset();
        onClose()
    }

    return (
        <Modal open={isModal}
               onClose={handleClose}
               arai-labelledby={'order-modal-title'}
               aria-describedby={'modal-description'}
        >
            <Stack sx={{alignItems: 'center', justifyContent: 'center', marginTop: '20%'}}>
                <Box sx={{
                    background: 'white',
                    borderRadius: '12px',
                    maxWidth: '80%',
                    width: '100%',
                    padding: '1em 2em',
                    boxShadow: '0 0 10px 1px'
                }}>
                    <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: '1em'}}>
                        Ведіть данні для замовлення
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack direction={'column'} spacing={3}>

                            <TextField
                                label="Ф.І.О"
                                {...register('name', {required: true})}
                                error={!!errors.name}
                                helperText={errors.name ? 'Name is required' : ''}
                                sx={{background: 'white'}}
                            />
                            <TextField
                                label="Email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                                error={!!errors.email}
                                helperText={errors.email ? 'Invalid email' : ''}
                                sx={{background: 'white'}}
                            />
                            <TextField
                                label="Номер телефону"
                                {...register('phone', {
                                    required: true,
                                    pattern: /^(\+380)\s?\d{2}\s?\d{3}\s?\d{4}$/i,
                                })}
                                defaultValue="+380"
                                error={!!errors.phone}
                                helperText={errors.phone ? 'Invalid phone number' : ''}
                                sx={{background: 'white'}}
                            />
                            <TextField
                                label="Delivery Address"
                                {...register('address', {required: true})}
                                error={!!errors.address}
                                helperText={errors.address ? 'Address is required' : ''}
                                sx={{background: 'white'}}
                            />
                            <TextField
                                label="Additional Notes"
                                {...register('notes')}
                                sx={{background: 'white'}}
                            />
                            <Button type="submit" variant="contained" color="primary" sx={{margin: '1em'}}>
                                Замовити
                            </Button>
                        </Stack>
                    </form>

                </Box>

            </Stack>

        </Modal>
    );
};

export default OrderForm;