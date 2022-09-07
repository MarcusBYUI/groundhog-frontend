import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

import styles from "./pagination.module.css";

const pageSize = 2;

const AppPagination = ({ callback, rawData }) => {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    const data = rawData.slice(pagination.from, pagination.to);
    setPagination((prevstate) => {
      return { ...prevstate, count: rawData.length };
    });
    callback(data);
  }, [rawData, callback, pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination((prevstate) => {
      return { ...prevstate, from, to };
    });
  };
  return (
    <div className={styles.paginationContainer}>
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default AppPagination;
