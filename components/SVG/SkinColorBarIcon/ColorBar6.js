import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const ColorBar6 = () => {
  return (
    <Svg width={41} height={175} viewBox="0 0 41 175" fill="none">
    <Rect width="41" height="175" rx="6" fill="#C6944F"/>
    <Rect y="135" width="41" height="40" rx="6" fill="white"/>
    <Path d="M17 165H23C28 165 30 163 30 158V152C30 147 28 145 23 145H17C12 145 10 147 10 152V158C10 163 12 165 17 165Z" fill="#5A534A"/>
    <Path d="M15.75 155L18.58 157.83L24.25 152.17" fill="#5A534A"/>
    <Path d="M15.75 155L18.58 157.83L24.25 152.17M17 165H23C28 165 30 163 30 158V152C30 147 28 145 23 145H17C12 145 10 147 10 152V158C10 163 12 165 17 165Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Rect x="0.5" y="0.5" width="40" height="174" rx="5.5" fill="#C6944F" stroke="#5A534A"/>
    <Rect x="0.5" y="135.5" width="40" height="39" rx="5.5" fill="white" stroke="#5A534A"/>
    <Path d="M17 165H23C28 165 30 163 30 158V152C30 147 28 145 23 145H17C12 145 10 147 10 152V158C10 163 12 165 17 165Z" fill="white"/>
    <Path d="M15.75 155L18.58 157.83L24.25 152.17" fill="white"/>
    <Path d="M15.75 155L18.58 157.83L24.25 152.17M17 165H23C28 165 30 163 30 158V152C30 147 28 145 23 145H17C12 145 10 147 10 152V158C10 163 12 165 17 165Z" stroke="#5A534A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);
};

export default ColorBar6;
