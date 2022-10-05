// import { useRef } from "react";
// // import { utils, writeFile } from 'xlsx';

// export default function ReactTable() {
//   const tbl = useRef(null);

//   return ( <>
//     <button onClick={() => {
//       import('xlsx').then(({ utils, writeFile }) => {
//         const wb = utils.table_to_book(tbl.current);
//         writeFile(wb, "ReactTable.xlsx");
//       })
//     }}>Export</button>
//     <table ref={tbl}>
//       <tr>
//         <td>A</td>
//         <td>B</td>
//         <td>C</td>
//       </tr>
//     </table>
//   </>);
// }

import { useRef } from "react";
import { utils, writeFile } from 'xlsx';

export default function ReactTable() {
  const tbl = useRef(null);

  return ( <>
    <button onClick={() => {
      const wb = utils.table_to_book(tbl.current);
      writeFile(wb, "ReactTable.xlsx");
    }}>Export</button>
    <table ref={tbl}>
      <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
      </tr>
    </table>
  </>);
}
