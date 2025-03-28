import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import SearchBar from '@/components/ui/SearchBar';
import icons from '@/lib/icons';
import SavedRunnerCard from '@/components/Profile/SavedRunnerCard';
import NavHeader from '@/components/Common/NavHeader';

const Saved = () => {
   return (
      <SafeAreaView className="px-5">
         <NavHeader title="Saved Runners" />
         <ScrollView contentContainerClassName="pb-40" showsVerticalScrollIndicator={false}>
            <View className="mb-6 flex-row gap-4">
               <SearchBar />
               <TouchableOpacity className="flex items-center justify-center rounded-2xl bg-white p-4">
                  <Image source={icons.filters} className="size-5" />
               </TouchableOpacity>
            </View>
            <View className="gap-4">
               <SavedRunnerCard online={true} />
               <SavedRunnerCard online={false} />
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default Saved;
