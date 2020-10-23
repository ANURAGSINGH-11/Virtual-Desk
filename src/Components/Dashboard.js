import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './styles/Dashboard.css';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 100,
      width: 300,       
    },
    table: {
        maxWidth: '85%',
        margin:'auto'
      }
  }));
 
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Rebekah Meadows','5 Oct 06:44PM', < VisibilityIcon/>,<ChatBubbleOutlineIcon />),
    createData('Brigida Atkin','Active Now', < VisibilityIcon/>,<ChatBubbleOutlineIcon />),
    createData('Kristine Staley','16 Sep 10:30AM',< VisibilityIcon/>,<ChatBubbleOutlineIcon />),
    createData('Carin Apple','Active Now', < VisibilityIcon/>,<ChatBubbleOutlineIcon />),
    createData('Boris Cheel','Active Now', < VisibilityIcon/>,<ChatBubbleOutlineIcon />),
    createData('Sherry Balfe','14 Jan 09:20AM', < VisibilityIcon/>,<ChatBubbleOutlineIcon />),
    createData('Graig Sturt','Active Now', < VisibilityIcon/>,<ChatBubbleOutlineIcon />),
    createData('Brian Lopez','22 Oct 07:30PM', < VisibilityIcon/>,<ChatBubbleOutlineIcon />),
    createData(' Tristan Doughty','Active Now', < VisibilityIcon/>,<ChatBubbleOutlineIcon />),
  ];
 const Dashboard=()=> {
        const classes = useStyles();
        const [searchTerm, setSearchTerm] = React.useState("");
        const [searchResults, setSearchResults] = React.useState([]);
        const handleChange = event => {
            setSearchTerm(event.target.value);
          };
          React.useEffect(() => {
            const results = rows.filter(row =>{
                return Object.keys(row).some(key =>
                    typeof row[key] === "string" && row[key].toLowerCase().includes(searchTerm)
                );
            });
            setSearchResults(results);
          }, [searchTerm]);
        return (
            <div>
                <div id="contain">
                <h2 id="title">Dashboard</h2>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper} style={{borderLeft:'5px solid #293A68',color:'#293A68',backgroundColor:'#e8ecf6'}}>
                            <h5 className="describe">MONTHLY EARNING (CURRENT)</h5>
                            <span className="tasks_value">25,000 /-</span>
                            <AttachMoneyIcon style={{marginTop:'50px',marginLeft:'-250px'}} />
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}  className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper} style={{borderLeft:'5px solid #8E44AD',color:'#8E44AD',backgroundColor:'#f5eff8'}}>
                        <h5 className="describe">TOTAL EARNINGS</h5>
                        <span className="tasks_value"> 1,45,550 /-</span>
                        <AttachMoneyIcon style={{marginTop:'50px',marginLeft:'-240px'}} />
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}  className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper} style={{borderLeft:'5px solid #2471A3',color:'#2471A3',backgroundColor:'#f1f8fc'}}>
                            <h5 className="describe">TOTAL MEETINGS</h5>
                            <span className="tasks_value"> 730</span>
                            <PersonIcon style={{marginTop:'50px',marginLeft:'-240px'}} />
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}  className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper} style={{borderLeft:'5px solid #2874A6',color:'#2874A6',backgroundColor:'#f1f8fc'}}>
                        <h5 className="describe">TOTAL TEAMS</h5>
                        <span className="tasks_value"> 8</span>
                        <SupervisorAccountIcon style={{marginTop:'50px',marginLeft:'-240px'}} />
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}  className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper} style={{borderLeft:'5px solid #28B463 ',color:'#28B463',backgroundColor:'#ecfaf2'}}>
                        <h5 className="describe">TOTAL TASKS</h5>
                        <span className="tasks_value"> 28</span>
                        <AssignmentTurnedInIcon style={{marginTop:'50px',marginLeft:'-240px'}} />
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}  className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper} style={{borderLeft:'5px solid #E74C3C ',color:'#E74C3C',backgroundColor:'#fceceb'}}>
                        <h5 className="describe">PENDING TASKS</h5>
                        <span className="tasks_value"> 12</span>
                        <AssignmentLateIcon style={{marginTop:'50px',marginLeft:'-240px'}} />
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                </div>
                {/* Employee Login Info */}
                <TableContainer component={Paper}>
                <h3 id="employee_info">Employee Login Info</h3>
                <form className={classes.root} id="form-search" noValidate autoComplete="off">
                <TextField id="standard-basic" label="Search" value={searchTerm} onChange={handleChange}  />
                </form>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow id="row">
                        <TableCell className="cell">Employee Name</TableCell>
                        <TableCell className="cell" align="right">Login Status</TableCell>
                        <TableCell className="cell" align="right">Login Timings</TableCell>
                        <TableCell className="cell" align="right">Send Message</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {searchResults.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
                </TableContainer>
            </div>
        )
}

export default Dashboard
