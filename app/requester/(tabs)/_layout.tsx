import icons from '@/lib/icons';
import { Stack, Tabs } from 'expo-router';
import { Image, Text, View } from 'react-native';

const TabIcon = ({ focused, icon, title }: { focused: boolean; icon: any; title: string }) => (
   <View className="mt-1 flex flex-1 flex-col items-center">
      <Image
         source={icon}
         tintColor={focused ? '#007BFF' : '#000000'}
         resizeMode="contain"
         className="size-7"
      />
      <Text
         className={`${
            focused ? 'font-medium text-[#007BFF]' : ''
         } mt-1 w-full text-center text-sm`}
      >
         {title}
      </Text>
   </View>
);

export default function Layout() {
   return (
      <Tabs
         screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
               backgroundColor: 'white',
               position: 'absolute',
               borderTopColor: '#0061FF1A',
               borderTopWidth: 1,
               minHeight: 60,
            },
         }}
      >
         <Tabs.Screen
            name="home"
            options={{
               title: 'Home',
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon icon={icons.home} focused={focused} title="Home" />
               ),
            }}
         />
         <Tabs.Screen
            name="wallet"
            options={{
               title: 'Wallet',
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon icon={icons.wallet} focused={focused} title="Wallet" />
               ),
            }}
         />
         <Tabs.Screen
            name="profile"
            options={{
               title: 'Profile',
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                  <TabIcon icon={icons.user} focused={focused} title="Profile" />
               ),
            }}
         />
      </Tabs>
   );
}
