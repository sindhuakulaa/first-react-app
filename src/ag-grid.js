import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css'

const AGGrid = () => {
   const rowData = [
       {make: "Toyota", model: "Celica", price: 35000},
       {make: "Ford", model: "Mondeo", price: 32000},
       {make: "Porsche", model: "Boxter", price: 72000}
   ];


   
    // define 3 columns
    const options = {
        domLayout: 'autoHeight',
        enableFilter: true,
        columnDefs: [
            {
                field: 'fruit',
                headerName: 'Fruit',
                editable: true,
                cellClass: 'first-cell',
                filter: 'multiSelectFilter',
            },
            {
                field: 'citrus',
                headerName: 'Citrus ?',
                            }
        ],
        rowData: [
            { fruit: 'lemon', citrus: true },
            { fruit: 'orange', citrus: true },
            { fruit: 'grapefruit', citrus: true },
            { fruit: 'apple', citrus: false },
            { fruit: 'mangosteen', citrus: false },
            { fruit: 'durian', citrus: false },
        ],

    };

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact {...options} ></AgGridReact>
       </div>
   );
};
export default AGGrid;