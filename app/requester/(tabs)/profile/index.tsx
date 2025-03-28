import { View, Text, ScrollView, ImageSourcePropType, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from '@/components/Profile/ProfileHeader';
import ProfileButtons from '@/components/Profile/ProfileButtons';
import Icon from 'react-native-vector-icons/Ionicons';
import icons from '@/lib/icons';
import { ProfileNavigationRoute, settingslist } from '@/lib/constants';
import { useRouter } from 'expo-router';
import { Switch } from '@/components/ui/switch';

const Index = () => {
   const router = useRouter();
   const [checked, setChecked] = React.useState(false);

   const handleProfileNavigations = (href: ProfileNavigationRoute) => {
      router.push(href);
   };

   const handleLogout = async () => {
      // Implement logout logic
   };
   return (
      <SafeAreaView>
         <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-40 px-5">
            <ProfileHeader />
            <View className="mt-4 flex flex-row justify-between">
               <ProfileButtons
                  title="My Tasks"
                  icon={icons.tasks}
                  onPress={() => router.push('/requester/profile/tasks')}
               />
               <ProfileButtons
                  title="Saved Runners"
                  icon={icons.wishlist}
                  onPress={() => router.push('/requester/profile/saved-runners')}
               />
            </View>
            <View className="mt-4 flex flex-col rounded-lg bg-white px-4 py-2">
               {settingslist.map((setting) => (
                  <Settings
                     key={setting.id}
                     icon={setting.icon}
                     title={setting.title}
                     showArrow={true}
                     onPress={() => handleProfileNavigations(setting.href)}
                  />
               ))}
               {/* Dark Mode Button */}
               <TouchableOpacity
                  className={`flex flex-row items-center justify-between border-b border-[#EAEAEA] py-3`}
               >
                  <View className="flex flex-row items-center gap-3">
                     <Image source={icons.modes} className="size-6" />
                     <Text className="text-lg font-medium">Dark Mode</Text>
                  </View>
                  <Switch checked={checked} onCheckedChange={setChecked} nativeID="dark-mode" />
               </TouchableOpacity>
               {/* Log Out Button */}
               <Settings icon={icons.logout} title="Log Out" showArrow={true} />
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default Index;

interface SettingsProps {
   icon: ImageSourcePropType;
   title: string;
   onPress?: () => void;
   textStyle?: string;
   showArrow?: boolean;
   showSwitch?: boolean;
}

const Settings = ({ icon, title, onPress, textStyle, showArrow, showSwitch }: SettingsProps) => (
   <TouchableOpacity
      onPress={onPress}
      className={`flex flex-row items-center justify-between py-3 ${title === 'Log Out' ? '' : 'border-b border-[#EAEAEA]'}`}
   >
      <View className="flex flex-row items-center gap-3">
         <Image source={icon} className="size-6" />
         <Text className="text-lg font-medium">{title}</Text>
      </View>
      {showArrow && <Icon name="chevron-forward" size={16} />}
   </TouchableOpacity>
);
