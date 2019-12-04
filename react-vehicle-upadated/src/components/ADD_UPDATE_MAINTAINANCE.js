import React, { Component } from 'react';
import { Formik, Field,Form, ErrorMessage } from 'formik';
import ProductService from '../service/ProductService'

class ADD_UPDATE_MAINTAINANCE extends Component {
    constructor(props){
        super(props)
        console.log(this.props.match.params.uid)
        this.state=({
            maintainID:this.props.match.params.mid,
            userID:this.props.match.params.uid,
            vehicleName:'',
            service:'',
            date:'',
            mileage:'',
            disabled:true,
            btntext:'UPDATE',
            title:'UPDATE Maintainance List',
            show:false,
            logic:false,
            message:""
            
        })
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(value){
        console.log("Inside onSubmit")
        console.log(value);
        

        if(this.state.maintainID==value.maintainID){
            ProductService.updateMaintainance(this.state.maintainID,this.state.userID,value).then(
                response=>{
                    if(response.status==200){
                    this.setState({
                        logic:true,
                        message:"Your data has been successfully updated"
                    })}
                    this.props.history.push(`/user/${this.state.userID}`)
    
                }
            )
         
        }
        else{
            ProductService.addMaintainance(this.state.userID,value).then(
                response=>{
                    if(response.status==200){
                    this.setState({
                        logic:true,
                        message:"Your data has been successfully Added"
                    })}
                    this.props.history.push(`/user/${this.state.userID}`)
    
                }
            )
        }
        
     
          this.setState({
              show:true
          })

    }
   
    componentWillMount(){
        
        ProductService.getMaintainace(this.state.userID,this.state.maintainID).then(
            response =>{
                console.log("get maintainance is working")
                console.log(response.data)
                response.data.map(maintain=>
                    
                this.setState({
                    vehicleName:maintain.vehicleName,
                    service:maintain.service,
                    date:maintain.date,
                    mileage:maintain.mileage
                })
                )
                // console.log(response)
                // this.setState({
                //         vehicleName:response.data.vehicleName,
                //         service:response.data.service,
                //         date:response.data.date,
                //         mileage:response.data.mileage
                //     })
                // console.log(this.state.vehicleName)
                
            }
            
        )
        if(!this.state.maintainID){
            this.setState({
                btntext:"ADD",
                disabled:false,
                title:"ADD Maintainance Record"
            })
        }

    }
    render() {let {maintainID,vehicleName,service,date,mileage}=this.state
        return (
            <div>
                 <div className="container">
                    <h2>{this.state.title}</h2>
        {this.state.logic &&<div className="alert alert-success">{this.state.message}</div> }
              <Formik
                  initialValues={{maintainID,vehicleName,service,date,mileage}}
                  enableReinitialize={true} onSubmit={this.onSubmit} validateOnChange= {false} validateOnBlur={false} validate={this.validateMaintainanceForm}>
                      
                  <Form>
                  {/* <ErrorMessage name="productId" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="productName" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="quantityOnHand" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="price" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="message" component="div" className="alert alert-warning"/> */}
                      <fieldset className="form-group">
                          
                          <label>Maintain ID</label>
                          <Field className="form-control" type="text" name="maintainID" disabled={this.state.disabled} />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>Vehicle Name</label>
                          <Field className="form-control" type="text" name="vehicleName" />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>service</label>
                          <Field className="form-control" type="text" name="service" />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>date</label>
                          <Field className="form-control" type="text" name="date" />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>Mileage</label>
                          <Field className="form-control" type="text" name="mileage" />
                      </fieldset>
                      
                      <button className="btn btn-success float-left" type="submit">{this.state.btntext}</button>
                      
                      
                    
                    
                      
                  </Form>
              </Formik>
              </div>
              
            </div>
        );
    }
}

export default ADD_UPDATE_MAINTAINANCE;