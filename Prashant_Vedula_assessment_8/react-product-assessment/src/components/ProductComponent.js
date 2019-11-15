import React, { Component } from 'react';
import ProductDataService from '../service/ProductDataService';
import { Formik, Field,Form, ErrorMessage } from 'formik';


class ProductComponent extends Component {
    constructor(props){
        super(props)
        this.state=({
            productId:this.props.match.params.prodID,
            productName:'',
            quantityOnHand:'',
            price:'',
            disabled:true,
            btntext:'UPDATE',
            title:'UPDATE PRODUCTS',
            show:false
        })
        this.onSubmit=this.onSubmit.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.validateProductForm=this.validateProductForm.bind(this)

    }
    componentWillMount(){
        ProductDataService.getProduct(this.state.productId).then(
            response =>{
                console.log(response.data)
                
                this.setState({
                    productName:response.data.productName,
                    quantityOnHand:response.data.quantityOnHand,
                     price:response.data.price
                })
                
            }
            
        )
        if(!this.state.productId){
            this.setState({
                btntext:"ADD",
                disabled:false,
                title:"ADD PRODUCTS"
            })
        }

    }
    onSubmit(product){
        console.log(product);
        

        if(this.state.productId==product.productId){
            ProductDataService.updateProduct(product)
        }
        else{
            ProductDataService.addProduct(product)
        }
        
     
          this.setState({
              show:true
          })
      
        
    }
    handleClick(){
        console.log("handleclick is working")
        this.props.history.push(`/product`)
    }
    validateProductForm(values){
        let errors={}
        if(!values.productId){
            errors.productId="Enter a Product ID"
        }
        else if(!values.productName)
        errors.productName="Enter a Product Name"
        else if(values.productName.length<5)
        errors.productName=" Product Name should be greater than 5"
        else if(!values.quantityOnHand)
        errors.quantityOnHand="Enter  Quantity On Hand"
        else if(!values.price)
        errors.price="Enter  Price"
        else if(values.price<0)
        errors.price="Price entered is negative"
        else if(values.quantityOnHand<0)
        errors.quantityOnHand="Quantity On Hand entered is negative"
      
       
        return errors



    }
    
    render() {
        let {productId,productName,quantityOnHand,price}=this.state
        

        return (
            <div>
                <div className="container">
                    <h2>{this.state.title}</h2>
              <Formik
                  initialValues={{productId,productName,quantityOnHand,price}}
                  enableReinitialize={true} onSubmit={this.onSubmit} validateOnChange= {false} validateOnBlur={false} validate={this.validateProductForm}>
                      
                  <Form>
                  <ErrorMessage name="productId" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="productName" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="quantityOnHand" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="price" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="message" component="div" className="alert alert-warning"/>
                      <fieldset className="form-group">
                          
                          <label>Product Id</label>
                          <Field className="form-control" type="text" name="productId" disabled={this.state.disabled} />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>Product Name</label>
                          <Field className="form-control" type="text" name="productName" />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>Quantity On Hand</label>
                          <Field className="form-control" type="text" name="quantityOnHand" />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>price</label>
                          <Field className="form-control" type="text" name="price" />
                      </fieldset>
                      
                      <button className="btn btn-success float-left" type="submit">{this.state.btntext}</button>
                      {this.state.show?<button className="btn btn-success float-right" type="submit" onClick={()=>this.handleClick()}>Go Back</button>:''}
                      
                    
                    
                      
                  </Form>
              </Formik>
              </div>
              
            </div>
        );
    }
}




export default ProductComponent;

