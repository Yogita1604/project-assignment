import React from "react";
import { Link } from "react-router-dom";
import CustomerCard from "./customerCard";
import "./home.css";
const Home = ({ customers }) => {
  const recentCustomers = customers.slice(0, 3);
  return (
    <div className="homepage">
      <h2 className="text-align-center">Welcome to Retailer Rewards!</h2>
      <p>
        Our app helps you track reward points based on customer purchases.With
        every purchase, customers can earn reward points based on the amount
        spent.
      </p>
      <section>
        <div>
          <h2 className="text-align-center">Recent Customer</h2>
          {recentCustomers.length === 0 ? (
            <p>No Customer found</p>
          ) : (
            <div className="recent-customer">
              {recentCustomers.map((customer) => (
                <CustomerCard key={customer.id} customer={customer} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="all-customer-sec">
        <Link to="/customers">View All Customers</Link>
      </section>
    </div>
  );
};

export default Home;
