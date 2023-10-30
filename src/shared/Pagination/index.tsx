import { useState } from "react";
import { Pagination as CustomPagination } from "@mui/material";
import { getPagesCount } from "../../utils";

type props = {
  fetchData: (page: number, searchValue?: string) => Promise<void>;
  dataCount: number;
  currentPageSize: number;
};

function Pagination({ dataCount, currentPageSize, fetchData }: props) {
  const [page, setPage] = useState<number>(1);

  if (dataCount <= currentPageSize) {
    return <></>;
  }

  const handlePageClick = (page: number) => {
    fetchData(page);
    setPage(page);
  };

  const pagesCount = getPagesCount(dataCount);

  return (
    <CustomPagination
      count={pagesCount}
      page={page}
      onChange={(_, page) => handlePageClick(page)}
    />
  );
}

export default Pagination;
