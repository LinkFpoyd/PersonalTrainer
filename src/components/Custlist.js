import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';

import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Custlist (){


  const [customers, setCustomers] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(result => result.json())
    .then(data => setCustomers(data.content))
  }




  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 'auto', margin: 'auto'}}>
           <AgGridReact
               rowData={customers}>
               <AgGridColumn headerName="First Name" field="firstname" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn headerName="Last Name" field="lastname" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn headerName="Street Address" field="streetaddress" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn headerName="Post code" field="postcode" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn headerName="City" field="city" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn headerName="E-mail" field="email" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn headerName="Phone" field="phone" sortable={ true } filter={ true }></AgGridColumn>
           </AgGridReact>
    </div>
  )
} 