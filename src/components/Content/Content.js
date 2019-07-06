import React from 'react';
import PDFViewer from './PDFViewer';
import PlainTextViewer from './PlainTextViewer';
import classes from './Content.module.scss';
import fileIcon from '../../images/file-icon.svg';
import UploadButton from '../UploadButton/UploadButton';
import logo from '../../images/logo.png';

export default function Content({ file, getFiles }) {
  return (
    <article className={classes.root}>
      <header className={classes.header}>
        <img
          className={classes.logo}
          src={logo}
          height={50}
          alt="Reader Zone"
        />
        <UploadButton getFiles={getFiles}></UploadButton>
      </header>
      <section className={classes.body}>
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
          <div className={classes.none}>
            <p>Please upload a file!</p>
            <p className={classes.noneSmallText}>Supported files: .pdf, .txt</p>
          </div>
        )}
      </section>
    </article>
  );
}
