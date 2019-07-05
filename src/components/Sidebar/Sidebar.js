import React from 'react';
import classes from './Sidebar.module.scss';
import logo from '../../images/logo.png';
import fileIcon from '../../images/file-icon-sm.svg';
import uploadIcon from '../../images/upload-icon.svg';

export default function Sidebar({
  getFiles,
  files,
  activeFileId,
  setActiveFileId,
}) {
  const fileArray = [];

  // console.log(files);

  for (const id in files) {
    if (files.hasOwnProperty(id)) {
      const file = files[id];

      fileArray.push({
        file,
        id,
      });
    }
  }

  return (
    <aside className={classes.root}>
      <header className={classes.header}>
        <img className={classes.logo} src={logo} alt="Reader Zone" />
      </header>
      <section className={classes.body}>
        <div className={classes.fileListHeader}>Files</div>
        <ul className={classes.fileList}>
          {fileArray.map(({ file, id }) => (
            <li
              key={id}
              className={
                classes.fileItem +
                (parseInt(id) === parseInt(activeFileId)
                  ? ` ${classes.fileItemActive}`
                  : '')
              }
              onClick={() => setActiveFileId(id)}
            >
              <img
                className={classes.fileImage}
                src={fileIcon}
                alt="{file.name}"
              />
              <div className={classes.fileInfo}>
                <h3 className={classes.fileName}>{file.name}</h3>
                <span className={classes.fileSize}>
                  {(file.size / 1024).toFixed(2)} Kb
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className={classes.footer}>
        <label className={classes.upload} htmlFor="uploadFile">
          <input
            className={classes.uploadInput}
            id="uploadFile"
            type="file"
            onChange={event => getFiles(event.target.files[0])}
            accept="application/pdf,text/plain"
          ></input>
          <img
            className={classes.uploadIcon}
            src={uploadIcon}
            alt="Upload Files"
          />
          Upload Files
        </label>
      </footer>
    </aside>
  );
}
