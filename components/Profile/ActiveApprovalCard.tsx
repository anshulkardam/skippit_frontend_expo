import { View, Text, Image } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { Progress } from '../ui/progress';
import Button from '../ui/button';

const ActiveApprovalCard = () => {
   return (
      <View className="w-full rounded-xl bg-white p-6">
         <View className="flex flex-row items-center justify-between">
            <View className="flex h-7 w-[65%] flex-row items-center justify-center rounded-3xl bg-[#FF8E0D]">
               <Text className="text-center text-xs font-semibold text-white">
                  Waiting for your Approval...
               </Text>
               <LottieView
                  source={require('@/assets/animations/hourglass.json')}
                  autoPlay
                  loop
                  style={{ width: 25, height: 25 }}
               />
            </View>
            <Text className="text-sm font-medium">22 Jan, 15:34</Text>
         </View>
         <Text className="mt-3 text-2xl font-bold">Pick up the groceries</Text>
         <Text className="mt-1">
            <Text className="font-semibold">Random Name</Text> has completed the task. Please review
            and confirm completion
         </Text>
         <Progress
            value={87}
            className="my-2 h-3 web:w-[60%]" // Change background color
            indicatorClassName="bg-green-600" // Change filled color
         />
         <View className="mt-1">
            <Text className="font-semibold">Photos:</Text>
            <View className="flex flex-row gap-4">
               <Image
                  source={require('@/assets/images/dummyMap.png')}
                  className="h-20 w-20 rounded-lg"
                  resizeMode="contain"
               />

               <Image
                  source={require('@/assets/images/dummyMap.png')}
                  className="h-20 w-20 rounded-lg"
                  resizeMode="contain"
               />
               <Image
                  source={require('@/assets/images/dummyMap.png')}
                  className="h-20 w-20 rounded-lg"
                  resizeMode="contain"
               />
            </View>
         </View>
         <Text className="font-semibold">
            Task will be Auto-Approved in
            <Text className="text-lg font-bold text-red-600"> 00:58 min</Text>
         </Text>
         <View className="mt-4 flex flex-row gap-3">
            <Button className="flex-1 bg-[#DCDCDC]">
               <Text className="font-medium text-black">Report a Problem</Text>
            </Button>
            <Button className="flex-1 bg-green-600">
               <Text className="font-medium text-white">Approve</Text>
            </Button>
         </View>
      </View>
   );
};

export default ActiveApprovalCard;
