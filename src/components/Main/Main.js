import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import classes from './Main.module.scss';

export default function Main() {
  const [files, setFiles] = useState({});

  return (
    <main className={classes.root}>
      <Sidebar></Sidebar>
      <Content file={{ name: 'File Name' }}></Content>
    </main>
  );
}
