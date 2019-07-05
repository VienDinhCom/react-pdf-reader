import React from 'react';
import classes from './Sidebar.module.scss';
import logo from '../../images/logo.png';
import fileIcon from '../../images/file-icon-sm.svg';
import uploadIcon from '../../images/upload-icon.svg';

function renderFile(name, size) {
  return (
    <li className={classes.fileItem}>
      <img className={classes.fileImage} src={fileIcon} alt="{name}" />
      <div className={classes.fileInfo}>
        <h3 className={classes.fileName}>{name}</h3>
        <span className={classes.fileSize}>{size}</span>
      </div>
    </li>
  );
}

export default function Sidebar() {
  return (
    <aside className={classes.root}>
      <header className={classes.header}>
        <img className={classes.logo} src={logo} alt="Reader Zone" />
      </header>
      <section className={classes.body}>
        <div className={classes.fileListHeader}>Files</div>
        <ul className={classes.fileList}>
          {renderFile('Hello', '11Mb')}
          {renderFile('Hello', '11Mb')}
          {renderFile('Hello', '11Mb')}
        </ul>
      </section>
      <footer className={classes.footer}>
        <label className={classes.upload} htmlFor="uploadFile">
          <input
            className={classes.uploadInput}
            id="uploadFile"
            type="file"
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
