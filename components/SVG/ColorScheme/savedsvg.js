import React from 'react';
import { SvgXml } from 'react-native-svg';

const Savedbutton = ({ width, height, color }) => {
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 22 22" fill="${color}">
    <path d="M11 0C4.928 0 0 4.74808 0 10.5984C0 16.4487 4.928 21.1968 11 21.1968C17.072 21.1968 22 16.4487 22 10.5984C22 4.74808 17.072 0 11 0ZM11.363 15.8976C11.165 15.9612 10.824 15.9612 10.626 15.8976C8.91 15.3359 5.06 12.9724 5.06 8.96625C5.06 7.19632 6.534 5.76553 8.36 5.76553C9.438 5.76553 10.395 6.26366 11 7.04794C11.594 6.27425 12.562 5.76553 13.64 5.76553C15.466 5.76553 16.94 7.19632 16.94 8.96625C16.94 12.9724 13.09 15.3359 11.363 15.8976Z" fill="#EEE7DA"/>
    </svg>
  `;

  return <SvgXml xml={svgMarkup} />;
};

export default Savedbutton;

