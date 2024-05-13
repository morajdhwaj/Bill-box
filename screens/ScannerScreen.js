import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ScannerScreen = () => {
  return (
    <View style={tw`bg-black h-full flex items-center justify-center`}>
      <MaterialIcons name="qr-code-scanner" size={300} color="white" />
    </View>
  );
};

export default ScannerScreen;
