import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Share,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

const LogoutModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={[tw` h-full w-full justify-end items-center p-5`]}>
        <View style={[tw`bg-black  w-full  shadow-md `]}>
          <View style={tw` my-4`}>
            <Text style={[tw`text-white   text-lg font-bold `]}>Log out?</Text>
            <Text style={[tw`text-white   text-sm  `]}>
              Are you want log out?
            </Text>
          </View>
          <View style={tw`flex  gap-2`}>
            <TouchableOpacity
              style={tw`bg-[#00B386]   rounded-lg`}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={tw`text-white text-xl self-center font-bold py-2 `}>
                Log Out
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`border border-[#46736A] rounded-lg `}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={tw`text-white text-xl self-center font-bold py-2 `}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
