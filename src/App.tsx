import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Table } from "./components/Table";

import { fetchProducts } from "./redux/product/asyncThunk";
import { useAppDispatch } from "./redux/store";

import "./scss/app.scss";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    async function getProducts() {
      dispatch(fetchProducts());
    }

    getProducts();
  }, [dispatch]);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Table />
        <Footer />
      </div>
    </div>
  );
}

export default App;
