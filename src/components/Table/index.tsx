import React from "react";

import { selectProductData } from "../../redux/product/selectors";
import { Product } from "../../redux/product/types";
import { useAppSelector } from "../../redux/store";
import { ProductBlock } from "../ProductBlock";

import styles from "./Table.module.scss";

export const Table: React.FC = () => {
  const { products } = useAppSelector(selectProductData);

  const productBlocks = products.map((obj: Product) => (
    <ProductBlock key={obj.id} {...obj} />
  ));

  return (
    <div className={styles.root}>
      <ul className={styles.ul}>
        <li>
          <input type="checkbox" />
        </li>
        <li>Название</li>
        <li>Статус</li>
        <li>Цена</li>
        <li>Количество</li>
        <li>Дата доставки</li>
        <li>Валюта</li>
        <li>Объем</li>
        <li>Всего</li>
      </ul>
      {productBlocks}
    </div>
  );
};
