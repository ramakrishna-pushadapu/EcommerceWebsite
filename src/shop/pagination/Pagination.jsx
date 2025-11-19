import React from 'react';

import "./Pagination.css"

const Pagination = ({ currentPage, totalPages, goToPage }) => {
  return (
    <div className="pagination-area d-flex justify-content-center mt-4">
      <ul className="pagination-list d-flex align-items-center list-unstyled gap-2">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-btn arrow-btn"
          >
            <i className="icofont-rounded-left"></i>
          </button>
        </li>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i}>
            <button
              className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="page-btn arrow-btn"
          >
            <i className="icofont-rounded-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
