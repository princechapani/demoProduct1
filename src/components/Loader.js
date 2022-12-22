import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import Colors from '../helper/Colors';

const {height, width} = Dimensions.get('window');

const Loader = ({value}) => {
  return value ? (
    <View style={styles.Container}>
      <ActivityIndicator size="large" color={Colors.White} />
    </View>
  ) : null;
};
export default Loader;

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: height,
    width: width,
    backgroundColor: 'transparent',
  },
});
