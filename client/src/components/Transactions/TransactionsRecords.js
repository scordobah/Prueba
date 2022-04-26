import React from 'react'
import { Typography, Paper, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '15px 0 15px 0',
        padding: '10px'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    textFields: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 10px 10px 10px'
    }
}));

export default function TransactionsRecords(props) {
    const classes = useStyle();    
    
    return(
        <Paper elevation={3} className={classes.paper}>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Id de transacción: </Typography>
                    <Typography variant='h6'>{props.item._id}</Typography>
                </Grid>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Fecha: </Typography>
                    <Typography variant='h6'>{props.item.operationDate}</Typography>
                </Grid>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Operación: </Typography>
                    <Typography variant='h6'>{props.item.operationType}</Typography>
                </Grid>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Fondo: </Typography>
                    <Typography variant='h6'>{props.item.fundName}</Typography>
                </Grid>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Tipo de fondo: </Typography>
                    <Typography variant='h6'>{props.item.fundType}</Typography>
                </Grid>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Monto: </Typography>
                    <Typography variant='h6'>{props.item.fundCost}</Typography>
                </Grid>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Saldo disponible: </Typography>
                    <Typography variant='h6'>{props.item.newBalance}</Typography>
                </Grid>
    </Paper>
    )
}