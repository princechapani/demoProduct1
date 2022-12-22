import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import {commonStyle} from '../helper/style';
import Colors from '../helper/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Fonts} from '../helper/Fonts';
import {AddName} from '../helper/Text';
import { NavConstants } from '../helper/NavigationConstants';
import PhoneInput from 'react-native-phone-number-input';


const Number = ({navigation}) => {
  const [number, setNumber] = useState('');

  const GetOtp = () => {
    if (number === '') {
      Alert.alert(AddName.Contact_Alert);
    } else if (number.length < 10) {
      Alert.alert(AddName.Digit_Alert);
    } else {
      navigation.replace(NavConstants.Home);
    }
  };

  return (
    <ScrollView style={commonStyle.container}>
      <View style={style.header}>
        <Text style={style.headerText}>Enter Your Mobile Number</Text>
        <View style={style.Center}>
          <PhoneInput
            defaultValue={number}
            onChangeText={number => setNumber(number)}
          />
        </View>
        <View style={style.Touchable}>
          <TouchableOpacity onPress={() => GetOtp()} style={style.button}>
            <Text style={style.buttonText}>Get Otp</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle="dark-content" backgroundColor="#676dbd" />
    </ScrollView>
    
  );
};

export default Number;

const style = StyleSheet.create({
  header: {
    padding: 15,
    paddingVertical: '40%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.White,
  },
  Center: {
    marginTop: '30%',
    marginHorizontal: 25,
  },
  PhoneInput: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    fontSize: 18,
    fontWeight: '500',
    color: Colors.White,
    borderColor: Colors.White,
    fontFamily: Fonts.Poppins_Regular,
  },
  Touchable: {
    margin: 40,
    marginHorizontal: '20%',
    padding: 13,
    borderWidth: 2,
    borderColor: Colors.White,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
});
