import { View, Text } from 'react-native';
import React from 'react';
import { TrendingUp } from 'lucide-react-native';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Progress } from '../ui/progress';
import Button from '../ui/button';

const ActiveProgressCard = () => {
   return (
      <View className="w-full rounded-xl bg-white p-6">
         <View className="flex flex-row items-center justify-between">
            <View className="flex h-7 w-40 flex-row items-center justify-center gap-2 rounded-3xl bg-[#FFFC4E]">
               <Text className="text-center text-sm font-semibold text-black">In Progress</Text>
               <TrendingUp size={16} color={'black'} />
            </View>
            <Text className="text-sm font-medium">22 Jan, 15:34</Text>
         </View>
         <View className="relative mb-6">
            <Text className="mt-3 text-2xl font-bold">Pick up the groceries</Text>
            <View className="mt-3 flex-row items-center gap-4">
               <View className="items-center">
                  <Avatar alt="OM" className="h-16 w-16 border-2 border-green-600">
                     <AvatarImage source={require('@/assets/images/om.jpg')} />
                     <AvatarFallback>
                        <Text>OJ</Text>
                     </AvatarFallback>
                  </Avatar>
               </View>

               <View className="flex flex-col">
                  <Text className="text-lg font-medium">Assigned to</Text>
                  <Text className="text-xl font-semibold">Random Name</Text>
               </View>
               <Image
                  source={require('@/assets/images/dummyMap.png')}
                  className="absolute -top-2 right-0 ml-2 h-[59px] w-[75px] rounded-lg"
               />
            </View>
            <View className="absolute -bottom-5 left-3 mt-1 flex-row items-center gap-1">
               <Text className="font-semibold">4.5</Text>
               <FontAwesome name="star" size={14} color="gold" />
            </View>
         </View>
         <Progress
            value={87}
            className="my-2 h-3 web:w-[60%]" // Change background color
            indicatorClassName="bg-green-600" // Change filled color
         />
         <View className="mt-4 flex flex-row gap-3">
            <Button className="flex-1 bg-black">
               <Text className="font-semibold text-white">Contact Runner</Text>
            </Button>
            <Button className="flex-1 bg-[#DCDCDC]">
               <Text className="font-semibold text-black">Cancel Task</Text>
            </Button>
         </View>
      </View>
   );
};

export default ActiveProgressCard;
