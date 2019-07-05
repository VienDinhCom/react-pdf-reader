import React, { useContext, useState } from 'react';
import PDFViewer from './PDFViewer';
import PlainTextViewer from './PlainTextViewer';
import classes from './Content.module.scss';
import fileIcon from '../../images/file-icon.svg';

// function readPlainTextFile() {
//   return;
// }

// function PlainTextViewer({ file }) {
//   const [fileContent, setFileContent] = useState('asdasdas');

//   function _loadFile() {
//     const reader = new FileReader();
//     reader.readAsText(file);

//     reader.onload(() => {
//       console.log(reader.result);
//       setFileContent(reader.result);
//     });

//     console.log(12121);
//   }

//   useContext(() => {
//     _loadFile;
//   }, []);

//   return <div>{fileContent}</div>;
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
            {file.type === 'text/plain' && (
              <PlainTextViewer file={file}></PlainTextViewer>
            )}
            {file.type === 'application/pdf' && (
              <PDFViewer file={file}></PDFViewer>
            )}
          </div>
        </>
      ) : (
        <p>Please upload a file!</p>
      )}
    </article>
  );
}
