import React, { useEffect, useState } from 'react'
import { Typography, Button, Paper, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CancelIcon from '@mui/icons-material/Cancel';
import { deleteSuscriptionsByName, getClientsByName, saveTransaction, updateBalanceByName } from '../../services/services';

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
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gridRow: 'auto auto',
        width: '70%',
        marginLeft: '2%'
    },
    textFields: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 10px 10px 10px'
    }
}));

export default function SuscriptionRecords(props) {
    const classes = useStyle();

    const [saldoCliente, setSaldoCliente] = useState([]);

    useEffect( () => {
        const loadClientsByName = async () => {
            try {
                const response = await getClientsByName(props.client)
    
                if (response.status === 200) {
                    setSaldoCliente(response.data)            
                }  
            }
            catch (e) {
                console.log(e);
            }
        }
        loadClientsByName();
    })
    
    const handleSubmit = () => {
        var n1 = parseInt(saldoCliente["balance"]);
        var n2 = parseInt(props.item.fundCost);
        var suma = n1+n2;

        const cancellationValue = {
            operationDate: new Date(),
            clientName: props.client,
            fundName: props.item.fundName,
            operationType: "Cancelación",
            fundCost: n2,
            newBalance : suma
        }
        updateBalanceByName(props.client, {
            clientName: props.client,
            balance: suma
        })
        saveTransaction({ ...cancellationValue })
        deleteSuscriptionsByName(props.item._id)

    }
    
    return(
        <Paper elevation={3} className={classes.paper}>
            <Grid class={classes.container}>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Id de suscripción: </Typography>
                    <Typography variant='h6'>{props.item._id}</Typography>
                </Grid>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Nombre del fondo: </Typography>
                    <Typography variant='h6'>{props.item.fundName}</Typography>
                </Grid>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Tipo de Fondo: </Typography>
                    <Typography variant='h6'>{props.item.fundType}</Typography>
                </Grid>
                <Grid class={classes.textFields}>
                    <Typography variant='h5'>Valor de vinculación: </Typography>
                    <Typography variant='h6'>{props.item.fundCost}</Typography>
                </Grid>
            </Grid>            
            <Button 
                variant="outlined" 
                color='secondary'
                startIcon={<CancelIcon />}
                sx={{ height: '50px', width: '15%', marginRight: '5%' }}
                onClick={handleSubmit}>
                    Cancelar
            </Button>
    </Paper>
    )
}