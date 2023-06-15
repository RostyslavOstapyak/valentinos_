import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/joy/Typography";
import {Link} from "@mui/joy";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {Stack} from "@mui/material";

const ContactsPage = () => {
    return (
        <Box sx={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Stack sx={{direction: 'column'}}>

                <Typography level="h4" gutterBottom>
                    Наші контакти
                </Typography>
                <Link href="#" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '1em',
                    textDecoration: 'none',
                }}>
                    <FacebookIcon sx={{marginRight: '1em'}}/>
                    Facebook
                </Link>
                <Link href="#"
                      sx={{
                          display: 'flex',
                          alignItems: 'center',
                          margin: '1em',
                          textDecoration: 'none',
                      }}
                >
                    <InstagramIcon sx={{marginRight: '1em'}}/>
                    Instagram
                </Link>
                <Link href="#"
                      sx={{
                          display: 'flex',
                          alignItems: 'center',
                          margin: '1em',
                          textDecoration: 'none',
                      }}
                >
                    <TelegramIcon sx={{marginRight: '1em'}}/>
                    Telegram
                </Link>

                <Link href="#"
                      sx={{
                          display: 'flex',
                          alignItems: 'center',
                          margin: '1em',
                          textDecoration: 'none',
                      }}
                >
                    <YouTubeIcon sx={{marginRight: '1em'}}/>
                    YouTube
                </Link>
                <Link href="tel:+380687652986" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '1em',
                    textDecoration: 'none',
                }}>
                    <LocalPhoneIcon sx={{marginRight: '1em'}}/>
                    +380 68 765 29 86
                </Link>
            </Stack>
        </Box>
    );
};

export default ContactsPage;