import React, { useState } from 'react'

import Header from '../../Layout/Header/Header'
import { Box, Button, Container, Grid, TextField, TextareaAutosize, Typography } from '@mui/material'
import { ReactComponent as UploadSvg } from '../../images/fileUpload.svg';
import './AddProduct.scss';

export default function AddProduct() {
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
                        <Typography variant='h2'>Add Product</Typography>
                        <form>
                            <Grid container columnSpacing={2} rowSpacing={2} sx={{ marginBottom: '15px' }}>
                                <Grid item md={12}>
                                    <Box className="form-group">
                                        <TextField variant="outlined" placeholder='Product Title' type='text' />
                                    </Box>
                                </Grid>

                            </Grid>
                            <Grid container columnSpacing={2} rowSpacing={2} sx={{ marginBottom: '15px' }} >
                                <Grid item md={6}>
                                    <Box className="form-group">
                                        <TextField variant="outlined" placeholder='Price' type='number' />
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <Box className="form-group">
                                        <TextField variant="outlined" placeholder='Category Id' type='number' />
                                    </Box>
                                </Grid>
                                <Grid item md={12}>
                                    <Box className="form-group">

                                        <TextareaAutosize variant="outlined" aria-label="minimum height"
                                            minRows={3}
                                            placeholder='Description' />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container columnSpacing={2} rowSpacing={2} sx={{ marginBottom: '15px' }} >
                                <Grid item md={12}>
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
