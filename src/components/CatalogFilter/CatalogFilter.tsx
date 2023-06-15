import React, {FC, useState} from 'react';
import {Stack} from "@mui/material";
import Slider, {sliderClasses} from '@mui/joy/Slider';
import {valueText} from "./utils";
import {CatalogFilterProps} from "./CatalogFilterProps";
import {currencySymbol} from "../../resources/constants";
import Typography from "@mui/joy/Typography";
import {Autocomplete, FormControl, FormLabel} from "@mui/joy";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const CatalogFilter: FC<CatalogFilterProps> = ({itemsList, maxPrice, range, setRange, search, setSearch}) => {
    const [isShown, setIsShown] = useState(false);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setRange(newValue as number[]);
    };

    return (
        <Stack sx={{
            minHeight: isShown ? '15em' : '3em',
            background: '#dbdbdb',
            flexDirection: {sm: 'row', ms: 'column'},
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 2,
            transition: 'min-height 0.5s linear'
        }}>
            {isShown && (<>
                <Stack sx={{padding: '1em', minWidth: '50%'}}>
                    <Typography>Ціновий діапазон</Typography>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={range}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueText}
                        min={1}
                        max={maxPrice}
                        marks={[{value: 1, label: `1 ${currencySymbol}`}, {
                            value: maxPrice,
                            label: `${maxPrice} ${currencySymbol}`
                        }]}
                        sx={{
                            // Need both of the selectors to make it works on the server-side and client-side
                            [`& [style*="left:0%"], & [style*="left: 0%"]`]: {
                                [`&.${sliderClasses.markLabel}`]: {
                                    transform: 'none',
                                },
                                [`& .${sliderClasses.valueLabel}`]: {
                                    left: 'calc(var(--Slider-thumbSize) / 2)',
                                    borderBottomLeftRadius: 0,
                                    '&::before': {
                                        left: 0,
                                        transform: 'translateY(100%)',
                                        borderLeftColor: 'currentColor',
                                    },
                                },
                            },
                            [`& [style*="left:100%"], & [style*="left: 100%"]`]: {
                                [`&.${sliderClasses.markLabel}`]: {
                                    transform: 'translateX(-100%)',
                                },
                                [`& .${sliderClasses.valueLabel}`]: {
                                    right: 'calc(var(--Slider-thumbSize) / 2)',
                                    borderBottomRightRadius: 0,
                                    '&::before': {
                                        left: 'initial',
                                        right: 0,
                                        transform: 'translateY(100%)',
                                        borderRightColor: 'currentColor',
                                    },
                                },
                            },
                        }}
                    />
                </Stack>
                <Stack sx={{padding: '1em'}}>
                    <FormControl id="free-solo-2-demo">
                        <FormLabel>Пошук по назві</FormLabel>
                        <Autocomplete
                            placeholder="Назва товару"
                            type="search"
                            freeSolo
                            disableClearable
                            value={search}
                            onChange={(event, newValue) => {
                                setSearch(newValue);
                            }}
                            options={itemsList?.map((option) => option.name) || []}
                        />
                    </FormControl>
                </Stack>
            </>)}
            <Stack sx={{alignSelf: 'center'}}>
                {isShown ? <KeyboardDoubleArrowUpIcon sx={{fontSize: '3em', fill: '#1976d2'}}
                                                      onClick={() => setIsShown(!isShown)}/>
                    : <KeyboardDoubleArrowDownIcon sx={{fontSize: '3em', fill: '#1976d2'}}
                                                   onClick={() => setIsShown(!isShown)}/>
                }

            </Stack>
        </Stack>
    );
};

export default CatalogFilter;