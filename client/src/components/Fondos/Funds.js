import React from 'react'
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import NewFund from './NewFund';
import Suscripction from './Suscription';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cancellation from './Cancellation';
import Reports from './Reports';
import LowerAmount from './Error';
import InsufficientBalance from './ErrorBalance';

const useStyle = makeStyles((theme) => ({
    sideBar: {
        width: '250px',
        height: '100vh',
    },
    buttonGroup: {
        width: '100%',
        backgroundColor: theme.palette.secondary,
        padding: 4
    },
    button: {
        backgroundColor: theme.palette.primary,
    },
    header: {
        textAlign: 'left',
        marginLeft: '30px'
    }
}));

export default function Fondos(props) {
    const classes = useStyle();

    let paths = ["/fondos/newfund","/fondos/suscripcion","/fondos/cancelacion", "/fondos/reportes"]

    return (
        
        <Grid className={props.classes.content} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid className={classes.header}>
                <Typography variant='h2'>
                    Fondos
                </Typography>
            </Grid>            
            <ButtonGroup
            orientation="horizontal"
            aria-label="horizontal outlined button group"
            variant="contained"
            className={classes.buttonGroup}
            color= 'secondary'
            sx={{ justifyContent: 'center', marginTop: '5px' }}
            >
                <Button 
                    key="inicio" 
                    sx={{ height: '50px' }} 
                    variant="contained" 
                    color="primary"                    
                    href={`${paths[0]}`}
                >
                    Registrar Fondo
                </Button>
                <Button 
                    key="fondos" 
                    sx={{ height: '50px' }} 
                    variant="contained" 
                    color="primary"
                    href={`${paths[1]}`}
                    >
                        Suscripción
                </Button>
                <Button 
                    key="transacciones" 
                    sx={{ height: '50px' }} 
                    variant="contained" 
                    color="primary"
                    href={`${paths[2]}`}
                    >
                        Cancelación
                </Button>
                <Button 
                    key="ajustes" 
                    sx={{ height: '50px' }} 
                    variant="contained" 
                    color="primary"
                    href={`${paths[3]}`}
                    >
                        Reporte de Fondos
                </Button>
            </ButtonGroup>
            <Box sx={{ margin: '30px 0 20px 0'}}>
                <Routes>
                    <Route path='newfund' element={<NewFund classes={classes} />} />
                    <Route path='suscripcion' element={<Suscripction classes={classes} />} />
                    <Route path='cancelacion' element={<Cancellation classes={classes} />} />
                    <Route path='reportes' element={<Reports classes={classes} />} />
                    <Route path='errorLower' element={<LowerAmount />} />
                    <Route path='errorBalance' element={<InsufficientBalance />} />
                </Routes>
            </Box>
        </Grid>
    
    )
}