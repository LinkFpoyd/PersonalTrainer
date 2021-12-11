import React, {useState, useEffect} from 'react';
import moment from 'moment';

import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Trainlist (){

  const [trains, setTrains] = useState([]);



  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
    .then(result => result.json())
    .then(data => setTrains(data.content))
  }


  const columns= [
    {field: "date", resizable: "true", sortable: "true", filter: "true", valueFormatter: (params) => {
      return moment(params.value).format('DD/MM/YYYY HH:mm')
  } },
    {headerName: "Duration (min)", field: "duration", sortable: "true", filter: "true" },
    {field: "activity", sortable: "true", filter: "true" }]


  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 'auto', margin: 'auto'}}>
           <AgGridReact
              columnDefs={columns}
              rowData={trains}>          
           </AgGridReact>
    </div>
  )
} 