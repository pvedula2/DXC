import React, { Component } from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import '../App.css'

class login extends Component {
    constructor(props){
        super(props)
    
        this.state = ({
            name: '',
            email:'',
            password:'',
            phone:'',
            pinCode:'',
            signUp:'',
            value:'option'
        })
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("Inside handleChange")
    this.setState({value: event.target.value});
    console.log("Inside Handle Change the value is "+this.state.value)
    
  }

  handleSubmit(event) {
    alert('Entered value is: ' + this.state.value);
    if(this.state.value=="dealer"){
      this.props.history.push(`/dealer`)
    }
    else{
      this.props.history.push(`/user/${this.state.userID}`)

    }
    console.log(this.state.value)
  }
  


    validateForm(values){
      let errors={}
      if(!values.name){
          errors.name = 'please enter name'
      }
      else if(!values.email){
          errors.email='please enter email'
      }
      else if(!values.password){
          errors.password='please enter password'
      }
      else if(!values.phone){
          errors.phone='please enter your phone number'
      }
      else if(!values.pinCode){
          errors.pinCode='please enter pincode'
      }
      // else if(!values.signUp){
      //     errors.signUp='please select any one'
      // }
      else if(values.password.length<6){
          errors.password="password should not be less than 6"
      }
      console.log(errors)
      return errors
    }
    render() {
        let { name, email, password, phone, pinCode,signUp } = this.state
      return (
        <div className="container"> 
          <h1>App</h1>
         
              <div class = "col-md-4">
                 
                  <Formik
                   initialValues={{ name, email, password, phone, pinCode,signUp }}
                  enableReinitialize = "true"
                  validateOnChange={true}
                  validateOnBlur={false}
                  validate ={this.validateForm}
                  onSubmit={this.handleSubmit}
                  
                  >
                   
                      <Form>
                        <h2>Vehicle App</h2>
                      <ErrorMessage name="name" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="email" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="password" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="phone" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="pinCode" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="signUp" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        
                    


                      <fieldset className="form-group">
                              <label>Name</label>
                                 <Field className="form-control"  type="text" name="name" placeholder="enter your name"></Field>
                      </fieldset>
                          <fieldset className="form-group">
                              <label>Email</label>
                              <Field className="form-control" type="email" name="email"placeholder="enter your email"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Password </label>
                              <Field className="form-control" type="password" name="password" placeholder="enter your password"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label> Confirm Password </label>
                              <Field className="form-control" type="password" name="confirmPassword" placeholder="enter your password again"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Mobile Number</label>
                              <Field className="form-control" type="text" name="phone" placeholder="enter your mobile number"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Pincode</label>
                              <Field className="form-control" type="text" name="pinCode" placeholder = "enter pincode"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Sign up as</label>
                             <Field className="form-control" type ="dropdown" value={this.state.value}  as="select" name="signUp"  placeholder="please select" onChange={this.handleChange}>

                              <option value="option" >Please select an option</option>
                              <option value="dealer">Dealer</option>
                                <option value="user">User</option>
                              
                             </Field> 
                                {/* <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select> */}
                                
                              
                             
                            
                          </fieldset>
         
                        <div>
                          <button value={this.state.value} className="btn btn-success" type="submit">Sign up</button>
                        </div> 
                      </Form>
                  </Formik>
                </div>
              </div>
      );
}
}

export default login;