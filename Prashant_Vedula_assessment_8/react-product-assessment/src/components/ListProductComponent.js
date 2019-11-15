import React, { Component } from 'react';
import ProductDataService from '../service/ProductDataService';


class ListProductComponent extends Component {
    constructor(props){
        super(props)
        this.refreshProduct=this.refreshProduct.bind(this)
        this.deleteButtonClick=this.deleteButtonClick.bind(this)
        this.updateProductClicked=this.updateProductClicked.bind(this);
        this.addProductClicked=this.addProductClicked.bind(this);
        this.SearchProducts=this.SearchProducts.bind(this);
        this.state=({
            products:[],
            message:""
        })

    }

    

    updateProductClicked(productId){
        this.props.history.push(`/productupdate/${productId}`)

    }
    addProductClicked(){
        this.props.history.push(`/productadd`)

    }
    deleteButtonClick(value){
        ProductDataService.deleteProduct(value).then(
            response =>{
                if(response.status==200){
                this.setState({
                    
                    message:`prouctId: ${value} has been deleted successfully`
                })
                 this.refreshProduct()}
                 else{
                     this.setState({
                         message:'There was some problem deleting'
                     })
                 }
            }
            
        )
        
        
    }
  
    componentWillMount(){
        this.refreshProduct();
      
    }
    refreshProduct(){
        ProductDataService.getAllProducts().then(
            response =>{
                
                this.setState({
                    products:response.data
                })
                // this.refreshProduct()
            }
            
        )
    }
    SearchProducts(){
        this.props.history.push(`/searchByName`)

    }

    render() {
        return (<div>
            <div className="container">
            <h2>My Product app</h2>
        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
  <table className="table table-striped table-dark table-hover">
  <thead>
    <tr>
      <th>productId</th>
      <th>productName</th>
      <th>quantityOnHand</th>
      <th>price</th>
      <th>Update Action</th>
      <th>Delete Action</th>
      
    </tr>
  </thead>
  <tbody>
      {
      this.state.products.map(product =>
    <tr key={product.productId}> 
        <td>{product.productId}</td>
      <td>{product.productName}</td>
      <td>{product.quantityOnHand}</td>
      <td>{product.price}</td>
      <td><button className="btn btn-warning" onClick={()=>this.updateProductClicked(product.productId)}>Update</button></td>
      <td><button className="btn btn-danger" onClick={()=>this.deleteButtonClick(product.productId)}>Delete</button></td>
      
    </tr>
      )
      }
  </tbody>
  
</table>
<button className="btn btn-success btn-block" onClick={()=>this.addProductClicked()}>ADD</button>
<button className="btn btn-success btn-block" onClick={()=>this.SearchProducts()}>SEARCH BY NAME</button>
            </div>
            </div>
        );
    }
}

export default ListProductComponent;