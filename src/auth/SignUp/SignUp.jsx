import React, { useState } from 'react'

import Header from '../../Layout/Header/Header'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'

import { ReactComponent as UploadSvg } from '../../images/fileUpload.svg';
import './SignUp.scss';

export default function SignIn() {
    const [fileName, setFileName] = useState();
    const [fileImg, setFileImg] = useState();
    const handleChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
            setFileImg(URL.createObjectURL(e.target.files[0]))
        }
    }

    return (
        <>
            <Header />
            <Box className="sign-in-wrapper">
                <Container fixed>
                    <Box className="sign-in-inner">
                        <Typography variant='h2'>Sign Up</Typography>
                        <form>
                            <Grid container columnSpacing={2} rowSpacing={2} sx={{ marginBottom: '15px' }}>
                                <Grid item md={6}>
                                    <Box className="form-group">
                                        <TextField variant="outlined" placeholder='First Name' type='text' />
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <Box className="form-group">
                                        <TextField variant="outlined" placeholder='Last Name' type='text' />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container columnSpacing={2} rowSpacing={2} sx={{ marginBottom: '15px' }} >
                                <Grid item md={6}>
                                    <Box className="form-group">
                                        <TextField variant="outlined" placeholder='Email' type='email' />
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <Box className="form-group">
                                        <TextField variant="outlined" placeholder='Password' type='password' />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container columnSpacing={2} rowSpacing={2} sx={{ marginBottom: '15px' }} >
                                <Grid item md={12}>
                                    <Box className="form-group">
                                        <Box className="custom_file_upload">
                                            {
                                                fileImg ? <Typography variant='caption' className='uploadImg'><img src={fileImg} alt="" /> </Typography>
                                                    :
                                                    <Typography variant='caption' className='uploadImg'><UploadSvg /> </Typography>
                                            }
                                            {
                                                fileImg ? '' : <Typography variant='body1'>Upload Image</Typography>
                                            }
                                            <Button
                                                component="label"
                                                onChange={handleChange}
                                                className='fileName'
                                            >

                                                <input
                                                    type="file"
                                                    hidden
                                                    accept="image/jpeg, image/png"

                                                />
                                            </Button>
                                            {/* <TextField className='upload_input' variant="outlined" type='file'   /> */}
                                            {
                                                fileName &&
                                                <Typography variant='caption' className='fileName'>Uploaded File: {fileName}</Typography>
                                            }
                                            {/* <Typography variant='body1'>File Name: {fileName}</Typography> */}
                                        </Box>
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
