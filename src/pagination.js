import React from "react";

export default function Pagination({ paginationInfo, handlePageChnage }) {
  const pagelist = [];
  if (!paginationInfo.pages) {
    return null;
  }
  for (let i = 1; i <= paginationInfo.pages; i++) {
    pagelist.push(
      <a
        href="#"
        key={`page_${i}`}
        onClick={(event) => handlePageChnage(event, i)}
        className={i === paginationInfo.page ? "active" : "passive"}
      >
        {i}
      </a>
    );
  }
  return (
    <div className="pagination">
      <div className="pagination">{pagelist}</div>
    </div>
  );
}
