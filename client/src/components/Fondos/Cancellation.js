import React, { useEffect, useState } from 'react'
import { getClients, getSuscriptionsByName } from '../../services/services'
import { Box, Grid, Typography } from '@mui/material'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles'
import SuscriptionRecords from './SuscriptionRecords';

const useStyle = makeStyles((theme) => ({
    header: {
        textAlign: 'left',
        marginLeft: '30px',
        
    },
    inputfield: {
        width: '38%',
    },
    paper: {
        margin: '15px 0 15px 0',
        padding: '10px'
    }
}));

export default function Cancellation(props) {
    const classes = useStyle();

    const [clients, setClients] = useState([])
    const [suscriptions, setSuscriptions] = useState([])

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

        const loadSuscriptionsByName = async () => {
            try {
                const response = await getSuscriptionsByName(clientSelected)
    
                if (response.status === 200) {
                    setSuscriptions(response.data)            
                }  
            }
            catch (e) {
                console.log(e);
            }
        }
        loadClients();
        loadSuscriptionsByName();
    })

    const [clientSelected, setClientSelected] = useState('');
    const handleChangeClient = e => setClientSelected(e.target.value);

    return (
        <Grid className={props.classes.boxes} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid className={classes.header}>
                <Typography variant='h4'>
                    Cancelar fondo
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
                    {suscriptions.map(item => {
                        return (
                           <SuscriptionRecords item={item} client={clientSelected}/>
                        )
                    })}
                </Grid>
            </Box>
        </Grid>
    )
}