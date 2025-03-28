import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Dot, EllipsisVertical } from 'lucide-react-native';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Button from '../ui/button';
import Ratings from '../ui/ratings';
import { useRouter } from 'expo-router';

const SavedRunnerCard = ({ online }: { online: boolean }) => {
   const router = useRouter();
   return (
      <View className="relative rounded-3xl bg-white p-5 shadow-md">
         <View
            className={`flex h-7 w-24 flex-row items-center justify-center rounded-3xl ${online ? 'bg-green-600' : 'bg-[#767A77]'} `}
         >
            {online && (
               <View className="flex flex-row items-center justify-center">
                  <Text className="text-center font-semibold text-white">Online</Text>
                  <Dot size={30} color={'white'} />
               </View>
            )}
            {!online && (
               <View>
                  <Text className="text-center font-semibold text-white">Offline</Text>
               </View>
            )}
         </View>
         <View className="mt-3 flex-row items-center gap-10">
            <View className="flex-row items-center gap-4">
               <Avatar alt="OM" className="h-16 w-16 border-2 border-green-600">
                  <AvatarImage source={require('@/assets/images/om.jpg')} />
                  <AvatarFallback>
                     <Text>OJ</Text>
                  </AvatarFallback>
               </Avatar>
               <View className="flex flex-col">
                  <Text className="text-xl font-semibold">Om Jaiswal</Text>
                  <Text className="text-base">West Delhi</Text>
               </View>
            </View>
            <Ratings rating={4.4} starSize={19} />
         </View>
         <View className="mt-3 h-[46px] w-[100px] flex-row items-center gap-2 rounded-2xl border border-[#B2B2B2] bg-[#FAFAFA] px-2">
            <Text className="text-2xl font-semibold">20</Text>
            <Text className="flex-1 text-xs font-medium">Tasks Completed</Text>
         </View>
         <View className="mt-3 gap-3">
            <Text className="font-semibold">Preferred Task Categories</Text>
            <FlatList
               data={categories}
               horizontal
               showsHorizontalScrollIndicator={false}
               keyExtractor={(item) => item}
               renderItem={({ item }) => (
                  <TouchableOpacity className="mr-3 flex items-center justify-center rounded-xl bg-blue-500 p-3">
                     <Text className="w-20 text-center font-medium text-white">{item}</Text>
                  </TouchableOpacity>
               )}
            />
         </View>
         <View className="mt-6 flex flex-row items-center gap-3">
            <Button
               onPress={() => router.push('/requester/chat-system')}
               className="flex-1 bg-black"
            >
               <Text className="font-semibold text-white">Chat</Text>
            </Button>
            <Button className="flex-1 bg-green-500">
               <Text className="font-semibold text-white">Assign Now</Text>
            </Button>
            <EllipsisVertical
               size={26}
               color={'black'}
               className="flex items-end justify-end place-self-end"
            />
         </View>
      </View>
   );
};

export default SavedRunnerCard;

const categories = [
   'Household Services',
   'Elderly & Child Care',
   'Delivery & Errands',
   'Pet Care',
   'More...',
];
