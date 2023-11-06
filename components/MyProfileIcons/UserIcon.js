import React from 'react';
import { SvgXml } from 'react-native-svg';

const UserIcon = ({ width, height, color }) => {
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 23 26" fill="${color}">
      <path d="M11.4701 12.5247C14.9546 12.5247 17.7794 9.72092 17.7794 6.26234C17.7794 2.80375 14.9546 0 11.4701 0C7.98554 0 5.16077 2.80375 5.16077 6.26234C5.16077 9.72092 7.98554 12.5247 11.4701 12.5247Z" />
      <path d="M11.4704 15.6559C5.14839 15.6559 0 19.8642 0 25.0494C0 25.4001 0.277609 25.6756 0.63093 25.6756H22.3098C22.6631 25.6756 22.9407 25.4001 22.9407 25.0494C22.9407 19.8642 17.7923 15.6559 11.4704 15.6559Z" />
    </svg>
  `;

  return <SvgXml xml={svgMarkup} />;
};

export default UserIcon;
