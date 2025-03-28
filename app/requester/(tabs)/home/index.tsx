import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavHeaderwithAvatar from '@/components/Common/NavHeaderwithAvatar';
import PopularTaskCard from '@/components/Home/PopularTaskCard';

const Home = () => {
   return (
      <SafeAreaView className="px-5">
         <NavHeaderwithAvatar name="Jaiswal" />
         <View className="mt-3">
            <Text className="text-4xl font-semibold">What do you</Text>
            <Text className="text-4xl font-semibold">need help with?</Text>
         </View>
         <PopularTaskCard />
      </SafeAreaView>
   );
};

export default Home;
