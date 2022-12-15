import React from "react";

import styles from "./ProductBlock.module.scss";

interface PropType {
  id: string;
  status: string;
  sum: number;
  qty: number;
  volume: number;
  name: string;
  delivery_date: string;
  currency: string;
}

export const ProductBlock: React.FC<PropType> = ({
  id,
  status,
  sum,
  qty,
  volume,
  name,
  delivery_date,
  currency,
}) => {
  return (
    <ul key={id} className={styles.ul}>
      <li>
        <input type="checkbox" />
      </li>
      <li>{name}</li>
      <li>{status === "active" ? "Активно" : "В архиве"}</li>
      <li>
        {sum} {currency}
      </li>
      <li>{qty} шт</li>
      <li>{delivery_date}</li>
      <li>{currency}</li>
      <li>{volume}</li>
      <li>
        {sum * qty} {currency}
      </li>
    </ul>
  );
};
