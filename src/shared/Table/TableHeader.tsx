import styles from "./Table.module.css";

type props = {
  columns: string[];
};

function TableHeader({ columns }: props) {
  return (
    <thead>
      <tr className={styles.tr}>
        {columns.map((column, index: number) => (
          <th className={styles.th} key={column + index}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
