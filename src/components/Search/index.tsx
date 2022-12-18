import React from "react";
import debounce from "lodash.debounce";

import { useAppDispatch } from "../../redux/store";
import { setSearchValue } from "../../redux/filters/slice";

import styles from "./Search.module.scss";

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  const debouncedSearch = React.useRef(
    debounce((query) => dispatch(setSearchValue(query)), 350)
  ).current;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="mb-20">
      <input
        type="text"
        placeholder="Поиск по товарам..."
        className={styles.root}
        onChange={handleChange}
      />
    </div>
  );
};
