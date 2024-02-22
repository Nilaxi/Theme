import React from 'react'
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { getJobrequest } from 'slice/recruiter/createjobSlice';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@emotion/react';
import { UpdateRequest, deleteJobRequest, getupdateRequest } from 'slice/recruiter/UpdateJobSlice';
import {
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  Modal,
  Slider,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Checkbox,
  Box,
  useMediaQuery,
  CardActionArea,
  CardActions,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { useHistory } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import makeStyles from '@emotion/styled';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Breadcrumb, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const useStyles = makeStyles((theme) => ({
  body: {
    height: 'inherit'
  },
  button: {
    width: '100%',
    height: '100%'
  },
  jobTileOuter: {
    padding: '30px',
    margin: '20px 0',
    boxSizing: 'border-box',
    width: '100%'
  },
  popupDialog: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusBlock: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase'
  }
}));

const FilterPopup = (props) => {
  const classes = useStyles();
  const { open, handleClose, searchOptions, setSearchOptions, getData } = props;
  return (
    <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
      <Paper
        style={{
          padding: '50px',
          outline: 'none',
          minWidth: '50%'
        }}
      >
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Job Type
            </Grid>
            <Grid
              container
              item
              xs={9}
              justify="space-around"
            // alignItems="center"
            >
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="fullTime"
                      checked={searchOptions.jobType.fullTime}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked
                          }
                        });
                      }}
                    />
                  }
                  label="Full Time"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="partTime"
                      checked={searchOptions.jobType.partTime}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked
                          }
                        });
                      }}
                    />
                  }
                  label="Part Time"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="wfh"
                      checked={searchOptions.jobType.wfh}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked
                          }
                        });
                      }}
                    />
                  }
                  label="Work From Home"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Salary
            </Grid>
            <Grid item xs={9}>
              <Slider
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => {
                  return value * (100000 / 100);
                }}
                marks={[
                  { value: 0, label: '0' },
                  { value: 100, label: '100000' }
                ]}
                value={searchOptions.salary}
                onChange={(event, value) =>
                  setSearchOptions({
                    ...searchOptions,
                    salary: value
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Duration
            </Grid>
            <Grid item xs={9}>
              <TextField
                select
                label="Duration"
                variant="outlined"
                fullWidth
                value={searchOptions.duration}
                onChange={(event) =>
                  setSearchOptions({
                    ...searchOptions,
                    duration: event.target.value
                  })
                }
              >
                <MenuItem value="0">All</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Sort
            </Grid>
            <Grid item container direction="row" xs={9}>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: '1px solid #D1D1D1', borderRadius: '5px' }}
              >
                <Grid item>
                  <Checkbox
                    name="salary"
                    checked={searchOptions.sort.salary.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          salary: {
                            ...searchOptions.sort.salary,
                            status: event.target.checked
                          }
                        }
                      })
                    }
                    id="salary"
                  />
                </Grid>
                <Grid item>
                  <label for="salary">
                    <Typography>Salary</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.salary.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          salary: {
                            ...searchOptions.sort.salary,
                            desc: !searchOptions.sort.salary.desc
                          }
                        }
                      });
                    }}
                  >
                    {searchOptions.sort.salary.desc ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: '1px solid #D1D1D1', borderRadius: '5px' }}
              >
                <Grid item>
                  <Checkbox
                    name="duration"
                    checked={searchOptions.sort.duration.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          duration: {
                            ...searchOptions.sort.duration,
                            status: event.target.checked
                          }
                        }
                      })
                    }
                    id="duration"
                  />
                </Grid>
                <Grid item>
                  <label for="duration">
                    <Typography>Duration</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.duration.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          duration: {
                            ...searchOptions.sort.duration,
                            desc: !searchOptions.sort.duration.desc
                          }
                        }
                      });
                    }}
                  >
                    {searchOptions.sort.duration.desc ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: '1px solid #D1D1D1', borderRadius: '5px' }}
              >
                <Grid item>
                  <Checkbox
                    name="rating"
                    checked={searchOptions.sort.rating.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          rating: {
                            ...searchOptions.sort.rating,
                            status: event.target.checked
                          }
                        }
                      })
                    }
                    id="rating"
                  />
                </Grid>
                <Grid item>
                  <label for="rating">
                    <Typography>Rating</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.rating.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          rating: {
                            ...searchOptions.sort.rating,
                            desc: !searchOptions.sort.rating.desc
                          }
                        }
                      });
                    }}
                  >
                    {searchOptions.sort.rating.desc ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: '10px 50px' }}
              onClick={() => getData()}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

function ListJob() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { data, isloading, error, listData } = useSelector((y) => y.jobs);
  console.log(listData);
  const dis = useDispatch();
  useEffect(() => {
      dis(getJobrequest(1))

 
}, []);
  // Delete Job
  const [idToDelete, setIdToDelete] = useState('');
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = (id) => {
    setOpenDelete(true)
       
        setIdToDelete(id)
     
  };
 
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDelete = () => {
    dis(deleteJobRequest(idToDelete));
    handleCloseDelete();
  };

  // For Update

  const [idToUpdate, setIdToUpdate] = useState('');
  const [openUpdate, setOpenUpdate] = useState(false);
  const handleClickOpenUpdate = (id) => {
    setOpenUpdate(true)
     
        setIdToUpdate(id)
  };
 
  const handleCloseUpdate = () => setOpenUpdate(false);
  const handleUpdate = () => {
    dis(getupdateRequest(idToUpdate));
    handleCloseUpdate();
  };
  
  const [jobs, setJobs] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchOptions, setSearchOptions] = useState({
    query: "",
    jobType: {
      fullTime: false,
      partTime: false,
      wfh: false,
    },
    salary: [0, 100],
    duration: "0",
    sort: {
      salary: {
        status: false,
        desc: false,
      },
      duration: {
        status: false,
        desc: false,
      },
      rating: {
        status: false,
        desc: false,
      },
  },
  });


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
            <Grid item xs>
            <TextField
              label="Search Jobs"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              style={{ width: '500px' }}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <IconButton>
              <FilterListIcon onClick={() => setFilterOpen(true)} />
            </IconButton>
          </Grid>

          <FilterPopup
            open={filterOpen}
            searchOptions={searchOptions}
            setSearchOptions={setSearchOptions}
            handleClose={() => setFilterOpen(false)}
            getData={() => {

              setFilterOpen(false);
            }}
          />
{/* 
            <Grid item>
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Grid> */}
          </Grid>


          {isloading && <div>Loading</div>}
          {error && <div>{error}</div>}
          {listData && (
            <ul className='col-sm-4'>

              {listData?.map((v) => {
                return (

                  <Card sx={{ maxWidth: 1400, margin: '30px' }}>
                    <CardActionArea>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>


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
                        <CardActions style={{ display: "grid" }} >
                          <Button style={{ backgroundColor: "#000033", color: "white", padding: "60px 30px", margin: "0px 2px", fontSize: '15px', borderRadius: '10px', fontFamily: 'Roboto","Helvetica","Arial",sans-serif' }} size="small">View Application</Button>
                          <Button style={{ backgroundColor: "#00004d", color: "white", padding: "14px 80px", margin: '0px 3px', fontSize: '15px', borderRadius: '10px', fontFamily: 'Roboto","Helvetica","Arial",sans-serif' }} onClick={() => { handleClickOpenUpdate(v._id) }}  size="small">Update Details</Button>
                          <Button style={{ backgroundColor: "#f50057", color: "white", padding: "14px 80px", margin: '-2px 2px', fontSize: '15px', borderRadius: '10px', fontFamily: 'Roboto","Helvetica","Arial",sans-serif', fontWeight: '20px' }} onClick={() => { handleClickOpenDelete(v._id) }} size="15px">Delete Job</Button>
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
          open={openDelete}
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
              onClick={handleDelete}
            >
              DELETE
            </Button>
            <Button
              style={{
                backgroundColor: "rgba(34,42,69, 0.96)",
                color: 'white',
                margin: '0px 0px',
                padding: '11px 60px',
                borderRadius: '7px',
                border: 'none'
              }}
              size="small"
              onClick={handleCloseDelete}
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
          onClose={handleClose}
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
              onClick={handleUpdate}
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

