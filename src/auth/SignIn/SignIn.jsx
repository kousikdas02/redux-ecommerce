import React from 'react'

import Header from '../../Layout/Header/Header'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'

import './SignIn.scss';

export default function SignIn() {
    return (
        <>
            <Header />
            <Box className="sign-in-wrapper">
                <Container fixed>
                    <Box className="sign-in-inner">
                        <Typography variant='h2'>Sign In</Typography>
                        <form>
                            <Grid container columnSpacing={2} rowSpacing={2} sx={{ marginBottom: '15px' }}>
                                <Grid item md={12}>
                                    <Box className="form-group">
                                        <TextField variant="outlined" placeholder='Email' type='email' />
                                    </Box>
                                </Grid>

                            </Grid>
                            <Grid container columnSpacing={2} rowSpacing={2} sx={{ marginBottom: '15px' }} >
                                <Grid item md={12}>
                                    <Box className="form-group">
                                        <TextField variant="outlined" placeholder='Password' type='password' />
                                    </Box>
                                </Grid>

                            </Grid>

                            <Grid container columnSpacing={2} rowSpacing={2} sx={{ marginBottom: '15px' }} >
                                <Grid item md={12}>
                                    <Box className="form-group text-center">
                                        <Button className='cmn-btn' type='button' variant="contained">Submit</Button>
                                    </Box>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
