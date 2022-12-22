// ----- Libs -----
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
// ----- Helper -----
import Colors from '../helper/Colors';
import {Fonts} from '../helper/Fonts';
import {commonStyle} from '../helper/style';
import {AddName} from '../helper/Text';
// ----- Components -----
import Loader from '../components/Loader';
// ----- Redux -----
import {AddProductRequest} from '../redux/actions/AddProductAction';
import {useDispatch, useSelector} from 'react-redux';
import {LoaderAction} from '../redux/actions/LoaderAction';


const AddProduct = ({navigation}) => {
  const [name, SetName] = useState('');
  const [price, SetPrice] = useState('');
  const [descripstion, SeDescripstion] = useState('');
  const [category, SetCategory] = useState('');
  const [selectImage, setSelectImage] = useState('');

  const loaderResponse = useSelector(state => state.Loader);

  const dispatch = useDispatch();

  const Save = () => {
    if (name === '') {
      Alert.alert(AddName.Name_Alert);
    } else if (price === '') {
      Alert.alert(AddName.Price_Alert);
    } else if (descripstion === '') {
      Alert.alert(AddName.Description_Alert);
    } else if (category === '') {
      Alert.alert(AddName.Category_Alert);
    } else if (selectImage === '') {
      Alert.alert(AddName.Image_Alert);
    } else {
      let bodyData = {
        title: name,
        price: price,
        descripstion: descripstion,
        image: selectImage,
        category: category,
      };
      dispatch(LoaderAction(true));
      dispatch(AddProductRequest(bodyData, navigation));
    }
  };

  const SelectImage = async () => {
    try {
      await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      }).then(image => {
        setSelectImage(image.uri);
      });
    } catch (e) {
      console.log('e----', e);
    }
  };

  return (
    <View style={[commonStyle.container, {paddingHorizontal: 20}]}>
      <Text style={style.heading}>Add Product</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.inputContainer}>
          <TextInput
            onChangeText={name => SetName(name)}
            placeholder={AddName.name}
            style={style.input}
            placeholderTextColor={Colors.Cream}
          />
          <TextInput
            onChangeText={price => SetPrice(price)}
            placeholder={AddName.Price}
            style={style.input}
            placeholderTextColor={Colors.Cream}
          />
          <TextInput
            onChangeText={descripstion => SeDescripstion(descripstion)}
            placeholder={AddName.Descripstion}
            style={style.input}
            placeholderTextColor={Colors.Cream}
          />
          <TextInput
            onChangeText={category => SetCategory(category)}
            placeholder={AddName.Category}
            style={style.input}
            placeholderTextColor={Colors.Cream}
          />
          {selectImage !== '' && (
            <Image
              source={{uri: selectImage}}
              style={{
                height: 300,
                width: 300,
                alignSelf: 'center',
                marginVertical: 15,
              }}
            />
          )}
          <TouchableOpacity
            onPress={() => SelectImage()}
            style={style.imageContainer}>
            <Text style={style.selectedImageText}>Select Image</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => Save()} style={style.imageContainer}>
          <Text style={[style.selectedImageText, {textAlign: 'center'}]}>
            Save
          </Text>
        </TouchableOpacity>
        <Loader value={loaderResponse.loader} />
      </ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="#676dbd" />
    </View>
  );
};

export default AddProduct;

const style = StyleSheet.create({
  heading: {
    fontSize: 26,
    fontFamily: Fonts.Poppins_Bold,
    color: Colors.Cream,
    textAlign: 'center',
    marginTop: 20,
  },
  inputContainer: {
    paddingTop: 20,
  },
  input: {
    borderBottomColor: Colors.Cream,
    borderBottomWidth: 1,
    fontFamily: Fonts.Poppins_Regular,
    color: Colors.Cream,
    marginTop: 10,
  },
  imageContainer: {
    backgroundColor: Colors.Cream,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
  },
  selectedImageText: {
    fontSize: 14,
    fontFamily: Fonts.Poppins_Regular,
  },
});
