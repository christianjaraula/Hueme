import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const ColorBar2 = () => {
  return (
    <Svg width={41} height={175} viewBox="0 0 41 175" fill="none">
    <Rect width="27" height="175" rx="6" fill="#FF0000"/>
    <Rect y="135" width="27" height="40" rx="6" fill="white"/>
    <Path d="M11.5714 165H15.4286C18.6429 165 19.9286 163 19.9286 158V152C19.9286 147 18.6429 145 15.4286 145H11.5714C8.35716 145 7.07144 147 7.07144 152V158C7.07144 163 8.35716 165 11.5714 165Z" fill="#5A534A"/>
    <Path d="M10.7679 155L12.5872 157.83L16.2322 152.17" fill="#5A534A"/>
    <Path d="M10.7679 155L12.5872 157.83L16.2322 152.17M11.5714 165H15.4286C18.6429 165 19.9286 163 19.9286 158V152C19.9286 147 18.6429 145 15.4286 145H11.5714C8.35716 145 7.07144 147 7.07144 152V158C7.07144 163 8.35716 165 11.5714 165Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <Rect x="0.5" y="0.5" width="26" height="174" rx="5.5" fill="#F1D7C3" stroke="#5A534A"/>
    <Rect x="0.5" y="143.5" width="26" height="31" rx="5.5" fill="white" stroke="#5A534A"/>
    <Path d="M11.55 165H15.45C18.7 165 20 163.8 20 160.8V157.2C20 154.2 18.7 153 15.45 153H11.55C8.3 153 7 154.2 7 157.2V160.8C7 163.8 8.3 165 11.55 165Z" fill="white"/>
    <Path d="M10.7375 159L12.577 160.698L16.2625 157.302" fill="white"/>
    <Path d="M10.7375 159L12.577 160.698L16.2625 157.302M11.55 165H15.45C18.7 165 20 163.8 20 160.8V157.2C20 154.2 18.7 153 15.45 153H11.55C8.3 153 7 154.2 7 157.2V160.8C7 163.8 8.3 165 11.55 165Z" stroke="#5A534A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);
};

export default ColorBar2;
