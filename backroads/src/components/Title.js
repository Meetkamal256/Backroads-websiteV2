import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title}
        <span>{subTitle}</span>
      </h2>
    </div>
  );
};



// function Title({ title, subTitle }) {
//   return (
//     <div className="section-title">
//       <h2>
//         {title}
//         <span>{subTitle}</span>
//       </h2>
//     </div>
//   );
// };



// function Title(props) {
//   return (
//     <div className="section-title">
//       <h2>
//         {props.title}
//         <span>{props.subTitle}</span>
//       </h2>
//     </div>
//   );
// }

export default Title;

