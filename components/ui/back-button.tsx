import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const BackButton = () => {
   const router = useRouter();

   return (
      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
         <Icon name="chevron-back" size={29} />
      </TouchableOpacity>
   );
};

export default BackButton;

const styles = StyleSheet.create({
   button: {
      alignSelf: 'flex-start',
      paddingLeft: 5,
      marginTop: 18
   },
});
