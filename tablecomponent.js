import React, { Component } from 'react';



class TableComponent extends React.Component {
    constructor(props){
        super(props);
      this.state={};
      this.addData=this.addData.bind(this);
      }


      addData(){
        var data={
            name:'test4',
            age:10,
            dob:'feb-5-2067'
          }
          this.props.addData(data);
      }
    render() {
        console.log(this.props);
        var headingKeys=this.props.heading;
        // var tableData=this.props.data.map(function(detail) {
        //     return (
        //       <tr>
        //         {headingKeys.map(function(column) {
        //             var keyData=column['key'];
        //           return <td>{detail[keyData]}</td>; })}
        //       </tr>); });
  return (
      <div>
     <h2>I am a child page</h2>
    {this.props.addButton ?<button onClick={this.addData}>Add Row</button>:''}
     <table className="table-bordered">
     <thead>
     {this.props.heading.map(function(column) {
              return <th key={column.key}>{column.value}</th>; })}
     </thead>
     <tbody>
    { this.props.data.map(function(detail) {
            return (
              <tr>
                {headingKeys.map(function(column) {
                    var keyData=column['key'];
                  return <td>{detail[keyData]}</td>; })}
              </tr>); })}
     </tbody>

     </table>
</div>
)
}
}
export default TableComponent;