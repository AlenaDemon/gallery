import React from "react";
import styles from "./Search.module.scss";
import { useTheme } from "../../provides/ThemeContext";
import { SearchSvg } from "@/assets/search/search";
import { CrossSvg } from "@/assets/search/cross";

interface ISearch {
  query: string;
  setQuery: (value: string) => void;
  setPage: (valie: number) => void;
}

const Search: React.FC<ISearch> = ({ query, setQuery, setPage }) => {
  const { isDark } = useTheme();

  const clearQuery = () => {
    setQuery("");
    setPage(1);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.position}>
        <input
          id="search"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          className={`${styles.searchInput} ${isDark ? styles.dark : styles.light}`}
          placeholder="Painting title"
        />
        <div className={`${styles.searchIcon} ${isDark ? styles.darkIcon : styles.lightIcon}`}>
          <SearchSvg />
        </div>
        {query && (
          <button
            type="button"
            onClick={clearQuery}
            className={`${styles.crossIcon} ${isDark ? styles.darkIcon : styles.lightIcon}`}
          >
            <CrossSvg />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
