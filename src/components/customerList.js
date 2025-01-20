import React from "react";
import PropTypes from "prop-types";
import CustomerCard from "./customerCard";
const CustomerList = ({ customers, loading }) => {
  if (loading) {
    return <p>Loading customers...</p>;
  }

  return (
    <div className="customer-list">
      <h2>Customer List</h2>
      {customers.length === 0 ? (
        <p>No customers available!</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {customers.map((customer) => (
            <CustomerCard key={customer.id} customer={customer} />
          ))}
        </div>
      )}
    </div>
  );
};
CustomerList.propTypes = {
  customers: PropTypes.array,
  loading: PropTypes.bool,
};

export default CustomerList;
