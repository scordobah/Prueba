import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/icons-material';
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
    logo: {
        width: '100%',
        height: '100%'
    }
}));

export default function Header() {
    const classes = useStyle();
    return (
        <Box sx={{ width: '100%' }}>
            <AppBar position='static' sx={{ width: '100%', padding: '10px' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            disabled
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant='h3' sx={{ flexGrow: 1, textAlign: 'left' }}>
                            Menú
                        </Typography>
                    </Box>
                    <Box sx={{ width: '140px', height: '55px' }}>
                        <img 
                            src='/images/btg-pactual.png'
                            alt='Logo BTG Pactual'
                            className={classes.logo}
                        />   
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}