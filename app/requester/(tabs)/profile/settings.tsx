import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsSubHeadings from '@/components/Settings/SettingSubheading';
import icons from '@/lib/icons';
import NavHeader from '@/components/Common/NavHeader';

const settings = () => {
   return (
      <SafeAreaView className="px-5">
         <NavHeader title="Settings" />
         <View className="gap-4 rounded-xl bg-white p-5 shadow-md">
            <View>
               <SettingsSubHeadings icon={icons.settings} title="General Settings" />
               <View className="mt-2">
                  <Text className="text-sm">Language</Text>
               </View>
            </View>
            <View>
               <SettingsSubHeadings icon={icons.accountSettings} title="Account Settings" />
               <View className="mt-2 gap-1.5">
                  <Text className="text-sm">Change Email</Text>
                  <Text className="text-sm">Change Password</Text>
                  <Text className="text-sm">Two-Factor Authentication</Text>
               </View>
            </View>
            <View>
               <SettingsSubHeadings icon={icons.privacy} title="Privacy & Security" />
               <View className="mt-2 gap-1.5">
                  <Text className="text-sm">Manage Data & Permissions</Text>
                  <Text className="text-sm">Delete Account</Text>
               </View>
            </View>
         </View>
      </SafeAreaView>
   );
};

export default settings;
