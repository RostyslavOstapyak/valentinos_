import React from 'react';
import Typography from "@mui/joy/Typography";

const Footer = () => {
    return (
        <footer style={{
            display: 'flex',
            justifyContent: 'center',
            height: '2em',
            padding: '0.5em',
            background: '#1976d2',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 10px rgba(0,0,0,0.1)',
            marginTop: '2em',
        }}>
            <Typography variant="plain">
                &copy; {new Date().getFullYear()} My Website. All rights reserved.
            </Typography>
        </footer>
    );
};

export default Footer;