import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import icons from '@/lib/icons'; 

const CreateNewTask = () => {
   return (
      <TouchableOpacity className=" my-4 w-full flex-row justify-between rounded-2xl bg-white p-4 shadow-lg">
         <Text className='text-lg font-semibold'>Create a New Task</Text>
         <Image
            source={icons.plusIcon}
            tintColor={'white'}
            className="size-8 rounded-lg bg-blue-500"
         />
      </TouchableOpacity>
   );
};

export default CreateNewTask;
