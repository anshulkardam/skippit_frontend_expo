import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavHeader from '@/components/Common/NavHeader';
import Button from '@/components/ui/button';

const notifications = () => {
   const [state, setState] = useState<'all' | 'unread'>('all');
   return (
      <SafeAreaView className='px-5'>
         <NavHeader title="Notifications" />
         <ScrollView contentContainerClassName="pb-40" showsVerticalScrollIndicator={false}>
            <View className="mb-4 w-full rounded-xl bg-white p-3">
               <View className="flex flex-row gap-3">
                  <Button
                     onPress={() => setState('all')}
                     className={`flex-1 ${state === 'all' ? 'bg-theme' : 'bg-[#F3F3F3]'}`}
                  >
                     <Text
                        className={`font-medium ${state === 'all' ? 'text-white' : 'text-black'}`}
                     >
                        All
                     </Text>
                  </Button>
                  <Button
                     onPress={() => setState('unread')}
                     className={`flex-1 ${state === 'unread' ? 'bg-theme' : 'bg-[#F3F3F3]'}`}
                  >
                     <Text
                        className={`font-medium ${state === 'unread' ? 'text-white' : 'text-black'}`}
                     >
                        Unread
                     </Text>
                  </Button>
               </View>
            </View>
            {state === 'all' && <View className="gap-4"></View>}
            {state === 'unread' && <View className="gap-4"></View>}
         </ScrollView>
      </SafeAreaView>
   );
};

export default notifications;
