import React from "react";
import debounce from "lodash.debounce";

import { useAppDispatch } from "../../redux/store";
import { setSearchValue } from "../../redux/filters/slice";

import styles from "./Search.module.scss";

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  const debouncedResults = React.useMemo(() => debounce(handleChange, 300), []);

  React.useEffect(() => {
    return () => debouncedResults.cancel();
  });

  return (
    <div className="mb-20">
      <input
        type="text"
        placeholder="Поиск по товарам..."
        className={styles.root}
        onChange={debouncedResults}
      />
    </div>
  );
};
