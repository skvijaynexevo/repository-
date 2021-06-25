import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'; 
import './Footer.css'
import Logo from '../images/Logo.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2), 
    color: theme.palette.text.secondary,
  },
}));

export default function FooterBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}> 
        <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
          <Paper className={classes.paper}>
            <h5>For developer</h5>
            <ul>
                <img src={Logo} />
            </ul>
          </Paper>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
          <Paper className={classes.paper}>
          <h5>Company</h5>
            <ul>
              <li>Droner Blog</li>
              <li>Drone Accessories</li> 
              <li>Droner Blog</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
          <Paper className={classes.paper}>
          <h5>Get Jobs</h5>
            <ul>
              <li>Upgrade Pro Version</li>
              <li>Explore Your Drone Work</li>
              <li>Droner Blog</li> 
            </ul>
          </Paper>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
          <Paper className={classes.paper}>
          <h5>Hire Now</h5>
            <ul>
              <li>Post Job Vacancy</li>
              <li>Post Freelancer Requirement</li>
              <li>Search Droners</li> 
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
 