import React from 'react';
import { Svg, Path, Defs, Stop, LinearGradient } from 'react-native-svg';

const Line2Svg = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={194} height={2} viewBox="0 0 194 2" fill="none">
      <Path d="M0 1L193.5 1" stroke="url(#paint0_linear_209_261)" strokeWidth={0.5} />
      <Defs>
        <LinearGradient
          id="paint0_linear_209_261"
          x1="-0.499997"
          y1="0.999675"
          x2="193.5"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.255208} stopColor="#2A2D34" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#2A2D34" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Line2Svg;
