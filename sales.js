import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class sales extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
      <div className="container">
      <div className="col-md-6">

      <form  class="" onSubmit={this.handleSubmit} noValidate >
   <div class="form-group" >
     <label for="email">Email:</label>
     <input type="email" class="form-control" id="email" placeholder="Enter Email" name="email" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")}/>
     <span style={{color: "red"}}>{this.state.errors["email"]}</span>
   </div>
   <Link to="/upload">UPLOAD</Link>
   </form>
      </div>
      </div>
        </div>
        );
    }
}