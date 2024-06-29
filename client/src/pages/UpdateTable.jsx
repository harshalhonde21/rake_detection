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

            <th rowSpan={2} colSpan={4}>
              REASON FOR DELAY/LESS UNLOADING
            </th>
            <th colSpan={3}>DOWNTIME ANALYSIS</th>
          </tr>
          <tr>
            <th>DEECT TIME</th>
            <th>SYSTEM START TIME</th>
            <th>TOTAL TIME</th>
          </tr>
          <tr>
            <td>
              <b>
                FIRST WAGON <br /> UNLOADED DATE & TIME
              </b>
            </td>
            <td colSpan={4}></td>
            <td colSpan={4}></td>
            <td></td>
            <td></td>

            <td></td>
          </tr>
          {[...Array(10)].map((x, i) => (
            // <ObjectRow key={i} />
            <tr>
              <td ><b>{i + 1} Hr</b></td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td  colSpan={4}></td>
              <td ></td>
              <td ></td>
              <td ></td>
            </tr>
          ))}
          <tr>
            <td rowSpan={2}><b>RELEASE <br /> DATE/TIME</b></td>
            <td rowSpan={2} colSpan={4}></td>
            <td colSpan={4}><b>DETENTION HRS.:</b></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}><b>DEMURRAGE HRS.</b></td>

            <td colSpan={3}></td>
          </tr>
          <tr >

            <td ><b>REMARKS(IF ANY)</b></td>
            <td colSpan={11} ></td>

          </tr>
        </table>
      </div>
    </>
  );
}
