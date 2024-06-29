import React from "react";
import "../Styles/Table.css";
export default function Table() {
  return (
    <>
      <div className="table">
        <table>
          <tr>
            <th>Rank No.</th>
            <th>Rank Arrival Time</th>
            <th>Company Name</th>
            <th>Arrival Date</th>
            <th>Siding</th>
            <th>Placement Date/Time</th>
            <th>Action</th>
          </tr>
          
          {[...Array(20)].map((x, i) =>
    // <ObjectRow key={i} />
    <tr>
            <td>{i+1}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>Action</button>
            </td>
          </tr>
  )}
        </table>
      </div>
    </>
  );
}
