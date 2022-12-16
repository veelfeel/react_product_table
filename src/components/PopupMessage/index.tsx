import React from "react";

import styles from "./PopupMessage.module.scss";

export const PopupMessage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.message}>Вы уверены что хотите... ?</div>
        <button className={styles.button}>Применить</button>
        <button className={styles.button}>Отклонить</button>
      </div>
    </div>
  );
};
