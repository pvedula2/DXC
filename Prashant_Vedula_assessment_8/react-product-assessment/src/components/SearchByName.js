import React, { Component } from 'react';
import { Formik, Form,Field } from 'formik';
import ProductDataService from '../service/ProductDataService';
import ProductComponent from './ProductComponent';
import ListProductComponent from './ListProductComponent';

class SearchByName extends Component {
    constructor(props){
        super(props)
        this.state=({
            productName:'',
            productId:'',
            quantityOnHand:'',
            price:'',
            product:[]
        })
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(values){
        ProductDataService.searchProductByName(values.productName).then(
            
            response=>{
                this.setState({
                    product:response.data
                })
                
                
                
                
                
                // this.state.product.map(temp=>{
                //     this.setState({
                    
                //         productId:temp.productId,
                //         quantityOnHand:temp.quantityOnHand,
                //         price:temp.price
                        
                //     })

                // })
               
                
            }
        )

    }
    render() {
        let{productName}=this.state
        return (
            <div>
                <div className="container">
                    <h2>Search Product By Name</h2>
                    <Formik  initialValues={{productName}}
                  enableReinitialize={true} onSubmit={this.onSubmit} validateOnChange= {false} validateOnBlur={false} validate={this.validateProductForm}>
                      <Form>
                       <fieldset className="form-group">
                          <label>Enter Name of Product To be searched</label>
                          <Field className="form-control" type="text" name="productName" />
                      </fieldset>
                      <button className="btn btn-success " type="submit">Search</button>
                      </Form>

                    </Formik>
                    <table className="table table-striped table-dark table-hover">
  <thead>
    <tr>
      <th>Product Id</th>
      <th>Product Name</th>
      <th>Quantity On Hand</th>
      <th>Price</th>
      
      
      
    </tr>
  </thead>
  <tbody>
      {
      this.state.product.map(product =>
    <tr key={product.productId}> 
        <td>{product.productId}</td>
      <td>{product.productName}</td>
      <td>{product.quantityOnHand}</td>
      <td>{product.price}</td>
      
    </tr>
      )
      }
  </tbody>
  
</table>
                </div>
            </div>
        );
    }
}

export default SearchByName;