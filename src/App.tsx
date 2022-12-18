import React from "react";

import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { PopupMessage } from "./components/PopupMessage";
import { Footer } from "./components/Footer";

import { useAppDispatch } from "./redux/store";
import { fetchProducts } from "./redux/product/asyncThunk";

import "./scss/app.scss";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <main>
        <Table />
        <PopupMessage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
