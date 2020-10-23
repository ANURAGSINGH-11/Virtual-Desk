import React,{ useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventIcon from '@material-ui/icons/Event';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import './styles/Meetings.css';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 100,
      width: 300,  
    }
  }));
 
const Meetings=()=> {
    const classes = useStyles();
    const [calDate, setCalDate] = useState(new Date())

    function onChange (calDate) {
        // change results based on calendar date click
        setCalDate(calDate)
    }
        return (
            <div>
                
                <h2 id="meet_title">Meetings</h2>
                <div id="meetings">
                <Grid item xs={12} className="meet_grid" id="grid1">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper} style={{backgroundColor:'#e5f6ff'}}>
                            <ScheduleIcon className="meeticon" fontSize="large" style={{color:"#2c71ff"}} />
                            <h5 className="meettext" style={{color:"#2c71ff"}}>40K Time</h5>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="meet_grid" id="grid2">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper} style={{backgroundColor:'#f6f3ff'}}>
                            <EventIcon className="meeticon" fontSize="large" style={{color:"#604bba"}} />
                            <h5 className="meettext" style={{color:"#604bba"}}>400 Meetings</h5>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="meet_grid" id="grid3">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper} style={{backgroundColor:'#fff0e9'}}>
                            <EventAvailableIcon className="meeticon" fontSize="large" style={{color:"#ff562d"}} />
                            <h5 className="meettext" style={{color:"#ff562d"}}>60 Events</h5>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                </div>
                <h3 id="cal_title">Schedule Meetings</h3>
                <Calendar onChange={onChange} value={calDate} className="calendar"  />
            </div>
        )
}

export default Meetings
