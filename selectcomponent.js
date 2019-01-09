import  React from 'react';
import ReactDOM from 'react-dom';


class Selectcomponent extends React.Component{
    
    constructor(props){
        super(props);
        this.onChangeFunc = this.onChangeFunc.bind(this);
       
        
    }
    onChangeFunc() {
       
        var x = document.getElementById("dropdown").value;
        
        
      
        alert(this.props.labelName+","+this.props.optionValue);
        
      }
     
    
    
    render(){
        console.log(this.props);
       
        const optionDetails=this.props.optionValue.map(optionValue =>
        <option>{optionValue}</option>
          );
        return(
<div>
    
            <label for="country ">{this.props.labelName } </label>
            
            
                    <select id = "dropdown" onChange={this.onChangeFunc}>
                <option value="null"></option>
    
      

            {optionDetails}
            
              
            </select>
            </div>


        )
    }
}
export default Selectcomponent;