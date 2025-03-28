import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavHeader from '@/components/Common/NavHeader';

const About = () => {
   return (
      <SafeAreaView className="px-5">
         <NavHeader title="About" />
         <ScrollView contentContainerClassName="pb-40" showsVerticalScrollIndicator={false}>
            <View>
               <Text className="my-3 text-lg font-semibold">Welcome to Skippit</Text>
            </View>
            <View className="w-full gap-4 rounded-xl bg-white p-5 shadow-md">
               <View className="flex w-full flex-col justify-between gap-3">
                  <Text className="font-semibold">
                     Welcome to Skipit – Your Hyperlocal Freelancing Platform!
                  </Text>
                  <Text className="mt-2 flex-wrap font-medium">
                     Skipit connects people who need help with everyday tasks (Requisters) with
                     skilled individuals ready to assist (Runners). Whether it's household chores,
                     deliveries, errands, or specialized services, Skipit makes it easy to find
                     reliable help nearby.
                  </Text>
               </View>
            </View>

            <View className="mt-4">
               <Text className="my-3 text-lg font-semibold">🚀 Why Skipit?</Text>
            </View>
            <View className="w-full gap-2 rounded-xl bg-white p-6 shadow-md">
               {features.map((feature, index) => (
                  <View key={index} className="flex flex-row">
                     <Text className="mr-2 text-lg font-semibold">•</Text>
                     <Text className="flex-1">
                        <Text className="text-lg font-semibold">{feature.title} - </Text>
                        {feature.description}
                     </Text>
                  </View>
               ))}
            </View>

            <View className="mt-4">
               <Text className="my-3 text-lg font-semibold">🌍 Our Mission</Text>
            </View>
            <View className="w-full gap-4 rounded-xl bg-white p-5 shadow-md">
               <View className="flex w-full flex-col justify-between">
                  <Text className="flex-wrap font-medium">
                     Skipit aims to empower local communities by creating flexible earning
                     opportunities for individuals while making life easier for those seeking help.
                  </Text>
               </View>
            </View>

            <View className="mt-4">
               <Text className="my-3 text-lg font-semibold">📍 How It Works?</Text>
            </View>
            <View className="w-full gap-2 rounded-xl bg-white p-6 shadow-md">
               {howitworks.map((feature, index) => (
                  <View key={index} className="flex flex-row">
                     <Text className="mr-2 text-lg font-semibold">{index + 1}.</Text>
                     <Text className="flex-1 items-center">
                        <Text className="text-lg font-semibold">{feature.title} - </Text>
                        {feature.description}
                     </Text>
                  </View>
               ))}
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default About;

const features = [
   {
      title: 'Quick & Easy Task Posting',
      description: 'Post a task in seconds and get responses from nearby Runners.',
   },
   {
      title: 'Trusted & Verified Runners',
      description: 'Choose from rated and reviewed Runners to ensure quality service.',
   },
   {
      title: 'Seamless Communication',
      description: 'Chat with Runners directly within the app for clarity.',
   },
   {
      title: 'Secure Payments',
      description: 'Pay securely through multiple payment options or choose cash on completion.',
   },
];

const howitworks = [
   {
      title: 'Post a Task',
      description: 'Describe what you need, set a price, and publish.',
   },
   {
      title: 'Get Matched',
      description: 'Nearby Runners see your task and can accept it.',
   },
   {
      title: 'Assign & Track',
      description: 'Choose the best Runner and track task progress.',
   },
   {
      title: 'Complete & Review',
      description: 'Pay securely and leave a review.',
   },
];
