import React, { Component } from 'react';


class Welcome extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
       

    }
    componentWillMount(){
        
    }
    handleSubmit(){
        console.log("handlesubmit called")
        this.props.history.push(`/login`)

    }
    render() {
        return (
            <div>
            <div>
                <h2>Welcome to vehicle maintainance  App</h2> 
                <div>
                
              
            </div>
                Press Click Here to go to the login page <button type="submit" className="btn btn-success" onClick={()=>this.handleSubmit()} > Enter</button>
                
            </div>
            </div>
        );
    }
}

export default Welcome;