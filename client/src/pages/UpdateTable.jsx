import React from "react";
import "../Styles/UpdateTable.css";
export default function UpdateTable() {
  return (
    <>
      <div className="update-table">
        <table>
          <tr>
            <th rowSpan={2}>UNLOADING HRS</th>
            <th rowSpan={2}>WT1</th>
            <th rowSpan={2}>WT2</th>
            <th rowSpan={2}>WT3</th>
            <th rowSpan={2}>WT4</th>

            <th rowSpan={2}>REASON FOR DELAY/LESS UNLOADING</th>
            {/* <th>DOWNTIME ANALYSIS</th> */}
            <tr >
              <th>DOWNTIME ANALYSIS</th>
            

            </tr>
          </tr>

          {[...Array(20)].map((x, i) => (
            // <ObjectRow key={i} />
            <tr>
              <td>{i + 1}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
