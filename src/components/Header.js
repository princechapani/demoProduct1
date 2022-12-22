import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../helper/Colors';
import {Fonts} from '../helper/Fonts';

const Header = ({title, onPress}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="pluscircleo" size={25} color={Colors.Black} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.Cream,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    // marginVertical: 10
    marginBottom:10,
  },
  title: {
    fontSize: 18,
    color: Colors.Black,
    fontFamily: Fonts.Poppins_Medium,
    flex: 1,
  },
});
