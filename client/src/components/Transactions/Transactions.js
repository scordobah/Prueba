import { Box, Grid, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { getClients, getTransactionsByName   } from '../../services/services'
import TransactionsRecords from './TransactionsRecords';


const useStyle = makeStyles((theme) => ({
    header: {
        textAlign: 'left',
        marginLeft: '30px'
    }
}));


export default function NewClient(props) {
    const classes = useStyle();

    const [clients, setClients] = useState([])
    const [transactions, setTransactions] = useState([])

    useEffect( () => { 
        const loadClients = async () => {
            try {
                const response = await getClients()
    
                if (response.status === 200) {
                    setClients(response.data)            
                }  
            }
            catch (e) {
                console.log(e);
            }
        }

        const loadTransactionsByName = async () => {
            try {
                const response = await getTransactionsByName(clientSelected)
    
                if (response.status === 200) {
                    setTransactions(response.data)            
                }  
            }
            catch (e) {
                console.log(e);
            }
        }

        loadTransactionsByName();
        loadClients();
        
    })

    const [clientSelected, setClientSelected] = useState('');
    const handleChangeClient = e => setClientSelected(e.target.value);

    return (      
        <Grid className={props.classes.content} sx={{ display: 'flex', flexDirection: 'column' }}> 
            <Grid className={classes.header}>
                <Typography variant='h4'>
                    Transacciones
                </Typography>
            </Grid>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'left', 
                marginTop: '30px'
            }}>
                <FormControl variant="filled" sx={{ m: 1, minWidth: '47%', marginLeft: '30px' }}>
                    <InputLabel id="demo-simple-select-filled-label" color='secondary'>Cliente</InputLabel>
                    <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            name='fundType'
                            value={clientSelected}
                            onChange={handleChangeClient}
                            color='secondary'
                            size='small'
                            >
                                {clients.map(item => {
                                return (<MenuItem value={item.clientName}>{item.clientName}</MenuItem>);
                                })}
                    </Select>
                </FormControl>
                <Grid>                    
                    {transactions.map(item => {
                        return (
                           <TransactionsRecords item={item} />
                        )
                    })}
                </Grid>
            </Box>    
        </Grid>
    )
}