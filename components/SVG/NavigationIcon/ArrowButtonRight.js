import React from 'react';
import { SvgXml } from 'react-native-svg';

const ArrowButtonRight= ({ width, height, color }) => {
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 40 40" fill="${color}">
    <path d="M11.6059 0H28.3742C35.6578 0 40 4.34 40 11.62V28.36C40 35.66 35.6578 40 28.3742 40H11.6259C4.34223 40 6.86646e-05 35.66 6.86646e-05 28.38V11.62C-0.0199394 4.34 4.32222 0 11.6059 0ZM16.4082 26C15.828 26.58 15.828 27.54 16.4082 28.12C16.7084 28.42 17.0886 28.56 17.4688 28.56C17.849 28.56 18.2292 28.42 18.5293 28.12L25.5928 21.06C26.1731 20.48 26.1731 19.52 25.5928 18.94L18.5293 11.88C17.949 11.3 16.9885 11.3 16.4082 11.88C15.828 12.46 15.828 13.42 16.4082 14L22.4112 20L16.4082 26Z" fill="#5A534A"/>
    </svg>
  `;

  return <SvgXml xml={svgMarkup} />;
};

export default ArrowButtonRight;

