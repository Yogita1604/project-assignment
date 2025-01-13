import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import CustomerList from "./components/customerList";
import CustomerDetails from "./components/customerDetails";
import Home from "./components/home";
import About from "./components/about";
import CustomerInput from "./components/customerInput";

import { calculateTotalPoints } from "./utils/calculateRewardsPoint";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/dummyData.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const updatedCustomers = data.map((customer) => {
            const totalPoints = customer.transactions
              ? calculateTotalPoints(customer.transactions)
              : 0;
            return { ...customer, totalPoints };
          });
          setCustomers(updatedCustomers);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="app">
        <header>
          <nav>
            <div className="brand-container">
              <img
                src="/logo192.png"
                alt="Retailer Rewards Logo"
                className="logo"
              />
              <div className="app-name">Retailer Rewards </div>
            </div>
            <Link to="/">Home</Link>
            <Link to="/customers">Customer List</Link>
            <Link to="/customer-rewards">Customer Rewards</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home customers={customers} />} />
            <Route
              path="/customers"
              element={<CustomerList customers={customers} loading={loading} />}
            />
            <Route
              path="/customers/:customerId"
              element={<CustomerDetails customers={customers} />}
            />
            <Route path="/customer-rewards" element={<CustomerInput />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
