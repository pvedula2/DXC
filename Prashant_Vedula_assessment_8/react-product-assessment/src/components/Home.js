import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(){
        console.log("handlesubmit called")
        this.props.history.push(`/product`)

    }
    render() {
        return (
            <div>
                <h2>Welcome to Product App</h2> 
                Press to go to product app <button type="submit" className="btn btn-success" onClick={()=>this.handleSubmit()} > Enter</button>
                
            </div>
        );
    }
}

export default Home;