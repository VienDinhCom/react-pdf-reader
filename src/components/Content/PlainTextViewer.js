import React from 'react';

export default function PlainTextViewer({ file }) {
  return file.textContent.split('\n').map((i, key) => {
    return <p key={key}>{i}</p>;
  });
}
