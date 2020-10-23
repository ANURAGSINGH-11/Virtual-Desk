import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './styles/Products.css'
import product1 from './img/product1.png'
import product2 from './img/product2.png'
import product3 from './img/product3.png'
import product4 from './img/product4.png'
import product5 from './img/product5.png'
import product6 from './img/product6.png'
import product7 from './img/product7.png'
import product8 from './img/product8.png'
import product9 from './img/product9.png'
const useStyles = makeStyles((theme) => ({
    paper: {
      height: 350,
      width: 300,       
    }
  }));
const Products=()=> {
    const classes = useStyles();
   
        return (
            <div>
                <div id="product">
                <h2 id="title">Products</h2>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                            <img src={product1} alt="product1" className="product_img"/>
                            <h3 className="product_name">Voxle App</h3>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                            <h3 className="product_name">Banking App</h3>
                            <img src={product2} alt="product2" className="product_img"/>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                            <h3 className="product_name">Murphy</h3>
                            <img src={product3} alt="product3" className="product_img"/>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper} >
                        <h3 className="product_name">Profile Hub</h3>
                            <img src={product4} alt="product4" className="product_img"/>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <h3 className="product_name">Financiale</h3>
                            <img src={product5} alt="product5" className="product_img"/>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <h3 className="product_name">Ramen Time</h3>
                            <img src={product6} alt="product6" className="product_img"/>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <h3 className="product_name">Banking Bob</h3>
                            <img src={product7} alt="product7" className="product_img"/>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <h3 className="product_name">Servlet App</h3>
                            <img src={product8} alt="product8" className="product_img"/>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="tasks">
                    <Grid container justify="center">
                        <Grid>
                        <Paper elevation={4} className={classes.paper}>
                        <h3 className="product_name">Socio Meet Up</h3>
                            <img src={product9} alt="product9" className="product_img"/>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                </div>
            </div>
        )
}

export default Products
