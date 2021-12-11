import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';

import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Trainlist (){

  const [trains, setTrains] = useState([]);
  const [date, setDate] = useState('');

  var dayjs = require('dayjs');
  dayjs().format();

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
    .then(result => result.json())
    .then(data => setTrains(data.content))
    formatDate();
  }

  const formatDate = () => {
    var i = 0;
    console.log(trains);
    for (i=0 ; i<trains.length; i++) {
      setDate(trains[i].date)
      
      console.log(date + '' + i);
    }
  }

  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 'auto', margin: 'auto'}}>
           <AgGridReact
               rowData={trains}>
               <AgGridColumn field="date" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn field="duration" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn field="activity" sortable={ true } filter={ true }></AgGridColumn>
           </AgGridReact>
    </div>
  )
} 