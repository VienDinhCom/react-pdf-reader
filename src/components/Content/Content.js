import React from 'react';
import PDFViewer from './PDFViewer';
import classes from './Content.module.scss';
import fileIcon from '../../images/file-icon.svg';

// function readPlainTextFile() {
//   return;
// }

// function renderPlainTextFile(file) {
//   const reader = new window.FileReaderSync();

//   return reader.readAsText(file);
// }

export default function Content({ file }) {
  return (
    <article className={classes.root}>
      {file ? (
        <>
          <h1 className={classes.title}>
            <img
              className={classes.fileIcon}
              src={fileIcon}
              height={40}
              alt={file.name}
            />{' '}
            {file.name}
          </h1>
          <div className={classes.content}>
            <PDFViewer file={file}></PDFViewer>
          </div>
        </>
      ) : (
        <p>Please upload a file!</p>
      )}
    </article>
  );
}
