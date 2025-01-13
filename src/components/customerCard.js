import React from "react";
import "./customeCard.css";
import { Link } from "react-router-dom";
const CustomerCard = ({ customer }) => {
  return (
    <div className="card-container">
      <div className="customer-card">
        <h2 className="customer-name">{customer.name}</h2>
        <p className="customer-email">{customer.email}</p>
        <div className="customer-details">
          <p>
            <strong>Reward Points :</strong> {customer.totalPoints}
          </p>
          <p>
            <strong>Phone:</strong> {customer.phone}
          </p>
          <p>
            <strong>Address:</strong> {customer.address.city}{" "}
            {customer.address.satte}, {customer.address.zip}
          </p>
          <p>
            <strong>Membership Status:</strong> {customer.membershipStatus}
          </p>
        </div>
        <div>
          <p>
            <Link to={`/customers/${customer.id}`}>View Transactions</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
