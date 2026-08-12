import Link from "next/link";

function buildHref(page) {
  return page <= 1 ? "/blog" : `/blog?page=${page}`;
}

function getPageNumbers(currentPage, totalPages) {
  const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  return Array.from(pages)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);
}

export default function BlogPagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <nav className="blog_pagination" aria-label="Blog pagination">
      <Link
        href={buildHref(currentPage - 1)}
        className={`blog_pagination_arrow ${currentPage === 1 ? "disabled" : ""}`}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : undefined}
      >
        PREV
      </Link>

      <ul className="blog_pagination_list">
        {pageNumbers.map((page, index) => {
          const previous = pageNumbers[index - 1];
          const showEllipsis = previous !== undefined && page - previous > 1;

          return (
            <li key={page}>
              {showEllipsis ? <span className="blog_pagination_ellipsis">…</span> : null}
              <Link
                href={buildHref(page)}
                className={`blog_pagination_number ${page === currentPage ? "active" : ""}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href={buildHref(currentPage + 1)}
        className={`blog_pagination_arrow ${currentPage === totalPages ? "disabled" : ""}`}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : undefined}
      >
        NEXT
      </Link>
    </nav>
  );
}
