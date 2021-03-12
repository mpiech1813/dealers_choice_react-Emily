import React from "react";
const Months = (props) => {
  console.log(props);
  return (
    <div className="months">
      {props.months.map((month) => {
        return (
          <div key={month.id} className={month.name}>
            <ul className="month">
              {month.name}
              <li> {month.flavor1} </li>
              <li> {month.flavor2} </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default Months;
