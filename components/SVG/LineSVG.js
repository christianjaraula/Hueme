import React from 'react';
import { Svg, Defs, RadialGradient, Stop, Path } from 'react-native-svg';

const LineSVG = () => {
  return (
    <Svg height="2" width="194" style={{ alignSelf: 'center', marginTop: 10 }}>
      <Defs>
        <RadialGradient
          id="paint0_radial_222_17"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(96.5 0.999837) scale(97 18769.5)"
        >
          <Stop offset="0.255208" stopColor="#2A2D34" stopOpacity="0.5" />
          <Stop offset="1" stopColor="#2A2D34" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Path
        d="M0 1L193.5 1"
        stroke="url(#paint0_radial_222_17)"
        strokeWidth="0.5"
      />
    </Svg>
  );
};

export default LineSVG;
