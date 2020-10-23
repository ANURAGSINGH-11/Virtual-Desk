import React, { Component } from 'react'
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Products from './Products';
import Employees from './Employees';
import Meetings from './Meetings';
import Customers from './Customers';
import Sales from './Sales';
class Container extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             link:''
        }
    }

    changeRender=(data)=>{
        this.setState({
            link:data
        })
    }

 
    
    render() {
        
        if(this.state.link==='Dashboard'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender}/>
                    <Dashboard />
                </div>
            )
        }
        else if(this.state.link==='Products'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Products />
                </div>
            )
        }
        else if(this.state.link==='Employees'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Employees />
                </div>
            )
        }
        else if(this.state.link==='Meetings'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Meetings />
                </div>
            )
        }
        else if(this.state.link==='Customers'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Customers />
                </div>
            )
        }
        else if(this.state.link==='Sales'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Sales />
                </div>
            );
        }
        else{
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Dashboard />
                </div>
            );
        }
    }
}

export default Container
