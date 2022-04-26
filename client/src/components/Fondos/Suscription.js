import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getClients, getClientsByName, getFunds, getFundsByName, getSuscriptionsByName, saveSuscription, saveTransaction, updateBalanceByName } from '../../services/services'
import { Box, Grid, Typography, Button } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles'


const useStyle = makeStyles((theme) => ({
    header: {
        textAlign: 'left',
        marginLeft: '30px',
        
    },
    inputfield: {
        width: '20%',
        margin: '15px 15px 15px 0'
    }
}));


export default function Suscripction(props) {
    const classes = useStyle();

    const [funds, setFunds] = useState([])
    const [clients, setClients] = useState([])
    const [saldoCliente, setSaldoCliente] = useState([]);
    const [montoFondo, setMontoFondo] = useState([]);
    const [monto, setMonto] = useState(null);
    const clientFunds = []
    
    useEffect( () => {
        const loadFunds = async () => {
        try {
            const response = await getFunds()

            if (response.status === 200) {
                setFunds(response.data)            
            }  
        }
        catch (e) {
            console.log(e);
        }
        }

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

        const loadClientsByName = async () => {
            try {
                const response = await getClientsByName(clientSelected)
    
                if (response.status === 200) {
                    setSaldoCliente(response.data)            
                }  
            }
            catch (e) {
                console.log(e);
            }
        }

        const loadFundsByName = async () => {
            try {
                const response = await getFundsByName(fundSelected)
    
                if (response.status === 200) {
                    setMontoFondo(response.data)            
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
                    for(const obj of response.data)
                    {
                        clientFunds.push(obj.fundName);                    
                    }
                    console.log("clientFunds", clientFunds)            
                }  
            }
            catch (e) {
                console.log(e);
            }
        }



        loadFunds();
        loadClients();
        loadClientsByName();
        loadFundsByName();
        loadSuscriptionsByName();
    })

    const [insufficient, setInsufficient] = useState(false)
    const [lowerAmount, setLowerAmount] = useState(false)

    const [clientSelected, setClientSelected] = useState('');
    const handleChangeClient = e => setClientSelected(e.target.value);

    const [fundSelected, setFundSelected] = useState('');
    const handleChangeFund = e => {
        setFundSelected(e.target.value);
        setInsufficient(false);
    }

    const handleChange = (event) => {
        setMonto(event.target.value)
        
    }

    const navigate = useNavigate();
                    
    const handleSubmit = () => {
        var n1 = parseInt(saldoCliente["balance"]);
        var n2 = parseInt(monto)
        var n3 = parseInt(montoFondo["fundMoney"]);

        var diferencia = n1-n2;

        if ( diferencia < 0)
        {
            setInsufficient(!insufficient);
            setClientSelected('');
            setFundSelected('');
            navigate('/fondos/errorBalance')
        } 
        else if ( n2 < n3 ) {
            setLowerAmount(!lowerAmount)
            navigate('/fondos/errorLower')
        } 
         else {
            const suscriptionValue = {
                operationDate: new Date(),
                clientName: clientSelected,
                fundName: fundSelected,
                fundType: montoFondo["fundType"],
                operationType: "Suscripción",
                fundCost: n2,
                newBalance : diferencia
            }
            saveSuscription({
                clientName: clientSelected,
                fundName: fundSelected,
                fundType: montoFondo["fundType"],
                fundCost: n2
            })
            saveTransaction({ ...suscriptionValue })
            updateBalanceByName(clientSelected, {
                clientName: clientSelected,
                balance: diferencia
            })
            navigate('/fondos')
        }
        
    }

    return(
        <Grid className={props.classes.boxes} sx={{ display: 'flex', flexDirection: 'column' }}> 
            <Grid className={classes.header}>
                <Typography variant='h4'>
                    Suscribirse a un Fondo
                </Typography>
            </Grid>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'left', 
                marginTop: '30px'
            }}>
            <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '0 30px 15px 0' }}>
                <FormControl variant="filled" sx={{ m: 1, minWidth: '70%', marginLeft: '30px' }}>
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
                <TextField
                        id="balance"
                        label="Saldo Actual"
                        defaultValue="$"
                        color='secondary'
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                        value={saldoCliente["balance"]}
                        size='small'
                        className={classes.inputfield}
                />                
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '0 30px 15px 25px' }}>
            <FormControl variant="filled" sx={{ m: 1, minWidth: '47%' }}>
                <InputLabel id="demo-simple-select-filled-label" color='secondary'>Seleccione un fondo</InputLabel>
                <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        name='fundType'
                        value={fundSelected}
                        onChange={handleChangeFund}
                        color='secondary'
                        size='small'
                        >
                            {funds.map(item => {
                            return (<MenuItem value={item.fundName}>{item.fundName}</MenuItem>);
                            })}
                </Select>
            </FormControl>
            <FormControl sx={{ margin: '0 0 0 30px', width: '50%' }}>
                <InputLabel htmlFor="component-outlined" color='secondary'>Monto de vinculación</InputLabel>
                    <FilledInput 
                        id="component-filled-name" 
                        name='monto'
                        value={monto} 
                        onChange={handleChange}
                        color='secondary'
                        size='small'
                        sx={{width: '100%', marginRight: '10px' }} />
                </FormControl>
            </Grid> 
            <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left', margin: '0 0 15px 30px' }}>  
                <TextField
                        id="fundType"
                        label="Tipo de fondo"
                        color='secondary'
                        defaultValue="---"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                        value={montoFondo["fundType"]}
                        sx={{margin: '15px 15px 15px 0px'}}
                        size='small'
                        className={classes.inputfield}
                />
                <TextField
                        id="monto"
                        label="Monto mínimo"
                        defaultValue="$"
                        color='secondary'
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                        value={montoFondo["fundMoney"]}
                        sx={{margin: '15px 15px 15px 0px'}}
                        size='small'
                        className={classes.inputfield}
                />                           
                
            </Grid>
            <Button 
                    key="guardar" 
                    sx={{ width: '15%', height: '45px', margin: '0 40px 0 30px'}} 
                    variant="contained" 
                    color="secondary"
                    onClick={handleSubmit}
                    >
                        Suscribirse
                </Button>                 
            </Box>
            <Grid>
                {insufficient ? (
                    <Typography>
                        Su saldo es insuficiente para acceder al fondo {`${fundSelected}`}
                    </Typography>
                ) : ''}
                
            </Grid>    
        </Grid>
    )
}
