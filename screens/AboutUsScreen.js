import React, { useState } from "react";
import { Alert, Modal, Pressable, Text, View } from "react-native";
import tw from "twrnc";

const AboutUsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[tw`flex-1 justify-center items-center mt-5`]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[tw`flex-1 justify-center items-center`]}>
          <View style={[tw`bg-white rounded-2xl p-9 shadow-md`]}>
            <Text style={[tw`text-center text-lg font-bold mb-5`]}>
              Hello World!
            </Text>
            <Pressable
              style={[tw`bg-blue-500 rounded-lg py-3 px-6`]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[tw`text-white font-bold text-lg`]}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[tw`bg-purple-500 rounded-lg py-3 px-6`]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[tw`text-white font-bold text-lg`]}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default AboutUsScreen;
