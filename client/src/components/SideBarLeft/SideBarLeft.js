import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    sideBar: {
        width: '250px',
        height: '100vh',
    },
    button: {
        width: '100%',
        backgroundColor: theme.palette.secondary,
    }
}))



export default function SideBarLeft(props) {
    const classes = useStyles();

    let paths = ["/","/clientes","/fondos", "/transacciones"]

    return(
        <Box className={classes.sideBar} sx={{  }}>
            <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
            variant="outlined"
            className={classes.button}
            color='secondary'
            sx={{ justifyContent: 'space-around', marginTop: '0px', height: '250px'}}
            >
                <Button 
                    key="inicio" 
                    sx={{ height: '50px' }} 
                    variant="contained" 
                    color="secondary"
                    href={paths[0]}>
                        Inicio
                </Button>
                <Button 
                    key="clientes" 
                    sx={{ height: '50px' }} 
                    variant="contained" 
                    color="secondary"
                    href={paths[1]}>
                        Clientes
                </Button>
                <Button 
                    key="fondos" 
                    sx={{ height: '50px' }} 
                    variant="contained" 
                    color="secondary"
                    href={paths[2]}>
                        Fondos
                </Button>
                <Button 
                    key="transacciones" 
                    sx={{ height: '50px' }} 
                    variant="contained" 
                    color="secondary"
                    href={paths[3]}>
                        Transacciones
                </Button>
            </ButtonGroup>
        </Box>
    )
}