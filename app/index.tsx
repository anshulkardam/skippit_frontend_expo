import { View, Text, StatusBar, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
   const router = useRouter();
   useEffect(() => {
      setTimeout(() => {
         router.push('/requester/welcome');
      }, 2000);
   }, []);

   return (
      <View className="flex-1 items-center justify-center">
         <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
         />
         <Image
            source={require('../assets/images/logo.png')}
            resizeMode="contain"
            className="aspect-square h-[25%]"
         />
      </View>
   );
};

export default Index;
