import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'analytics_events';

export const initDatabase = async () => {
  // No initialization needed for AsyncStorage
};

export const insertEvent = async (event_name, event_data) => {
  try {
    const existingEvents = await AsyncStorage.getItem(STORAGE_KEY);
    let events = existingEvents ? JSON.parse(existingEvents) : [];
    events.push({event_name, event_data, timestamp: new Date().toISOString()});
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (error) {
    console.error('Error inserting event:', error);
  }
};

export const getEvents = async () => {
  try {
    const events = await AsyncStorage.getItem(STORAGE_KEY);
    return events ? JSON.parse(events) : [];
  } catch (error) {
    console.error('Error getting events:', error);
    return [];
  }
};

export const clearEvents = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log('All events cleared!');
  } catch (error) {
    console.error('Error clearing events:', error);
  }
};
