import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavHeaderwithAvatar from '@/components/Common/NavHeaderwithAvatar'; 
import CreateNewTask from '@/components/Home/CreateNewTask';
import Button from '@/components/ui/button';
import { Entypo } from '@expo/vector-icons';
import PopularTasks from '@/components/Home/PopularTasks';
import BrowseByCategory from '@/components/Home/BrowseByCategory';

const Home = () => {
   return (
      <SafeAreaView className="px-5">
         <ScrollView contentContainerClassName="pb-40" showsVerticalScrollIndicator={false}>
            <NavHeaderwithAvatar name="Jaiswal" />
            <View className="mt-3">
               <Text className="text-4xl font-semibold">What do you</Text>
               <Text className="text-4xl font-semibold">need help with?</Text>
            </View>
            <CreateNewTask />
            <PopularTasks />
            <BrowseByCategory />
            <Button className="bg-[#DCDCDC] mt-4">
               <View className="flex-row items-center gap-2">
                  <View className="relative flex-row">
                     <Entypo
                        name="dots-two-vertical"
                        size={20}
                        color={'blue'}
                        className="absolute left-2"
                     />
                     <Entypo name="dots-two-vertical" size={20} color={'blue'} />
                  </View>
                  <Text className="font-semibold">All Categories</Text>
               </View>
            </Button>
         </ScrollView>
      </SafeAreaView>
   );
};

export default Home;
