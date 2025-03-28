import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import icons from '@/lib/icons';

const BrowseByCategory = () => {
   return (
      <View>
         <Text className="my-3 text-lg font-semibold">Browse by Category</Text>
         <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
               <View className='mr-6'>
                  <TouchableOpacity className="relative items-center pt-2">
                     <View className="rounded-full bg-[#DCDCDC] p-9"></View>
                     <Image
                        source={item.icon}
                        className="absolute top-0 h-[75px] w-[85px]"
                        resizeMode="contain"
                     />
                  </TouchableOpacity>
                  <Text className="mt-4 w-20 text-center font-semibold text-black">{item.title}</Text>
               </View>
            )}
         />
      </View>
   );
};

export default BrowseByCategory;

const categories = [
   {
      icon: icons.CleaningService,
      title: 'Household Services',
   },
   {
      icon: icons.defaultRunner,
      title: 'Delivery & Errands',
   },
   {
      icon: icons.AnimalService,
      title: 'Pet Care',
   },
   {
      icon: icons.DayServices,
      title: 'Elderly and Chilren',
   },
];
