import React from 'react';
import classes from './Content.module.scss';
import fileIcon from '../../images/file-icon.svg';

export default function Content({ file }) {
  return (
    <article className={classes.root}>
      <h1 className={classes.title}>
        <img
          className={classes.fileIcon}
          src={fileIcon}
          height={40}
          alt={file.name}
        />{' '}
        {file.name}
      </h1>
      <div className={classes.content}></div>
    </article>
  );
}
