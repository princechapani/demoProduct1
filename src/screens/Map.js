import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  PermissionsAndroid,
  StyleSheet,
  View,
} from 'react-native';
import {commonStyle} from '../helper/style';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => {
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    try {
      const Granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location access required',
          message: 'This app need to access',
        },
      );
      if (Granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permission Granted');
        getCurrentLocation();
      } else {
        Alert.alert('Permission Denide');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCurrentLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLatitude = position.coords.latitude;
        const currentLongitude = position.coords.longitude;
        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
      },
      error => {
        Alert.alert('Please on GPS on your Mobile.');
        console.log("Map Error",error)
      },
    );
  };
  return (
    <View style={commonStyle.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={style.map}
        showsUserLocation={true}
        zoomControlEnabled
        region={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}/>
    </View>
  );
};

export default Map;

const style = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
