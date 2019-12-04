import React, { Component } from 'react';
import '../Second.css'
import ProductService from '../service/ProductService';


class User extends Component {
    constructor(props){
        super(props);
        console.log("inside constructor")
        console.log(this.props.match.params.uid)
        this.state=({
            user:[],
            maintainance:[],
            userID:this.props.match.params.uid
        })
        this.refreshProduct=this.refreshProduct.bind(this);
        this.updateMaintainanceClicked=this.updateMaintainanceClicked.bind(this);
        this.deleteButtonClick=this.deleteButtonClick.bind(this);
        this.addProductClicked=this.addProductClicked.bind(this);
    }
    updateMaintainanceClicked(maintainID,userID){
        this.props.history.push(`/update_add/${userID}/${maintainID}`)
        

    }
    addProductClicked(userID){
        this.props.history.push(`/update_add/${userID}`)

    }
    deleteButtonClick(maintainID){
        console.log("Inside delete ")
        ProductService.deleteMaintainace(this.state.userID,maintainID).then(
            response=>{
                this.refreshProduct();
            }
        )

    }
    componentWillMount(){
        this.refreshProduct();
        
    }
    refreshProduct(){
        console.log("Inside refresh product")
        console.log(this.state.userID)
        ProductService.getAllMaintainace(this.state.userID).then(
            response =>{
                console.log(response.data)
                this.setState({
                    maintainance:response.data
                })
                // this.refreshProduct()
                
            }
            
            
        )
        
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h2>Maintainance List</h2>
                    <table className="table table-striped table-dark table-hover">
  <thead>
    <tr>
      <th>Maintainance ID</th>
      <th>Vehicle Name</th>
      <th>Service</th>
      <th>Date of Maintainance</th>
      <th>Mileage</th>
      <th>Update Service</th>
      <th>Delete Service List</th>
      
      
    </tr>
  </thead>
  <tbody>
      {
      this.state.maintainance.map(maintainance =>
    <tr key={maintainance.maintainID}> 
        <td>{maintainance.maintainID}</td>
      <td>{maintainance.vehicleName}</td>
      <td>{maintainance.service}</td>
      <td>{maintainance.date}</td>
      <td>{maintainance.mileage}</td>
      
      
      <td><button className="btn btn-warning" onClick={()=>this.updateMaintainanceClicked(maintainance.maintainID,this.state.userID)}>Update</button></td>
      <td><button className="btn btn-danger" onClick={()=>this.deleteButtonClick(maintainance.maintainID)}>Delete</button></td>
      
   
    
      
    </tr>
      )
      }
  </tbody>
  
</table>
<button className="btn btn-success btn-block" onClick={()=>this.addProductClicked(this.state.userID)}>ADD</button>

                </div>
            </div>
        );
    }
}

export default User;