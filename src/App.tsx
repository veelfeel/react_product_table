import React from "react";

import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { CancelButton } from "./components/CancelButton";
import { PopupMessage } from "./components/PopupMessage";
import { Footer } from "./components/Footer";

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
    <div className="container">
      <Header />
      <Table />
      <CancelButton />
      <PopupMessage />
      <Footer />
    </div>
  );
}

export default App;
