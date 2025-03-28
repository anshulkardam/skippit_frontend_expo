import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/lib/icons';
import { Switch } from '@/components/ui/switch';
import SettingsSubHeadings from '@/components/Settings/SettingSubheading';
import NavHeader from '@/components/Common/NavHeader';

const notifications = () => {
   return (
      <SafeAreaView className="px-5">
         <NavHeader title="Notifications Settings" />
         <View className="gap-4 rounded-xl bg-white p-5 shadow-md">
            <View>
               <SettingsSubHeadings icon={icons.settings} title="General Notifications" />
               <View className="mt-2">
                  {generalSettings.map((setting) => (
                     <SettingsWithSwitch
                        key={setting.id}
                        title={setting.label}
                        subtitle={setting.subtitle}
                     />
                  ))}
               </View>
            </View>
            <View>
               <SettingsSubHeadings icon={icons.settings} title="Task Notifications" />
               <View className="mt-2">
                  {taskNotifications.map((setting) => (
                     <SettingsWithSwitch key={setting.id} title={setting.label} check={true} />
                  ))}
               </View>
            </View>
            <View>
               <SettingsSubHeadings icon={icons.settings} title="Chat & Communication" />
               <View className="mt-2">
                  {chatSettings.map((setting) => (
                     <SettingsWithSwitch key={setting.id} title={setting.label} />
                  ))}
               </View>
            </View>
            <View>
               <SettingsSubHeadings icon={icons.settings} title="Security & Account Alerts" />
               <View className="mt-2">
                  {securitySettings.map((setting) => (
                     <SettingsWithSwitch key={setting.id} title={setting.label} check={true} />
                  ))}
               </View>
            </View>
         </View>
      </SafeAreaView>
   );
};

export default notifications;

export function SettingsWithSwitch({
   title,
   subtitle,
   check,
}: {
   title: string;
   subtitle?: string;
   check?: boolean;
}) {
   const [checked, setChecked] = React.useState(check);
   return (
      <View className="my-1 flex flex-row items-center justify-between">
         <View className="flex flex-col items-start">
            <Text className="font-medium">{title}</Text>
            {subtitle && <Text className="text-xs">{subtitle}</Text>}
         </View>
         <Switch checked={checked ?? false} onCheckedChange={setChecked} nativeID="dark-mode" />
      </View>
   );
}

const generalSettings = [
   {
      id: 'task-update',
      label: 'Task Updates',
      subtitle: 'Status changes, new runner assigned',
   },
   {
      id: 'offers',
      label: 'Promotions & Offers',
      subtitle: 'Discounts, referral rewards',
   },
   {
      id: 'app-updates',
      label: 'App Updates',
      subtitle: 'App updates & announcements',
   },
];

const taskNotifications = [
   {
      id: 'accept-tasks',
      label: 'When runner accepts your tasks',
   },
   {
      id: 'task-complete',
      label: 'When task is completed',
   },
   {
      id: 'reminders',
      label: 'Task Reminders',
   },
];

const chatSettings = [
   {
      id: 'runner-message',
      label: 'New messages from runners',
   },
   {
      id: 'support-message',
      label: 'New messages from support',
   },
];

const securitySettings = [
   {
      id: 'new-device',
      label: 'Login from new device',
   },
   {
      id: 'payment',
      label: 'Payment & transaction updates',
   },
];
