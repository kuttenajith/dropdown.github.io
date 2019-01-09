import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Selectcomponent from './component/selectcomponent';





class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {

         countryarray:['india','pakistan','china','america'],
         occupationarray:['teacher','doctor','lawyer','loose'],
        fields: {},
        errors: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleValidation = this.handleValidation.bind(this);
      
     
      
     
      }
      
     
   
  handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters will be allowed";
           }        
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
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

  contactSubmit(event){
        event.preventDefault();

        if(this.handleValidation()){
           alert("Form submitted");
        }else{
           alert("Form has errors.")
        }

  }

  handleChange(field, event){         
      let fields = this.state.fields;
      fields[field] = event.target.value;        
      this.setState({fields});
  }
  handleSubmit(event) {
    alert("form was submitted");
    event.preventDefault();
  }

  

 


   render() {
      return (
<div>    
         
            
<div className="col-md-6"> 
        <form name="contactform" className="col-md-6" onSubmit= {this.contactSubmit.bind(this)}>
       
      
      
                <label for="name">Name: </label>
                <input type="text" id="name" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                    <span style={{color: "red"}}>{this.state.errors["name"]}</span><br></br>
                  
                    <label for="email">Email: </label>
                <input type="text" id="email" placeholder="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                    <span style={{color: "red"}}>{this.state.errors["email"]}</span><br></br>


<Selectcomponent labelName="country" optionValue={this.state.countryarray} /> 
<Selectcomponent labelName="occupation" optionValue={this.state.occupationarray} /> 

      
              
              <button onChange = {this.handleSubmit}>SUBMIT</button>
                 
              </form> 
          
            </div>
    
              </div>
      );
   }
   }
   


    export default App;







