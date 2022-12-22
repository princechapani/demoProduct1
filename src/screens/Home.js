// ----- React -----
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// ----- Components -----
import Header from '../components/Header';
import Loader from '../components/Loader';
// ----- Helper -----
import Colors from '../helper/Colors';
import {Fonts} from '../helper/Fonts';
import {NavConstants} from '../helper/NavigationConstants';
import {commonStyle} from '../helper/style';
// ----- Redux -----
import {useDispatch, useSelector} from 'react-redux';
import {GetProductRequest} from '../redux/actions/GetProductAction';
import {LoaderAction} from '../redux/actions/LoaderAction';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  // ----- State -----
  const [product, setProduct] = useState(null);
  // ----- Reducer -----
  const reducer = useSelector(state => state.GetProduct);
  const loaderResponse = useSelector(state => state.Loader);

  const dispatch = useDispatch();
  // ----- UseEffect -----
  useEffect(() => {
    if (reducer.data !== null) {
      setProduct(reducer.data);
    } else {
      dispatch(LoaderAction(true));
      dispatch(GetProductRequest());
    }
  }, [reducer.data]);
  // ----- handlePress -----
  const handlePress = () => {
    navigation.navigate(NavConstants.AddProduct);
  };
  
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={style.renderContainer}
        onPress={() => navigation.navigate(NavConstants.Map)}>
        <Text style={style.headerText}>{item.category}</Text>
        <View style={style.imageView}>
          <Image
            resizeMode="contain"
            source={{uri: item.image}}
            style={style.renderImage}
          />
        </View>
        <View style={commonStyle.flexrox}>
          <Text style={style.nameText}>Name : </Text>
          <Text style={style.nameValueText}>{item.title}</Text>
        </View>
        <View style={[commonStyle.flexrox, {marginTop: 10}]}>
          <Text style={style.nameText}>Price : </Text>
          <Text style={style.nameValueText}>$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[commonStyle.container, {paddingHorizontal: 10}]}>
      <Loader value={loaderResponse.loader} />
      <Header title={'Home Screen'} onPress={handlePress} />
      <StatusBar barStyle="dark-content" backgroundColor="#ffdeb0" />
      <FlatList data={product} renderItem={renderItem} />
    </View>
  );
};
export default Home;

const style = StyleSheet.create({
  renderContainer: {
    marginTop: 15,
    borderRadius: 15,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Cream,
  },
  headerText: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.Black,
  },
  renderImage: {
    height: height / 5,
    width: width / 2,
    borderRadius: 15,
    marginVertical: 10,
  },
  nameText: {
    color: Colors.Black,
    fontSize: 15,
    fontFamily: Fonts.Poppins_Regular,
  },
  nameValueText: {
    color: Colors.Black,
    fontSize: 15,
    flex: 1,
    marginLeft: 5,
  },
});
