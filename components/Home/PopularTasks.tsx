import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import PopularTaskCard from './PopularTaskCard';
import { FlatList } from 'react-native';

const PopularTasks = () => {
   return (
      <View className="mb-4">
         <Text className="my-3 text-lg font-semibold">Popular Tasks</Text>
         <FlatList
            data={taskList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
               <PopularTaskCard description={item.description} title={item.title} />
            )}
         />
      </View>
   );
};

export default PopularTasks;

const taskList = [
   {
      title: 'Pick up the groceries',
      description: 'Need someone to pick up groceries from store nearby location',
   },
   {
      title: 'Deliver a Package',
      description: 'Need someone to deliver a package across town',
   },
   {
      title: 'Walk my Dog',
      description: 'Need someone to look after your pet',
   },
   {
      title: 'Pick up my Food',
      description: 'Need someone to grab my food and deliver it to my home',
   },
];
