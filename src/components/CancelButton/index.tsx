import React from "react";

import styles from "./CancelButton.module.scss";

export const CancelButton: React.FC = () => {
  return <button className={styles.root}>Аннулировать</button>;
};
