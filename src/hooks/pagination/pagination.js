import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import { useSelector } from "react-redux";

import "./pagination.css";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const themeState = useSelector((state) => state.blockchain.name);

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    currentPage !== lastPage && onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    currentPage > 1 && onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      {/* Left navigation arrow */}
      <li
        className={classnames(`pagination-item ${themeState}h`, {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <i className="fas fa-arrow-left"></i>
      </li>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li
              key={pageNumber}
              className={`pagination-item ${themeState}h dots`}
            >
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={classnames(
              `pagination-item ${themeState}h ${
                pageNumber === currentPage && themeState
              }`,
              {
                selected: pageNumber === currentPage,
              }
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames(`pagination-item ${themeState}h`, {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <i className="fas fa-arrow-right"></i>
      </li>
    </ul>
  );
};

export default Pagination;
