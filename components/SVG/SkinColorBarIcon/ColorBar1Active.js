import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const ColorBar1Active = () => {


  return (
        <Svg width={42} height={175} viewBox="0 0 42 175" fill="none">
        <Rect width="42" height="175" rx="6" fill="#FF0000"/>
        <Rect y="135" width="42" height="40" rx="6" fill="white"/>
        <Path d="M18 165H24C29 165 31 163 31 158V152C31 147 29 145 24 145H18C13 145 11 147 11 152V158C11 163 13 165 18 165Z" fill="#5A534A"/>
        <Path d="M16.75 155L19.58 157.83L25.25 152.17" fill="#5A534A"/>
        <Path d="M16.75 155L19.58 157.83L25.25 152.17M18 165H24C29 165 31 163 31 158V152C31 147 29 145 24 145H18C13 145 11 147 11 152V158C11 163 13 165 18 165Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Rect x="0.5" y="0.5" width="41" height="174" rx="5.5" fill="#F5D3B8" stroke="#5A534A"/>
        <Rect x="0.5" y="135.5" width="41" height="39" rx="5.5" fill="white" stroke="#5A534A"/>
        <Path d="M18 165H24C29 165 31 163 31 158V152C31 147 29 145 24 145H18C13 145 11 147 11 152V158C11 163 13 165 18 165Z" fill="#5A534A"/>
        <Path d="M16.75 155L19.58 157.83L25.25 152.17" fill="#5A534A"/>
        <Path d="M16.75 155L19.58 157.83L25.25 152.17M18 165H24C29 165 31 163 31 158V152C31 147 29 145 24 145H18C13 145 11 147 11 152V158C11 163 13 165 18 165Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
  );
};



export default ColorBar1Active;
