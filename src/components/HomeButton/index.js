import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../utils/colors';
import {styles} from './style';

const HomeButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[colors.dodgerblue, colors.darkgreen, colors.yellow]}
        style={[styles.linearGradient, style]}>
        <Text style={styles.title}> {title} </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default React.memo(HomeButton);
