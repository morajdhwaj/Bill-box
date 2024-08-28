import React from 'react';
import tw from 'twrnc';
import {Image, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('IntroScreen');
  }, 3000);

  return (
    <View style={tw`h-full bg-black flex items-center justify-center`}>
      <Image
        source={require('../assets/images/bill.jpg')}
        ImageBackground
        style={tw`h-28 w-28 rounded-full`}
      />
    </View>
  );
};

export default SplashScreen;
