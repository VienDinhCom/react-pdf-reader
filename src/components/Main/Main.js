import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import classes from './Main.module.scss';

export default function Main() {
  const [files, setFiles] = useState({});
  const [activeFileId, setActiveFileId] = useState(null);

  function _addFiles(file) {
    const id = Date.now();

    setFiles({
      ...files,
      [id]: file,
    });

    setActiveFileId(id);
  }

  return (
    <main className={classes.root}>
      <Sidebar
        getFiles={_addFiles}
        files={files}
        activeFileId={activeFileId}
        setActiveFileId={id => setActiveFileId(id)}
      ></Sidebar>
      <Content file={files[activeFileId]}></Content>
    </main>
  );
}
