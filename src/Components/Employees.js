import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import './styles/Employees.css';
import employee1 from './img/employee1.jpg';
import employee2 from './img/employee2.jpg';
import employee3 from './img/employee3.jpg';
import employee4 from './img/employee4.jpg';
import employee5 from './img/employee5.jpg';
import employee6 from './img/employee6.jpg';
import employee7 from './img/employee7.jpeg';
import employee8 from './img/employee8.jpeg';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 200,
      width: 200, 
      borderRadius:'50%'      
    },
    table: {
        maxWidth: '85%',
        margin:'auto'
      }
  }));
const Employees=()=> {
    const classes = useStyles();
        return (
            <div>
                <h2 id="title">Our Employees</h2>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={6} className={classes.paper}>
                        <img src={employee1} alt="" className="employee_img" />
                        </Paper>
                        <h4>David Harrison</h4>
                        <FacebookIcon className="icons" />&nbsp;
                        <LinkedInIcon className="icons" />&nbsp;
                        <TwitterIcon className="icons" />&nbsp;
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={6} className={classes.paper}>
                        <img src={employee2} alt="" className="employee_img" />
                        </Paper>
                        <h4>Rebekah Meadows</h4>
                        <FacebookIcon className="icons" />&nbsp;
                        <LinkedInIcon className="icons" />&nbsp;
                        <TwitterIcon className="icons" />&nbsp;
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={6} className={classes.paper}>
                        <img src={employee3} alt="" className="employee_img" />
                        </Paper>
                        <h4>Brigida Atkin</h4>
                        <FacebookIcon className="icons" />&nbsp;
                        <LinkedInIcon className="icons" />&nbsp;
                        <TwitterIcon className="icons" />&nbsp;
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={6} className={classes.paper}>
                        <img src={employee4} alt="" className="employee_img" />
                        </Paper>
                        <h4>Boris Cheel</h4>
                        <FacebookIcon className="icons" />&nbsp;
                        <LinkedInIcon className="icons" />&nbsp;
                        <TwitterIcon className="icons" />&nbsp;
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={6} className={classes.paper}>
                        <img src={employee5} alt="" className="employee_img" />
                        </Paper>
                        <h4>Sherry Balfe</h4>
                        <FacebookIcon className="icons" />&nbsp;
                        <LinkedInIcon className="icons" />&nbsp;
                        <TwitterIcon className="icons" />&nbsp;
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={6} className={classes.paper}>
                            <img src={employee6} alt="" className="employee_img" />
                        </Paper>
                        <h4>Ananya Reed</h4>
                        <FacebookIcon className="icons" />&nbsp;
                        <LinkedInIcon className="icons" />&nbsp;
                        <TwitterIcon className="icons" />&nbsp;
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={6} className={classes.paper}>
                        <img src={employee7} alt="" className="employee_img" />
                        </Paper>
                        <h4>Graig Sturt</h4>
                        <FacebookIcon className="icons" />&nbsp;
                        <LinkedInIcon className="icons" />&nbsp;
                        <TwitterIcon className="icons" />&nbsp;
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={6} className={classes.paper}>
                        <img src={employee8} alt="" className="employee_img" />
                        </Paper>
                        <h4>Celia Almeda</h4>
                        <FacebookIcon className="icons" />&nbsp;
                        <LinkedInIcon className="icons" />&nbsp;
                        <TwitterIcon className="icons" />&nbsp;
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
}

export default Employees
