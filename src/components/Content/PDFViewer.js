import React, { useState } from 'react';
import PDF from 'react-pdf-js';
import classes from './PDFViewer.module.scss';

export default function PDFViewer({ file }) {
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  function _previousPage() {
    const newPage = currentPage - 1;

    if (newPage < 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(newPage);
    }
  }

  function _nextPage() {
    const newPage = currentPage + 1;

    if (newPage > pages) {
      setCurrentPage(pages);
    } else {
      setCurrentPage(newPage);
    }
  }

  return (
    <div>
      <PDF
        file={file.pdfURL}
        page={currentPage}
        onDocumentComplete={pages => setPages(pages)}
      />
      <div className={classes.buttons}>
        <button onClick={_previousPage}>Previous Page</button>
        &nbsp;&nbsp;&nbsp;
        {currentPage}
        &nbsp;&nbsp;&nbsp;
        <button onClick={_nextPage}>Next Page</button>
      </div>
    </div>
  );
}
