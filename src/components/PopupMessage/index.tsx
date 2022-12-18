import React from "react";
import { selectCancelProducts } from "../../redux/cancel/selectors";
import { useAppSelector } from "../../redux/store";

import { cancelURL } from "../../utils/apiUrls";

import styles from "./PopupMessage.module.scss";

export const PopupMessage: React.FC = () => {
  const [isShowPopup, setIsShowPopup] = React.useState(false);

  const { cancelProducts } = useAppSelector(selectCancelProducts);
  const isActiveButton = Boolean(cancelProducts.length);
  const productNames = cancelProducts.map((product) => product.name).join(", ");

  const addCancelProducts = async () => {
    try {
      const productsId = cancelProducts.map((product) => {
        return { id: product.id };
      });

      await fetch(cancelURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...productsId]),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={
          isShowPopup ? `${styles.root} popup--active` : `${styles.root} popup`
        }
      >
        <div className={styles.content}>
          <div
            className={styles.message}
          >{`Вы уверены, что хотите аннулировать ${
            cancelProducts.length > 1 ? "товары" : "товар"
          }:`}</div>
          <div className={styles.names}>{`${productNames} ?`}</div>
          <button onClick={addCancelProducts} className={styles.button_primary}>
            Применить
          </button>
          <button
            onClick={() => setIsShowPopup(false)}
            className={styles.button_secondary}
          >
            Отклонить
          </button>
        </div>
      </div>

      <button
        disabled={!isActiveButton}
        onClick={() => setIsShowPopup(true)}
        className={styles.button_primary}
      >
        Аннулировать
      </button>
    </>
  );
};
