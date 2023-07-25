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
                    <Typography variant='h2'>Sign Up</Typography>
                    <form>
                        <Grid container columnSpacing={2} rowSpacing={2} sx={{marginBottom: '15px'}}>
                            <Grid item md={6}>
                                <Box className="form-group">
                                    <TextField  variant="outlined" placeholder='First Name' type='text' />
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box className="form-group">
                                    <TextField  variant="outlined" placeholder='Last Name' type='text' />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={2} rowSpacing={2} sx={{marginBottom: '15px'}} >
                            <Grid item md={6}>
                                <Box className="form-group">
                                    <TextField  variant="outlined" placeholder='Email' type='email' />
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box className="form-group">
                                    <TextField  variant="outlined" placeholder='Password' type='password' />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={2} rowSpacing={2} sx={{marginBottom: '15px'}} >
                            <Grid item md={12}>
                                <Box className="form-group">
                                    <TextField  variant="outlined" placeholder='Email' type='file' />
                                </Box>
                            </Grid>
                           
                        </Grid>
                        <Grid container columnSpacing={2} rowSpacing={2} sx={{marginBottom: '15px'}} >
                            <Grid item md={12}>
                                <Box className="form-group">
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
