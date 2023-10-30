import styles from "./Table.module.css";

type props = {
  rowCount: number;
  columCount: number;
};
function TableIsEmptyMessage({ rowCount, columCount }: props) {
  return (
    <tbody>
      {rowCount === 0 && (
        <tr className={styles.emptyMessageTr}>
          <td className={styles.td} colSpan={columCount}>
            No items to show
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TableIsEmptyMessage;
