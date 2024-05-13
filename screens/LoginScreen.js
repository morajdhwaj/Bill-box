import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import Toast from 'react-native-toast-message';

const LoginScreen = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [showCountry, setShowCountry] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(true);
  const mobileNumberRef = useRef(null);

  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country);
    if (mobileNumberRef.current) {
      mobileNumberRef.current.focus();
    }
  };

  const handleSubmit = () => {
    if (!country) {
      // Show toast alert if country is not selected
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please select a country',
      });
      return;
    }
    // Handle submission logic here
    navigation.navigate('LoginOTPScreen');
  };

  return (
    <View style={tw`h-full bg-[#000]`}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}>
        <View style={tw`flex flex-row gap-5 items-center `}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw` h-[80%] justify-between `}>
        <View style={tw`mt-10 `}>
          <Text style={tw`text-white text-2xl m-5 font-semibold `}>
            Enter your mobile number to get OTP
          </Text>

          <View style={tw` bg-black py-5 rounded-xl px-4`}>
            <View
              style={tw`border border-gray-600 rounded-xl flex flex-row items-center`}>
              <View
                style={tw`flex flex-row items-center border-r border-r-gray-600 w-[35%] mx-2 `}>
                <CountryPicker
                  {...{
                    countryCode,
                    withFilter,
                    withFlag,
                    withCountryNameButton,
                    withAlphaFilter,
                    withCallingCode,
                    withEmoji,
                    onSelect,
                  }}
                  visible={showCountry}
                  theme={DARK_THEME}
                />
                {country && <Text>+{country?.callingCode}</Text>}
              </View>
              <View style={tw`flex  w-[70%]  px-2 `}>
                <TextInput
                  ref={mobileNumberRef}
                  style={tw`  text-gray-400 text-base `}
                  keyboardType="phone-pad"
                  onChangeText={setMobileNumber}
                  value={mobileNumber}
                  maxLength={10}
                  placeholder="Mobile Number"
                  placeholderTextColor={'white'}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={tw`mx-5`}>
          <TouchableOpacity
            style={tw`bg-[#00B386] mt-10 rounded-xl`}
            onPress={handleSubmit}>
            <Text
              style={tw`text-white text-2xl self-center font-semibold py-2  `}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
