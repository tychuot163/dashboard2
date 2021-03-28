import React from "react";
import "./styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import COLORS from "./constants/colors";
import Dashboard from "./app/dashboard/Dashboard";
import Navigation from "./app/navigation/Navigation";
import Header from "./app/header/Header";
import Shops from "./app/shops/Shops";
import Product from "./app/product/Product";
import Sales from "./app/sales/Sales";
import Reports from "./app/reports/Reports";
import Settings from "./app/settings/Settings";

// https://sk.pinterest.com/pin/813040538963536152/visual-search/?cropSource=6&h=671&w=530&x=23&y=189.81599999999992

const Container = styled.div`
  background-color: ${COLORS.mainBackground};
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 50px;
`;

export default function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/shops">
            <Shops />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
