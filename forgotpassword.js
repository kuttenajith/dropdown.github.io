import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../../assests/images/zencodelogo.png';

//import { BrowserRouter as Link } from "react-router-dom";


class Forgotpassword extends React.Component {
    constructor (props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation=this.handleValidation.bind(this);
        this.state = {
          fields: {},
          errors: {}
      }
    }
    handleChange(field,event){
        let fields = this.state.fields;
        fields[field] = event.target.value;        
        this.setState({fields});
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        
        //email
        if(!fields["email"]){
          formIsValid = false;
          errors["email"] = "This field is required";
        }
    
        if(typeof fields["email"] !== "undefined"){
          let lastAtPos = fields["email"].lastIndexOf('@');
          let lastDotPos = fields["email"].lastIndexOf('.');
    
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "This field is required";
          }
        }
    
    
        this.setState({errors: errors});
        return formIsValid;
      }
    handleSubmit(event) {
        event.preventDefault();
            if(this.handleValidation()){
              console.log(this.state.fields);
               alert("recovery mail sent ");
            }else{
               alert("Form has errors.")
            }
    
      }
render(){
    return(
       <div>
            <div className="container">
            <div className="col-md-6">
            <img src={logo} alt="Logo"/>
            <div>
              <h3>Forgot password</h3>
            </div>

      <form  class="" onSubmit={this.handleSubmit} noValidate >
    <div class="form-group" ><br></br>
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="email@example.com" name="email" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")}/>
      <span style={{color: "red"}}>{this.state.errors["email"]}</span>
    </div>
    <button type="submit" class="btn btn-primary" >send a recovery mail</button><br></br><br></br>
    <Link to="/login">LOG IN</Link>
    </form>
      </div>
      </div>
   
    </div>
        
        );

}
    }

export default Forgotpassword; 