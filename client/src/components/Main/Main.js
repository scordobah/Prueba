import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import SideBarLeft from '../SideBarLeft/SideBarLeft'
import Fondos from '../Fondos/Funds'
import { makeStyles } from '@mui/styles'
import Home from '../Home/Home'
import Transactions from '../Transactions/Transactions'
import { Grid } from '@mui/material'
import NewClient from '../Clients/NewClient'

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        border: 3
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        height: '200px'
    },
    boxes: {
    
    }
}))
export default function Main() {
    const classes = useStyle();

    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
            <Router>
                <Header />
                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <SideBarLeft />
                    <Routes>
                        <Route exact path='/' element={<Home classes={classes} />} />
                        <Route exact path='/clientes' element={<NewClient classes={classes} />} />
                        <Route exact path='/fondos/*' element={<Fondos classes={classes} />} />
                        <Route exact path='/transacciones' element={<Transactions classes={classes} />} />
                    </Routes>
                </Grid>
            </Router>
        </Grid>
    )
}