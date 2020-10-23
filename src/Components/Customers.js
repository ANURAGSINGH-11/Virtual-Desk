import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './styles/Customers.css';
import avatar1 from './img/avatar1.jpg';
import avatar2 from './img/avatar2.jpg';
import avatar3 from './img/avatar3.jpg';
import avatar4 from './img/avatar4.jpg';
import avatar5 from './img/avatar5.jpg';
import avatar6 from './img/avatar6.jpg';
import avatar7 from './img/avatar7.jpg';
import avatar8 from './img/avatar8.jpg';
import avatar9 from './img/avatar9.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 100,
      width: 250,
      backgroundColor:'#daddf2'  
    },
    large: {
        position:'absolute',
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginLeft:'20px',
        marginTop:'20px',
      }
  }));

const Customers=()=> {
    const classes = useStyles();
            return(
                <div>
                    <h2 id="customer_id">Our Customers</h2>
                    <div id="customer_grid">
                    <Grid item xs={12} className="customer_grid">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <Avatar alt="Remy Sharp" src={avatar1} className={classes.large} />
                        <h4 className="customer_name">Carin Apple</h4>
                        </Paper>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs={12} className="customer_grid">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <Avatar alt="Remy Sharp" src={avatar2} className={classes.large} />
                        <h4 className="customer_name">Graig Sturt</h4>
                        </Paper>
                        </Grid>
                    </Grid>
                    </Grid> 
                    <Grid item xs={12} className="customer_grid">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <Avatar alt="Remy Sharp" src={avatar3} className={classes.large} />
                        <h4 className="customer_name">Brian Lopez</h4>
                        </Paper>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs={12} className="customer_grid">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <Avatar alt="Remy Sharp" src={avatar4} className={classes.large} />
                        <h4 className="customer_name">Rebekah Mead</h4>
                        </Paper>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs={12} className="customer_grid">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <Avatar alt="Remy Sharp" src={avatar5} className={classes.large} /> 
                        <h4 className="customer_name">Tristan Doughty</h4>
                        </Paper>
                        </Grid>
                    </Grid>
                    </Grid> 
                    <Grid item xs={12} className="customer_grid">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <Avatar alt="Remy Sharp" src={avatar6} className={classes.large} />
                        <h4 className="customer_name">Kristine Staley</h4>
                        </Paper>
                        </Grid>
                    </Grid>
                    </Grid> 
                    <Grid item xs={12} className="customer_grid">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <Avatar alt="Remy Sharp" src={avatar7} className={classes.large} />
                        <h4 className="customer_name">Boris Cheel</h4>
                        </Paper>
                        </Grid>
                    </Grid>
                    </Grid> 
                    <Grid item xs={12} className="customer_grid">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <Avatar alt="Remy Sharp" src={avatar8} className={classes.large} />
                        <h4 className="customer_name">Sherry Balfe</h4>
                        </Paper>
                        </Grid>
                    </Grid>
                    </Grid> 
                    <Grid item xs={12} className="customer_grid">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <Avatar alt="Remy Sharp" src={avatar9} className={classes.large} />
                        <h4 className="customer_name">Kristine Staley</h4>
                        </Paper>
                        </Grid>
                    </Grid>
                    </Grid>
                    </div>    
                </div>
            )    
    
}

export default Customers
