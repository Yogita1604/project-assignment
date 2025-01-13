import React from "react";

const About = () => {
  return (
    <div className="about">
      <h2>About Retailer Rewards</h2>
      <p>
        Retailer Rewards is an app designed to track the reward points of
        customers based on their purchases. The more a customer spends, the more
        points they earn!!
      </p>
      <h3>How It Works:</h3>
      <p>
        - Customers earn 2 points for every dollar spent over $100 in a
        transaction.
        <br />
        - They earn 1 point for every dollar spent between $50 and $100.
        <br />- We track their transactions and calculate points monthly.
      </p>
      <p>
        Visit the customer list page to see how much each customer has earned so
        far!
      </p>
    </div>
  );
};

export default About;
