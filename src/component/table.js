import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DataTable,{ createTheme } from 'react-data-table-component';

class TableUsers extends Component {  
    constructor (props){
        super(props);
        this.state={
            data:null
        }
    }      
    getUsers =()=> {
        var that = this;
        const axios = require('axios');
        const url = 'http://127.0.0.1:8000/long/users'
        
        // Make a request
        axios.get(url)
        .then(function (response) {
            // handle success
            that.setState({
             data:response.data
            }
            );
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

    handleDetail= (id) => {
        console.log(id);
    }

    render() {
        const {data}=this.state;
        const columns = [
            {
                name: 'ID',
                selector: 'id',
                sortable: true,
            },
            {
                name: 'First name',
                selector: 'first_name',
                sortable: true,
            },
            {
                name: 'Last name',
                selector: 'last_name',
                sortable: true,
            },
            {
                name: 'Email',
                selector: 'email',
                sortable: true,
            },
            {
                name: 'Detail',
                selector: 'detail',
                sortable: true,
            },
            
            ];
            createTheme('solarized', {
                text: {
                  primary: '#268bd2',
                  secondary: '#2aa198',
                },
                background: {
                  default: '#f1f1f1',
                },
                context: {
                  background: '#cb4b16',
                  text: '#FFFFFF',
                },
                divider: {
                  default: '#073642',
                },
                action: {
                  button: 'rgba(0,0,0,.54)',
                  hover: 'rgba(0,0,0,.08)',
                  disabled: 'rgba(0,0,0,.12)',
                },
                pagination:{
                    pagination:true,
                    paginationPerPage:4
                }
              });
        var results =null;
        if(data){
            results = data.map((value,idx) =>{
                return( 
                    { 
                        id: value.id, 
                        first_name: value.first_name, 
                        last_name:value.last_name, 
                        email:value.email,
                        detail: <Button className="btn btn-success" onClick={()=>this.handleDetail(value.id)}>Detail</Button> 
                     }
                );
            });
            return (
                <div className="container text-center">
                    <Button className="btn btn-primary" onClick={this.getUsers}>GET USERS</Button>
                    <DataTable
                        title="USERS TABLE"
                        columns={columns}
                        data={results}
                        theme="solarized"
                    />                    
                </div>
            );
        }       
        
        return (
            <div className="container text-center">
                <Button className="btn btn-primary" onClick={this.getUsers}>
                    GET USERS
                </Button>                
            </div>
        );
        
    }
}
export default TableUsers;