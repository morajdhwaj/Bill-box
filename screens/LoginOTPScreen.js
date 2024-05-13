import React, {useState, useRef} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginOTPScreen = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = useRef([]);

  const handleInputChange = (index, value) => {
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '') {
      focusNextInput(index);
    }
  };

  const focusNextInput = index => {
    if (index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const focusPrevInput = index => {
    if (index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleInputKeyPress = (index, key) => {
    if (key === 'Backspace' && otp[index] === '') {
      focusPrevInput(index);
    }
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
      <View style={tw`mt-10 `}>
        <Text style={tw`text-white text-2xl m-5 font-semibold `}>
          Enter 4-digit code send to you at 8638398339
        </Text>
      </View>
      <View style={tw` w-full py-5 rounded-xl `}>
        <View style={tw`flex flex-row items-center justify-center mt-5 gap-5`}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[
                tw`bg-[#000] w-16 text-center text-4xl text-white  rounded-lg`,
                {
                  borderColor: !digit ? '#808080' : '#85ebd0',
                  borderWidth: 1,
                },
              ]}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleInputChange(index, text)}
              onKeyPress={({nativeEvent: {key}}) =>
                handleInputKeyPress(index, key)
              }
              ref={ref => (otpInputs.current[index] = ref)}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={tw`bg-[#00B386] mt-10 rounded-lg mx-5`}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={tw`text-white text-2xl self-center font-semibold py-2 `}>
          Verify
        </Text>
      </TouchableOpacity>
      <View style={tw`flex items-center justify-center mt-5 flex-row  gap-1`}>
        <Text style={tw`text-white text-sm  font-semibold `}>
          Did not receive a code!
        </Text>
        <TouchableOpacity>
          <Text style={tw`text-[#00B386] text-sm  font-semibold `}>
            Resend OTP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginOTPScreen;
