    import React, { Component } from 'react';


class addresscomponent extends React.Component {
    constructor (props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addaddress=this.addaddress.bind(this);
        this.state = {
            fields: {},
            errors:{}
    }
   
}
addaddress(){
    var data={
        street:'shivan street',
        city:'bgl'
      }
      this.props.addaddress(data);
  }

    handleChange(field,event) {
        let fields = this.state.fields;
            fields[field] = event.target.value;        
            this.setState({fields});
      }
    render(){
        console.log(this.props);
        var headingKeys=this.props.heading;
        return(
            <div>
               
                {/* <div className="container">
               <div className="col-md-6">
               <form  class="" onChange={this.handleChange} >
      <h1>I am the address page </h1>
      {this.props.addButton ?<button onClick={this.addaddress}>Add Address</button>:''}
      {this.props.heading.map(function(column) {
           return key={column.key}>{column.value} })}
             { this.props.data.map(function(detail) {
            return (
             
                {headingKeys.map(function(column) {
                    var keyData=column['key'];
                  return {detail[keyData]}; })}
             ); })}
      <div class="text-area" >
     <label for="name">Address:</label>
     <input type="name" class="text-area" id="name"  name="name" value={this.state.fields["name"]} onChange={this.handleChange.bind(this, "name")}/>
     
   </div>
     </form>
     </div>
  
   </div> */}
            </div>
        )
    }
}
export default addresscomponent;
