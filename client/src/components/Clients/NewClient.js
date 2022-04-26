import { Box, Grid, Typography, Button } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { saveClients } from '../../services/services';
import { useNavigate } from 'react-router';


const useStyle = makeStyles((theme) => ({
    header: {
        textAlign: 'left',
        marginLeft: '30px'
    }
}));

export default function NewClient(props) {
    const classes = useStyle();

    const [clientValue, setClientValue] = useState({
        clientName: '',
        clientType: '',
        documentId: '',
        email: '',
        balance: 500000
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setClientValue({ ...clientValue, [name]: value })
    }

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(clientValue)
        saveClients({ ...clientValue })
        navigate('/')
    }

    return (      
        <Grid className={props.classes.content} sx={{ display: 'flex', flexDirection: 'column' }}> 
            <Grid className={classes.header}>
                <Typography variant='h4'>
                    Registrar Clientes
                </Typography>
            </Grid>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'left', 
                marginTop: '30px'
            }}>
                <FormControl sx={{ margin: '0 0 15px 30px'}}>
                    <InputLabel htmlFor="component-outlined" color='secondary'>Nombre</InputLabel>
                    <FilledInput 
                        id="component-filled-name" 
                        name='clientName'
                        value={clientValue.clientName} 
                        onChange={handleChange}
                        color='secondary'
                        size='small'
                        sx={{width: '500px'}} />
                </FormControl>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left'}}>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 200, margin: '0 0 15px 30px' }}>
                        <InputLabel id="demo-simple-select-filled-label" color='secondary'>Tipo Documento</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        name='clientType'
                        value={clientValue.clientType}
                        onChange={handleChange}
                        color='secondary'
                        size='small'
                        >
                            <MenuItem value={"CC"}>CC</MenuItem>
                            <MenuItem value={"NIT"}>NIT</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ margin: '0 0 15px 30px'}}>
                        <InputLabel htmlFor="component-outlined" color='secondary'>Documento</InputLabel>
                        <FilledInput 
                            id="component-filled-id"
                            type='number'
                            name='documentId'
                            value={clientValue.documentId} 
                            onChange={handleChange}
                            color='secondary'
                            size='small'
                            sx={{width: '270px'}} />
                    </FormControl>
                </Grid>                
                <FormControl sx={{ margin: '0 0 15px 30px'}}>
                    <InputLabel htmlFor="component-outlined" color='secondary'>Correo</InputLabel>
                    <FilledInput 
                        id="component-filled-mail"
                        type='email'
                        name='email' 
                        value={clientValue.email} 
                        onChange={handleChange}
                        color='secondary'
                        size='small'
                        sx={{width: '500px'}} />
                </FormControl>
                <Button 
                    key="guardar" 
                    sx={{ width: '150px', height: '40px', margin: '10px 0 0 30px'}} 
                    variant="contained" 
                    color="secondary"
                    onClick={handleSubmit}
                    >
                        Guardar
                </Button>
            </Box>    
        </Grid>
    )
}