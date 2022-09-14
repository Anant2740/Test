import machineData from './machine.js';

let body = document.querySelector("body");
let rootDiv = document.createElement('div');
rootDiv.setAttribute("id", "table");
body.appendChild(rootDiv);

let myTable = document.querySelector("#table");

let headers_machine = [
  "MACHINE NAME",
  "MACHINE ID",
  "ENERGY CONSUMED (kWh)",
  "Active Power (MW)",
  "Aparent Power (MVA)",
  "Reactive Power (MVAr)",
  "Currents (Amps)",
  "Voltage (Volts)",
  "POWER FACTOR",
  "IDLE TIME"
];

const createaTableMachine = () => {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
  
    headers_machine.forEach((headerText, i) => {
      let header = document.createElement("th");
      if((i === 2) || (i === 9)){
        header.setAttribute("colspan","3");
      }
      else{
        header.setAttribute("rowspan","2");
      }
      let textNode = document.createTextNode(headerText);
      header.appendChild(textNode);
      headerRow.appendChild(header);
    });
    
    table.appendChild(headerRow);
    $(table).append(`<tr>
    <th>Today</th>
    <th>MTD</th>
    <th>YTD</th>
    <th>Today</th>
    <th>MTD</th>
    <th>YTD</th>
  </tr>`)
  
    machineData.forEach((emp) => {
      let row = document.createElement("tr");
  
      Object.values(emp).forEach((text) => {
        let cell = document.createElement("td");
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
      });
  
      table.appendChild(row);
    });
  
    myTable.appendChild(table);
  };

createaTableMachine();
