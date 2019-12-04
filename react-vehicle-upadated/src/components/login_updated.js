import React, { Component } from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import ProductService from '../service/ProductService';

class login_updated extends Component {

    constructor(props){
        super(props)
    
        this.state = ({
            email:'',
            password:'',
            signUp:'',
            value:"option"
        })
        this.maintenanceClicked=this.maintenanceClicked.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.sleep=this.sleep.bind(this)
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    async  sleep(msec) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }

    async maintenanceClicked(event){
        console.log("inside handleClick")
        
        console.log(event)
        
        ProductService.login(event.email).then(
            response=>{
                console.log(response.data)
                if(this.state.value=="dealer"){
                    this.props.history.push(`/dealer`)
                  }
                  else{
                    
                    this.props.history.push(`/user/${response.data}`)
              
                  }

            }
        )
        
        console.log("Inside Submit")
        
        if(this.state.value=="dealer"){
            this.props.history.push(`/dealer`)
          }
          else{
            this.props.history.push(`/user/${this.state.userID}`)
      
          }
            
    }
        
   

    validateForm(values){
        let errors={}
        
        if(!values.email){
            errors.email='please enter email'
        }
        else if(!values.password){
            errors.password='please enter password'
        }
        else if(values.signUp=="option"){
            errors.signUp='please select any one of the options'
        }
        console.log(errors)
        return errors
      }
    render() {
        let {  email, password,signUp} = this.state
        return (
            <div className="hello">
            <div className="container">
                <h1>Welcome</h1>
                <div class ="col-md-4 " align="center">
                   

                
                <Formik
                initialValues={{ email, password,signUp}}
               
                enableReinitialize={true} onSubmit={this.maintenanceClicked} validateOnChange= {false} validateOnBlur={false} validate={this.validateForm}>
                    <Form>
                    <h2>Login </h2>
 
                <ErrorMessage name="email" component="div"
                className = "alert alert-warning"></ErrorMessage>
                <ErrorMessage name="password" component="div"
                className = "alert alert-warning"></ErrorMessage>
                <ErrorMessage name="signUp" component="div"
                className = "alert alert-warning"></ErrorMessage>


                    <fieldset className="form-group">
                              <label>Email</label>
                              <Field className="form-control" type="email" name="email"placeholder="enter your email"></Field>
                    </fieldset>

                    <fieldset className="form-group">
                              <label>Password </label>
                              <Field className="form-control" type="password" name="password" placeholder="enter your password"></Field>
                     </fieldset>
                     <fieldset className="form-group">
                     <label>Sign up as</label>
                     <Field className="form-control" id="myClass" as="select" name="signUp" value={this.state.value} onChange={this.handleChange}  placeholder="please select">
                              <option value="option">Please select an option</option>
                              <option value="dealer">Dealer</option>
                              <option value="user">User</option>    
                     </Field>
                    </fieldset>
                     <div>
                         <td>
                               <button className="btn btn-success"id="button" type="submit" >Login</button>
                          </td>
                          {/* <td>
                               <button className="btn-btn-primary" id="button" onClick = {() => this.Redirect()}>Sign Up</button>
                          </td> */}
                     </div> 
                     
                         
                     
                    </Form>
                </Formik>
                </div>  
            </div>
            </div>
        );
    }
}

export default login_updated;