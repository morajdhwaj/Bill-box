import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const FAQDropdown = ({ question, answer, open, onPress }) => {
  return (
    <View style={tw` border-b border-b-gray-800 pt-1 pb-3`}>
      <TouchableOpacity onPress={onPress}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-lg font-semibold text-white`}>{question}</Text>
          {open ? (
            <Text style={tw`font-bold text-3xl text-white`}>-</Text>
          ) : (
            <Text style={tw`font-bold text-2xl text-white`}>+</Text>
          )}
        </View>
      </TouchableOpacity>
      {open && <Text style={tw`mt-2 text-white`}>{answer}</Text>}
    </View>
  );
};

export default FAQDropdown;
