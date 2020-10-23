import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Products from './Products';
class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             link:'Dashboard'
        }
    }
    
    render() {
       if(this.state.link==='Dashboard'){
           return <Dashboard />
       }
       else if(this.state.link==='Products'){
           return <Products />
       }
    }
}

export default Content
