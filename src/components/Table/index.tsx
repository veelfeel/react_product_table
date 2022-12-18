import React from "react";
import { selectCancelProducts } from "../../redux/cancel/selectors";
import {
  addItem,
  removeItem,
  removeAllItems,
  addAllItems,
} from "../../redux/cancel/slice";
import { selectFilter } from "../../redux/filters/selectors";
import { selectProductData } from "../../redux/product/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { productSortSearch } from "../../utils/productSortSearch";

import styles from "./Table.module.scss";

export const Table: React.FC = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector(selectProductData);
  const { searchValue } = useAppSelector(selectFilter);
  const { cancelProducts } = useAppSelector(selectCancelProducts);

  const productFilter = productSortSearch(products, searchValue);
  const productFilterLength = productFilter.length;

  return (
    <table className={styles}>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={cancelProducts.length === productFilterLength}
              onChange={(e) => {
                if (e.target.checked) {
                  const productsIdName = productFilter.map((product) => {
                    return { id: product.id, name: product.name };
                  });

                  dispatch(addAllItems(productsIdName));
                } else {
                  dispatch(removeAllItems());
                }
              }}
            />
          </th>
          <th>Название</th>
          <th>Статус</th>
          <th>Сумма</th>
          <th>Количество</th>
          <th>Дата доставки</th>
          <th>Валюта</th>
          <th>Объем</th>
          <th>Всего</th>
        </tr>
      </thead>
      <tbody>
        {productFilter.map((obj) => (
          <tr key={obj.id}>
            <td>
              <input
                type="checkbox"
                checked={cancelProducts.some((x) => x.id === obj.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    const item = {
                      id: obj.id,
                      name: obj.name,
                    };
                    dispatch(addItem(item));
                  } else {
                    dispatch(removeItem(obj.id));
                  }
                }}
              />
            </td>
            <td>{obj.name}</td>
            <td>{obj.status[0].toUpperCase() + obj.status.slice(1)}</td>
            <td>{obj.sum}</td>
            <td>{obj.qty}</td>
            <td>{obj.delivery_date}</td>
            <td>{obj.currency}</td>
            <td>{obj.volume}</td>
            <td>
              {obj.sum * obj.qty} {obj.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
