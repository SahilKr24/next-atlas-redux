import { useContext } from "react";
import { FilterProvider, NAME } from "../../util/reducer";
import Paper from "../Paper";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const { dispatch } = useContext(FilterProvider);

  const handleNameChange = (e) => {
    dispatch({ type: NAME, payload: { name: e.target.value } });
  };
  return (
    <Paper>
      <div
        style={{
          margin: 45,
          paddingTop: 45,
          paddingBottom: 45,
        }}
      >
        <form className={styles.searchcontainer}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              paddingRight: 50,
            }}
          >
            <span>
              <img src="./search.svg" />
            </span>
            <input
              onChange={handleNameChange}
              type="text"
              className={styles.searchbar}
              placeholder="Search"
            />
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              paddingRight: 50,
            }}
          >
            From:
            <input type="date" className={styles.searchbar} />
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              paddingRight: 50,
            }}
          >
            To:
            <input type="date" className={styles.searchbar} />
          </div>
        </form>
      </div>
    </Paper>
  );
};

export default SearchBar;
