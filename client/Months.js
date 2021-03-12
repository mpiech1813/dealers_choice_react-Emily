import React from 'react';

const Months = (props) => {
  console.log(props)
  return (
    <div className="months">
    hello there!
    </div>
  )
}

export default Months


// {props.months.map((month) => {
//   return (
//     <div key={month.id} className={month.name}>
//       <ul className="month" style="list-style-type: none">
//         <li> {month.flavor1} </li>
//         <li> {month.flavor2} </li>
//       </ul>

//     </div>
//   )
// })}
