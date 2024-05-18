import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import HomeBottomTabs from '../components/HomeScreenComponents/HomeBottomTabs';
import DocumentScanner from 'react-native-document-scanner-plugin';
import UploadImage from '../components/HomeScreenComponents/UploadImage';
import BillsComponents from '../components/HomeScreenComponents/BillsComponents';
import HomeComponent from '../components/HomeScreenComponents/HomeComponent';
import RewardComponent from '../components/HomeScreenComponents/RewardComponent';
import WarrantyComponent from '../components/HomeScreenComponents/WarrantyComponent';
import {getEvents, initDatabase} from '../database/database';

const HomeScreen = ({navigation, route}) => {
  const [scannedImage, setScannedImage] = useState('');
  const [tab, setTab] = useState('home');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await initDatabase();
        const initialEvents = await getEvents();
        setEvents(initialEvents);
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };

    initializeDatabase();
  }, []);

  const scanDocument = async () => {
    const {scannedImages} = await DocumentScanner.scanDocument({});

    if (scannedImages?.length > 0) {
      setScannedImage(scannedImages[0]);
    }
  };

  console.log(events);
  return (
    <View style={tw`bg-[#000] h-full flex justify-between `}>
      <View style={tw`h-[90%]`}>
        {tab === 'home' && (
          <View>
            <HomeComponent navigation={navigation} />
          </View>
        )}
        {tab === 'bills' && (
          <View>
            <BillsComponents setTab={setTab} navigation={navigation} />
          </View>
        )}
        {tab === 'add' && (
          <View>
            {scannedImage && (
              <UploadImage
                setTab={setTab}
                scannedImage={scannedImage}
                setScannedImage={setScannedImage}
              />
            )}
          </View>
        )}
        {tab === 'reward' && (
          <View>
            <RewardComponent
              events={events}
              setTab={setTab}
              setEvents={setEvents}
              navigation={navigation}
            />
          </View>
        )}
        {tab === 'warranty' && (
          <View>
            <WarrantyComponent setTab={setTab} navigation={navigation} />
          </View>
        )}
      </View>
      <View style={tw`h-[10%]`}>
        <HomeBottomTabs
          setTab={setTab}
          tab={tab}
          scanDocument={scanDocument}
          setEvents={setEvents}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
