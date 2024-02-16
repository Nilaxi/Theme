import { Box, CardActions, Grid, IconButton, InputAdornment, Rating, TextField, useMediaQuery } from '@mui/material';
import { Breadcrumb } from 'app/components';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled';

import { getJobrequest } from 'slice/recruiter/createjobSlice';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea, Card,Button } from '@mui/material';

import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useTheme } from '@emotion/react';





const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));
function ListJob() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUpdate, setOpenUpdate] = useState(false);
  const handleClickOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  

    const { data, isloading, error, listData } = useSelector((y) => y.jobs);

    console.log(listData);

    const dis = useDispatch();

    useEffect(() => {

      dis(getJobrequest(1))

    }, [])

  


    return (

      <>
        <Container>
          <div>
            <Box className="breadcrumb">
              <Breadcrumb routeSegments={[{ name: 'ListJob', path: '/Recruiter' }, { name: 'ListJob' }]} />
            </Box>
           

          <Grid item container direction="column" justify="center" alignItems="center" >
            <Grid item xs>
              <Typography variant="h4">My Jobs</Typography>
            </Grid>
          
            <Grid item>
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Grid>
          </Grid>

            
            {isloading && <div>Loading</div>}
            {error && <div>{error}</div>}
            {listData && (
              <ul className='col-sm-4'>

                {listData?.map((v) => {
                  return (

                    <Card sx={{ maxWidth: 1400, margin: '30px' }}>
                      <CardActionArea>
                        <div style={{display:'flex',justifyContent: 'space-between'}}>

                       
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {v.title}
                          </Typography>
                          <Typography gutterBottom variant="body2" component="div">
                            <Rating value={v.rating !== -1 ? v.rating : null} readOnly />
                          </Typography>
                          <Typography gutterBottom variant="body2" component="div">User ID :
                            {v.userId}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">Job Type :
                            {v.jobType}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">Salary :
                            {v.salary}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">Duration :
                            {v.duration}
                          </Typography>
                          <Typography variant="body" color="text.secondary">Skill :
                            {v.skillsets}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">Application Deadline :
                            {v.deadline}
                          </Typography>

                        </CardContent>
                        <CardActions style={{display:"grid"}} >
                            <Button style={{backgroundColor:"rgba(34,42,69, 0.96)", color:"white", padding:"60px 30px", margin : "0px 2px", fontSize:'15px', borderRadius: '10px',fontFamily :'Roboto","Helvetica","Arial",sans-serif'}} size="small">View Application</Button>
                            <Button  style={{backgroundColor:"#13263a", color:"white", padding:"14px 80px", margin : '0px 3px',fontSize:'15px',borderRadius: '10px',fontFamily :'Roboto","Helvetica","Arial",sans-serif' }} onClick={handleClickOpenUpdate}  size="small">Update Details</Button>
                            <Button style={{backgroundColor:"#f50057",  color:"white",  padding:"14px 80px", margin: '-2px 2px',fontSize:'15px',borderRadius: '10px',fontFamily :'Roboto","Helvetica","Arial",sans-serif', fontWeight:'20px'}} onClick={handleClickOpen} size="15px">Delete Job</Button>
                         </CardActions>
                        </div>
                      </CardActionArea>

    



                    </Card>


                  )

                })
                }


              </ul>

            )}

          </div>


          {/* ------- delete popup start--------------> */}
          <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle variant="h4" align="center">
            Are You Sure?
          </DialogTitle>
          <DialogActions>
            <Button
              style={{
                backgroundColor: '#f50057',
                color: 'white',
                margin: '20px',
                padding: '11px 60px',
                borderRadius: '7px',
                border: 'none'
              }}
              size="small"
              onClick={handleClose}
            >
              DELETE
            </Button>
            <Button
              style={{
                backgroundColor:"rgba(34,42,69, 0.96)",
                color: 'white',
                margin: '0px 0px',
                padding: '11px 60px',
                borderRadius: '7px',
                border: 'none'
              }}
              size="small"
              onClick={handleClose}
            >
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>


{/* ------- update popup start--------------> */}
<Dialog 
          fullScreen={fullScreen}
          open={openUpdate}
          keepMounted
          onClose={handleCloseUpdate}
          aria-describedby="alert-dialog-slide-description"
          
        >
          <DialogTitle variant="h4" align="center" style={{ padding: '35px 157px' }}>
            Update Details
          </DialogTitle>
          <TextField
            label="Application Deadline"
            type="datetime-local"
           
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            style={{ marginBottom: '10px', padding: '0px 9px' }} 
          />
          <TextField
            label="Maximum Number Of Applicants"
            type="number"
            variant="outlined"
            InputProps={{ inputProps: { min: 1 } }}
            style={{ marginBottom: '10px', padding: '0px 9px' }} 
          />
          <TextField
            label="Positions Available"
            type="number"
            variant="outlined"
            InputProps={{ inputProps: { min: 1 } }}
            style={{ marginBottom: '10px', padding: '0px 9px' }} 
          />

          <DialogActions style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button
              style={{
                backgroundColor: '#f50057',
                color: 'white',
                margin: '19px',
                padding: '11px 60px',
                borderRadius: '7px',
                border: 'none'
              }}
              size="small"
              onClick={handleCloseUpdate}
            >
              UPDATE
            </Button>
            <Button
              style={{
                backgroundColor: 'rgba(34,42,69, 0.96)',
                color: 'white',
                margin: '0px 0px',
                padding: '11px 60px',
                borderRadius: '7px',
                border: 'none'
              }}
              size="small"
              onClick={handleCloseUpdate}
            >
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
        </Container>
      </>
    )
  }
export default ListJob

