import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../../assests/images/zencodelogo.png';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.state = {
            fields: {},
            errors: {}
        }

    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


         //username
         if(!fields["username"]){
            formIsValid = false;
            errors["username"] = "This field is required";
          }
    
        //pwd
        if(!fields["password"]){
          formIsValid = false;
          errors["password"] = "This field is required";
        }
    
        if(typeof fields["password"] !== "undefined"){
          if(!fields["password"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["password"] = "Only letters";
          }      	
        }
       
    
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
            errors["email"] = "Email is not valid";
          }
        }
        this.setState({errors: errors});
        return formIsValid;
      }
    handleChange(field,event){
        let fields = this.state.fields;
        fields[field] = event.target.value;        
        this.setState({fields});
    }
    handleSubmit(event){
        event.preventDefault();
            if(this.handleValidation()){
              console.log(this.state.fields);
               alert("Account created ");
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
    <h1>SIGN UP</h1>
</div>
             <form  class="" onSubmit={this.handleSubmit} noValidate >
             <div class="form-group" >
     <label for="username">First name :</label>
     <input type="username" class="form-control" id="username" placeholder="Enter firstname" name="username" value={this.state.fields["username"]} onChange={this.handleChange.bind(this, "username")}/>
     <span style={{color: "red"}}>{this.state.errors["username"]}</span>
   </div>
   <div class="form-group" >
     <label for="username">Last name :</label>
     <input type="username" class="form-control" id="username" placeholder="Enter lastname" name="username" value={this.state.fields["username"]} onChange={this.handleChange.bind(this, "username")}/>
     <span style={{color: "red"}}>{this.state.errors["username"]}</span>
   </div>
           <div class="form-group" >
     <label for="email">Email:</label>
     <input type="email" class="form-control" id="email" placeholder="email@example.com" name="email" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")}/>
     <span style={{color: "red"}}>{this.state.errors["email"]}</span>
   </div>
   <div class="form-group">
     <label for="pwd">Password:</label>
     <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" value={this.state.fields["password"]} onChange={this.handleChange.bind(this, "password")}/>
     <span style={{color: "red"}}>{this.state.errors["password"]}</span><br></br>
   
     <button type="submit" class="btn btn-primary" >Create Account</button><br></br><br></br>
     <Link to="/login">LOG IN</Link>
   </div>
   </form>
   </div>
   </div>
   </div>
        
    );
}
}
export default Signup; 