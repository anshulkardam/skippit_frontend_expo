import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '@/components/ui/back-button';

const Tasks = () => {
   return (
      <SafeAreaView>
         <ScrollView>
            <View className="flex justify-between">
               <View className="flex flex-row gap-2">
                  <BackButton />
                  <Text>My Tasks</Text>
               </View>
               <View>Notifs</View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default Tasks;
