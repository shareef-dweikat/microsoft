import React from "react";
import styles from "./StarTrekSearchBox.module.css";
import { DebouncedState } from "use-debounce";

type props = {
  placeholder: string;
  label: string;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  fetchData: DebouncedState<(page: number, searchValue: string) => void>;
};

function StarTrekSearchBox({
  placeholder,
  label,
  searchValue,
  setSearchValue,
  fetchData,
}: props) {
  const handleChange = async (value: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = value.target.value;
    setSearchValue(searchValue);
    if (searchValue.length === 0) {
      fetchData(1, "");
      return;
    }
    fetchData(1, searchValue);
  };

  return (
    <div id={styles.container}>
      <span id={styles.label}>{label}</span>
      <input
        placeholder={placeholder}
        value={searchValue}
        id={styles.inputContainer}
        onChange={handleChange}
      />
    </div>
  );
}

export default StarTrekSearchBox;
