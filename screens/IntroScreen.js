import React, {useEffect} from 'react';
import {Image, PermissionsAndroid, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IntroScreen = ({navigation}) => {
  const slides = [
    {
      key: '1',
      title: 'Intro Stock Photos 2 Hard-Hitting Intro Backgrounds',
      text: 'Escape the Ordinary: Feed Your Adventurous Spirit and Discover a World of New Flavors Adventurous Spirit and Discover a World of New Flavors!!',
      image: require('../assets/images/intro-1.jpeg'),
      backgroundColor: 'red',
    },
    {
      key: '2',
      title: 'Intro Background Images ',
      text: 'Say goodbye to late deliveries and start your craving journey with us! Get your food delivered in minutes.',
      image: require('../assets/images/intro-2.jpeg'),
      backgroundColor: 'blue',
    },
    {
      key: '3',
      title: '22 Hard-Hitting Intro Backgrounds',
      text: 'Tantalize Your Taste Buds with affordable food. Savor international flavors and live the good food.',
      image: require('../assets/images/intro-3.jpeg'),
      backgroundColor: 'green',
    },
    {
      key: '4',
      title: 'Slash Logo Reveal Intro In Kinemaster',
      text: 'Tantalize Your Taste Buds with affordable food. Savor international flavors and live the good food.',
      image: require('../assets/images/intro-4.jpeg'),
      backgroundColor: 'green',
    },
  ];

  const requestNotificaionPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'notificaion Permission',
          message: 'Can we get notificaion permission?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can notify');
        return true;
      } else {
        console.log('You cannot use notify');
        return false;
      }
    } catch (err) {
      console.error(err);
      alert(err);
      return false;
    }
  };

  useEffect(() => {
    requestNotificaionPermission();
  }, []);

  const renderSlide = ({item}) => {
    return (
      <View style={tw``}>
        <View
          style={tw` h-5/8 w-full bg-black items-center justify-center`}
          source={item.image}>
          <Image style={tw` h-5/6 w-5/6 rounded-2xl`} source={item.image} />
        </View>
        <View style={tw`h-3/8 bg-black px-8 `}>
          <Text style={tw`font-bold text-xl pt-5 text-white`}>
            {item.title}
          </Text>
          <Text style={tw`mt-3  text-[#FBFBFB] leading-6`}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const renderNextButton = () => {
    return <Ionicons name="arrow-forward" size={30} color="#00B386" />;
  };
  const renderDoneButton = () => {
    return (
      <View style={tw`bg-[#00B386] rounded-full`}>
        <Text style={tw`px-5 py-2 text-white `}>Get Started</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderSlide}
      onDone={() => navigation.navigate('LoginScreen')}
      activeDotStyle={{backgroundColor: 'black'}}
      dotStyle={{backgroundColor: 'black'}}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
    />
  );
};

export default IntroScreen;
