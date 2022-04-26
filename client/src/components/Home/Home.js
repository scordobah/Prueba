import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    header: {
        textAlign: 'left',
        marginLeft: '30px'
    }
}));

export default function Home(props) {
    const classes = useStyle();

    return (
        <Grid container className={props.classes.content} sx={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
            <Grid className={classes.header}>
                <Typography variant='h1'>
                    Bienvenido
                </Typography>
            </Grid>          
        </Grid>
    )
}