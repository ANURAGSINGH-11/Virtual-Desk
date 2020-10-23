import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles,useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AdbIcon from '@material-ui/icons/Adb';
import WorkIcon from '@material-ui/icons/Work';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import './styles/Navbar.css';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    }
  }));

 const Navbar=(props)=> {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  }; 
        return (
            <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon className="bar-menu" />
          </IconButton>
          <Typography className={classes.title} id="bar-title" variant="h6" noWrap>
            Virtual-Desk
          </Typography>
         <div id="btn-group">
          <Button color="inherit" size="small" onClick={()=>props.linkClick('Dashboard')}><DashboardIcon/> Dashboard</Button>&nbsp;&nbsp;
          <Button color="inherit" size="small" onClick={()=>props.linkClick('Products')}><AdbIcon /> Products</Button>&nbsp;&nbsp;
          <Button color="inherit" size="small" onClick={()=>props.linkClick('Employees')}><WorkIcon /> Employees</Button>&nbsp;&nbsp;
          <Button color="inherit" size="small" onClick={()=>props.linkClick('Meetings')}><MeetingRoomIcon /> Meetings</Button>&nbsp;&nbsp;
          <Button color="inherit" size="small" onClick={()=>props.linkClick('Customers')}><TagFacesIcon /> Our Customers</Button>&nbsp;&nbsp;
          <Button color="inherit" size="small" onClick={()=>props.linkClick('Sales')}><MonetizationOnIcon /> Company Sales</Button>
         </div>
         <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
            <ListItem button onClick={()=>props.linkClick('Dashboard')}>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>
            <ListItem button onClick={()=>props.linkClick('Products')}>
              <ListItemIcon><AdbIcon /></ListItemIcon>
              <ListItemText>Products</ListItemText>
            </ListItem>
            <ListItem button onClick={()=>props.linkClick('Employees')}>
              <ListItemIcon><WorkIcon /></ListItemIcon>
              <ListItemText>Employees</ListItemText>
            </ListItem>
            <ListItem button onClick={()=>props.linkClick('Meetings')}>
              <ListItemIcon><MeetingRoomIcon /></ListItemIcon>
              <ListItemText>Meetings</ListItemText>
            </ListItem>
            <ListItem button onClick={()=>props.linkClick('Customers')}>
              <ListItemIcon><TagFacesIcon /></ListItemIcon>
              <ListItemText>Our Cumstomers</ListItemText>
            </ListItem>
            <ListItem button onClick={()=>props.linkClick('Sales')}>
              <ListItemIcon><MonetizationOnIcon /></ListItemIcon>
              <ListItemText>Company Sales</ListItemText>
            </ListItem>
        </List>
      </Drawer>
        </Toolbar>
      </AppBar>
            </div>
        );
    
}

 
export default Navbar;