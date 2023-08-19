/// IMPORTS
import React from "react";
// STYLES
import style from "./CreationPagination.module.css"

// CREATION PAGINATION
interface paginationProps {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
}
const CreationPagination: React.FC<paginationProps> = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];
  // TOTAL PAGES
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // TOTAL PAGES ARRAY
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return ( 
    <nav className={style.nav}>
      <ul className={style.pagination}>
        {pageNumbers.map((number) => (
          <dl key={number} className={number === currentPage ? style.active : ""}>
            <button onClick={() => paginate(number)}>{number}</button>
          </dl>
        ))}
      </ul>
    </nav>
  );
};

export default CreationPagination