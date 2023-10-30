import styles from "./Table.module.css";

type props = {
  rows: string[][];
};

function TableHeader({ rows }: props) {
  return (
    <tbody>
      {rows.map((row: string[], index) => (
        <tr className={styles.tr} key={index}>
          {row.map((column) => (
            <td className={styles.td} key={column + index}>
              {column}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableHeader;
