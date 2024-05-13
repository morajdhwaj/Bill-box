import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";

const WarrantyComponent = ({ setTab }) => {
  return (
    <View style={tw`bg-black `}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}
      >
        <View style={tw`flex flex-row gap-5 items-center `}>
          <TouchableOpacity onPress={() => setTab("home")}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg font-semibold`}>Warranty</Text>
        </View>
      </View>
      <View style={tw` mt-10 `}></View>
    </View>
  );
};

export default WarrantyComponent;
