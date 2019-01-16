import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Selectcomponent extends React.Component{
    
    constructor(props){
        super(props);
        this.onChangeFunc = this.onChangeFunc.bind(this);
       
        
    }
    onChangeFunc(event) {
        // this.refs.App.getAlert()
       // var x = document.getElementById("dropdown").value;
       // alert(this.props.labelName+","+x);
//console.log(x);
       this.props.getOption(this.props.labelName,event);
       //alert(this.props.labelName+","+this.props.getOption)
       
    
     }
     
    render(){
        console.log(this.props);
       
        const optionDetails=this.props.optionValue.map(optionValue =>
        <option>{optionValue}</option>
          );
        return(
<div>
    
                <label for="country ">{this.props.labelName} </label>
                <select id="dropdown" onChange={this.onChangeFunc.bind(this)}>
                    <option value="null"></option>
                     {optionDetails}
                </select>
</div>


               )
             }
}
export default Selectcomponent;




