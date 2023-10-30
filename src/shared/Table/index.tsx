import styles from "./Table.module.css";
import TableHeader from "./TableHeader";
import TableIsEmptyMessage from "./TableIsEmptyMessage";
import TableRows from "./TableRows";

type props = {
  data: {
    columns: string[];
    rows: string[][];
  };
};

function Table({ data }: props) {
  return (
    <table className={styles.tableContainer}>
      <TableHeader columns={data.columns} />
      <TableIsEmptyMessage
        rowCount={data.rows.length}
        columCount={data.columns.length}
      />
      <TableRows rows={data.rows} />
    </table>
  );
}

export default Table;
