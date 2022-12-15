import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { Table } from "./components/Table";

import { fetchProducts } from "./redux/product/asyncThunk";
import { selectProductData } from "./redux/product/selectors";
import { selectFilter } from "./redux/filters/selectors";
import { useAppDispatch, useAppSelector } from "./redux/store";

import "./scss/app.scss";

function App() {
  const dispatch = useAppDispatch();

  const { products, status } = useAppSelector(selectProductData);
  const { searchValue } = useAppSelector(selectFilter);

  React.useEffect(() => {
    async function getProducts() {
      dispatch(
        fetchProducts({
          searchValue,
        })
      );
    }

    getProducts();
  }, [searchValue, dispatch]);

  console.log(products, status);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Search />
        <Table />
        <Footer />
      </div>
    </div>
  );
}

export default App;
