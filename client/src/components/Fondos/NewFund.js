import { Box, Grid, Typography, Button } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { saveFunds } from '../../services/services';

const useStyle = makeStyles((theme) => ({
    header: {
        textAlign: 'left',
        marginLeft: '30px'
    }
}));

export default function NewFund(props) {
    const classes = useStyle();

    const [fundValue, setfundValue] = useState({
        fundName: '',
        fundType: '',
        fundMoney: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setfundValue({ ...fundValue, [name]: value })
    }

    const handleSubmit = () => {
        console.log(fundValue)
        saveFunds({ ...fundValue })
    }
    
    
    return (
        <Grid className={props.classes.boxes} sx={{ display: 'flex', flexDirection: 'column' }}> 
            <Grid className={classes.header}>
                <Typography variant='h4'>
                    Registrar un Fondo
                </Typography>
            </Grid>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'left', 
                marginTop: '30px'
            }}>
                <FormControl sx={{ margin: '0 0 15px 30px'}}>
                    <InputLabel htmlFor="component-outlined" color='secondary'>Nombre del Fondo</InputLabel>
                    <FilledInput 
                        id="component-filled-name" 
                        name='fundName'
                        value={fundValue.fundName} 
                        onChange={handleChange}
                        color='secondary'
                        size='small'
                        sx={{width: '500px'}} />
                </FormControl>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left'}}>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 200, margin: '0 0 15px 30px' }}>
                        <InputLabel id="demo-simple-select-filled-label" color='secondary'>Tipo</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        name='fundType'
                        value={fundValue.fundType}
                        onChange={handleChange}
                        color='secondary'
                        size='small'
                        >
                            <MenuItem value={"FPV"}>FPV</MenuItem>
                            <MenuItem value={"FIC"}>FIC</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ margin: '0 0 15px 30px'}}>
                        <InputLabel htmlFor="component-outlined" color='secondary'>Monto mínimo de vinculación</InputLabel>
                        <FilledInput 
                            id="component-filled-monto" 
                            name='fundMoney'
                            value={fundValue.fundMoney} 
                            onChange={handleChange}
                            color='secondary'
                            size='small'
                            sx={{width: '270px'}} />
                    </FormControl>
                </Grid>                
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