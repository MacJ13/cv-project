// const Controls = (props) => {
//   return (
//     <div className="controls">
//       <button id="btn-load" onClick={props.onClickLoad} className="control-btn">
//         Load Example
//       </button>
//       <button
//         id="btn-reset"
//         onClick={props.onClickReset}
//         className="control-btn"
//       >
//         Reset All
//       </button>
//       <button id="btn-pdf" className="control-btn">
//         Create PDF
//       </button>
//     </div>
//   );
// };

import React from "react";
import ReactToPrint from "react-to-print";

const Controls = (props) => {
  return (
    <div className="controls">
      <button id="btn-load" onClick={props.onClickLoad} className="control-btn">
        Load Example
      </button>
      <button
        id="btn-reset"
        onClick={props.onClickReset}
        className="control-btn"
      >
        Reset All{" "}
      </button>
      <ReactToPrint
        documentTitle="Simple CV"
        trigger={() => {
          return (
            <button id="btn-pdf" className="control-btn">
              Create PDF
            </button>
          );
        }}
        content={() => props.resumeTag.current}
      />
    </div>
  );
};

// class Controls extends React.Component {
//   componentDidMount() {
//     // console.log(this.props.resumeTag.current);
//     // console.log(this.props.resumeTag);
//   }
//   render() {
//     return (
//       <div className="controls">
//         <button
//           id="btn-load"
//           onClick={this.props.onClickLoad}
//           className="control-btn"
//         >
//           Load Example
//         </button>
//         <button
//           id="btn-reset"
//           onClick={this.props.onClickReset}
//           className="control-btn"
//         >
//           Reset All{" "}
//         </button>
//         {/* <ReactToPrint
//           documentTitle="Simple CV"
//           trigger={() => {
//             return (
//               <button id="btn-pdf" className="control-btn">
//                 Create PDF
//               </button>
//             );
//           }}
//           content={() => this.props.resumeTag.current}
//         /> */}
//         <button id="btn-pdf" className="control-btn">
//           Create PDF
//         </button>
//       </div>
//     );
//   }
// }

export default Controls;
