import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { calculateRewardPoints } from "../utils/calculateRewardsPoint";
import { FaArrowLeftLong } from "react-icons/fa6";
const CustomerDetails = ({ customers }) => {
  const navigate = useNavigate();
  const { customerId } = useParams();
  const customer = customers.find((customer) => customer.id === customerId);

  if (!customer) {
    return <p>Customer not found!</p>;
  }

  const goBack = () => {
    navigate("/customers");
  };

  return (
    <div className="customer-details">
      <div className="back-btn">
        <h3>
          <FaArrowLeftLong onClick={goBack} />
        </h3>
        <div
          style={{
            paddingLeft: "5px",
            textAlign: "center",
            width: "-webkit-fill-available",
          }}
        >
          <h3>{customer.name}</h3>
        </div>
      </div>
      <p>
        <strong>Email:</strong> {customer.email}
      </p>
      <p>
        <strong>Total Rewards Points:</strong> {customer.totalPoints}
      </p>

      <h4>Transactions:</h4>
      {customer.transactions && customer.transactions.length > 0 ? (
        customer.transactions.map((transaction, index) => (
          <div key={index} className="transaction-item">
            <p>
              <strong>Amount:</strong> ${transaction.amount}
            </p>
            <p>
              <strong>Date:</strong> {transaction.date}
            </p>
            <p>
              <strong>Points Earned:</strong>{" "}
              {calculateRewardPoints(transaction.amount)}
            </p>
          </div>
        ))
      ) : (
        <p>No transactions available!</p>
      )}
    </div>
  );
};

export default CustomerDetails;
