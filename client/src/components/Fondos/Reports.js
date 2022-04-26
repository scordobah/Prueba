import React, { useEffect, useState } from 'react'
import { getClients, getSuscriptionsByName } from '../../services/services'
import { Box, Grid, Typography } from '@mui/material'
import ReactApexChart from 'react-apexcharts'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
    header: {
        width: '100%',
        textAlign: 'left',
        marginLeft: '30px',
        
    },
    graph: {
        backgroundColor: 'gray',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '1000px'
    }
}));

export default function Reports(props) {
    const classes = useStyle();

    const [clients, setClients] = useState([])

    const nameFund = [];
    const costFund = [];

    const [pieInfo, setPieInfo] = useState({
        series: [],
        options: {
          chart: {
            width: '100%',
            type: 'pie',
          },
          labels: [],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: '100%'
              },
              legend: {
                position: 'bottom'
              },
            },
          }],
        }})

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
                    for(const obj of response.data)
                    {
                        nameFund.push(obj.fundName);
                        costFund.push(obj.fundCost);
                    } 
                    console.log("nameFund", nameFund)  
                    setPieInfo({
                        series: costFund,
                        options: {
                            labels: nameFund,
                        }                        
                    })          
                }  
            }
            catch (e) {
                console.log(e);
            }
        }
        loadClients();
        loadSuscriptionsByName();
    });

    const [clientSelected, setClientSelected] = useState('');
    const handleChangeClient = e => setClientSelected(e.target.value);

    return (
        <Grid className={props.classes.boxes} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid className={classes.header}>
                <Typography variant='h4'>
                    Reporte de fondos
                </Typography>
            </Grid>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                width: '100%',
                alignItems: 'left', 
                margin: '15px 0 20px 0'
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
            </Box>
                <ReactApexChart options={pieInfo.options} series={pieInfo.series} type="pie" width={'200%'} />
        </Grid>
    )
}