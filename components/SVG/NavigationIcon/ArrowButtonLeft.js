import React from 'react';
import { SvgXml } from 'react-native-svg';

const ArrowButtonLeft= ({ width, height, color }) => {
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 40 40" fill="${color}">
    <path d="M28.3941 0H11.6258C4.34216 0 0 4.34 0 11.62V28.36C0 35.66 4.34216 40 11.6258 40H28.3741C35.6578 40 39.9999 35.66 39.9999 28.38V11.62C40.0199 4.34 35.6778 0 28.3941 0ZM23.5918 26C24.172 26.58 24.172 27.54 23.5918 28.12C23.2916 28.42 22.9114 28.56 22.5312 28.56C22.151 28.56 21.7708 28.42 21.4707 28.12L14.4072 21.06C13.8269 20.48 13.8269 19.52 14.4072 18.94L21.4707 11.88C22.051 11.3 23.0115 11.3 23.5918 11.88C24.172 12.46 24.172 13.42 23.5918 14L17.5888 20L23.5918 26Z" fill="#5A534A"/>
    </svg>
  `;

  return <SvgXml xml={svgMarkup} />;
};

export default ArrowButtonLeft;

