import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableComponent from './tablecomponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Main} from 'react-router'


class table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        theading:[
            {
                key:'name',
                value:'Name'
            },
            {
                key:'age',
                value:'Age'
            },
            {
                key:'dob',
                value:'Date of birth'
            }
         
        ],
        tableData:[
            {
             name:'test1',
             age:10,
             dob:'feb-5-2018'
           },
           {
            name:'test2',
            age:20,
            dob:'feb-5-2018'
          },
          
    ]
        };
      }

      addTableData(test){
          console.log(test);
          var tableData=this.state.tableData;
          tableData.push(test);
          this.setState({tableData:tableData});
      }
    render() {
  return (
      <div>
     <h1>I am a parent page</h1>
     <TableComponent heading={this.state.theading} data={this.state.tableData} addButton={true} 
     addData={this.addTableData.bind(this)}/>
</div>
)
}
}
export default table;


