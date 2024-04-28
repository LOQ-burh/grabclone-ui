import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// const PageHome = React.lazy(() => import("./pages/Homes"));
// const PagePromos = React.lazy(() => import("./pages/Promos"));
// const PageRes = React.lazy(() => import("./pages/Restaurant"));
// const PageCheckout = React.lazy(() => import("./pages/Checkout"));
import Home from "./pages/Homes";
import Promos from "./pages/Promos";
import Res from "./pages/Restaurant";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promostion" element={<Promos />} />
          <Route path="/restaurant" element={<Res />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
