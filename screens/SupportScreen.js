import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import FAQDropdown from "../components/ProfileScreenComponents/FAQDropdown";

const SupportScreen = ({ navigation }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handlePress = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Billbox?",
      answer:
        "There are many variations of passages of Lsdsadsaorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      question: "How to add document?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      question: "How to add document?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      question: "How to add document?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
  ];

  return (
    <View style={tw`bg-black h-full`}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}
      >
        <View style={tw`flex flex-row gap-5 items-center `}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg font-semibold`}>FAQs</Text>
        </View>
      </View>
      <View style={tw` mt-10 m-5 `}>
        <View style={tw`flex gap-2`}>
          <Text style={tw`text-xl font-semibold text-white`}>
            We are here to help you with anything and everything on billbox
          </Text>
          <Text style={tw` text-[#cbcbcb] text-xs`}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </Text>
        </View>
        <View style={tw``}>
          <View style={tw` p-4 mt-5 h-80 `}>
            {faqs.map((faq, index) => (
              <FAQDropdown
                key={index}
                question={faq.question}
                answer={faq.answer}
                open={openIndex === index}
                onPress={() => handlePress(index)}
              />
            ))}
          </View>
          <View style={tw` p-4 mt-5 flex gap-4`}>
            <Text style={tw`text-white text-center font-semibold text-sm`}>
              Still stuck? Help us a mail away
            </Text>
            <TouchableOpacity
              style={tw`bg-[#00B386] rounded-lg`}
              onPress={() => navigation.navigate("ContactUsScreen")}
            >
              <Text
                style={tw`text-center p-2 text-white text-lg font-semibold`}
              >
                Send Message
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SupportScreen;
