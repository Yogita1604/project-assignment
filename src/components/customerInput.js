import React, { useState } from "react";
import { calculateRewardPoints } from "../utils/calculateRewardsPoint";

const CustomerInput = () => {
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const [points, setPoints] = useState(0);

  const calculatePoints = () => {
    const amount = parseFloat(purchaseAmount);
    if (isNaN(amount) || amount < 0) {
      setPoints(0);
      return;
    }
    let totalPoints = calculateRewardPoints(amount);
    setPoints(totalPoints);
  };

  return (
    <div className="customer-input">
      <div className="input-block">
        <h2>Rewards Program</h2>
        <div>
          <label htmlFor="purchaseAmount">Enter Purchase Amount ($): </label>
          <input
            type="number"
            id="purchaseAmount"
            value={purchaseAmount}
            onChange={(e) => setPurchaseAmount(e.target.value)}
            placeholder="Enter purchase amount"
            min="0"
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button onClick={calculatePoints}>Calculate Points</button>
        </div>

        {points !== null && (
          <div>
            <h3>You earned {points} points.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerInput;
