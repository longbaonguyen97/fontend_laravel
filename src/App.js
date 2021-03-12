import React,{ Component } from 'react';
import './App.css';
import TableUsers from './component/table';
// import Mouse from './component/mouse';



class App extends Component{
 
  render(){
     return (
      <div className="container">
        <TableUsers/>
      </div>
      );
  }
 
}

export default App;
