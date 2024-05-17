import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Share,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';

const TermsModal = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      style={tw`
      `}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={[tw` h-full w-full justify-end items-center px-5 py-2`]}>
        <View style={[tw`bg-black  w-full   `]}>
          <View style={tw` my-4 flex gap-4`}>
            <Text style={tw`text-white text-xl font-semibold`}>
              How It Works?
            </Text>
            <Text style={tw`text-white`}>
              Billbox referral program is for select user who have already
              invested through Billbox
            </Text>
            <Text style={tw`text-white`}>
              Share your Billbox referral link with your friend.
            </Text>
            <Text style={tw`text-white`}>
              By participating , you accept our
              <Text style={tw`text-[#9299DE]`}> terms and conditions</Text>
            </Text>
          </View>
          <View style={tw`flex  gap-2 `}>
            <TouchableOpacity
              style={tw`bg-[#00B386]   rounded-lg`}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={tw`text-white text-xl self-center font-semibold py-2 `}>
                OKAY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TermsModal;
