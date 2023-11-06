import React from 'react';
import { View } from 'react-native';

const Line = () => {
  return (
    <View
      style={{
        width: 193.5,
        height: 1,
        transform: [{ rotate: '180deg' }],
        transformOrigin: '0 0',
        borderTopWidth: 0.5,
        borderTopColor: '#2A2D34',
      }}
    />
  );
};

export default Line;
