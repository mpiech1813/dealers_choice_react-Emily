import React from 'react';

const Customers = (props) => {
  return (
    <div className="customers">
      <ul className="customer">
      {props.customers.map((customer) => {
        return (
          <div key={customer.id} className={customer.name}>
            {customer.name}
            <li> {customer.name} </li>
          </div>
        )
      })}
      </ul>
    </div>
  )
}

export default Customers;
