import React, { useState, useRef, useEffect } from 'react';
import { usePdf } from 'react-pdf-js';
import classes from './PDFViewer.module.scss';
import useWindowSize from '../../hooks/useWindowSize';

let timeOutId = null;

export default function PDFViewer({ file }) {
  const canvasEl = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const windowSize = useWindowSize();

  const [loading, numPages] = usePdf({
    file: file.pdfURL,
    page: currentPage,
    canvasEl,
  });

  function _scaleCanvas() {
    clearTimeout(timeOutId);

    timeOutId = setTimeout(() => {
      if (canvasEl.current === null) return;

      const ratio =
        parseFloat(canvasEl.current.clientWidth) /
        parseFloat(canvasEl.current.getAttribute('width'));
      const newHeight =
        parseFloat(canvasEl.current.getAttribute('height')) * ratio;

      canvasEl.current.removeAttribute('style');
      canvasEl.current.style.height = newHeight;
    }, 1000);
  }

  useEffect(() => {
    _scaleCanvas();

    return () => clearTimeout(timeOutId);
  }, [windowSize, loading, currentPage]);

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

    if (newPage > numPages) {
      setCurrentPage(numPages);
    } else {
      setCurrentPage(newPage);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <canvas className={classes.canvas} ref={canvasEl} />
      <div className={classes.buttons}>
        <button onClick={_previousPage}>Previous Page</button>
        &nbsp;&nbsp;&nbsp;
        {currentPage}
        &nbsp;&nbsp;&nbsp;
        <button onClick={_nextPage}>Next Page</button>
      </div>
    </>
  );
}
