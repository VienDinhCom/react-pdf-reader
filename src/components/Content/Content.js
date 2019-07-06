import React from 'react';
import PDFViewer from './PDFViewer';
import PlainTextViewer from './PlainTextViewer';
import classes from './Content.module.scss';
import fileIcon from '../../images/file-icon.svg';

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
            {file.type === 'text/plain' && (
              <PlainTextViewer file={file}></PlainTextViewer>
            )}
            {file.type === 'application/pdf' && (
              <PDFViewer file={file}></PDFViewer>
            )}
          </div>
        </>
      ) : (
        <p className={classes.none}>Please upload a file!</p>
      )}
    </article>
  );
}
