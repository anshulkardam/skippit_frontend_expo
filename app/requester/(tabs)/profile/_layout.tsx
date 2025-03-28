import React from 'react';
import { Stack } from 'expo-router';

const ProfileLayout = () => {
   return (
      <Stack>
         <Stack.Screen name="index" options={{ headerShown: false }} />
         <Stack.Screen name="about" options={{ headerShown: false }} />
         <Stack.Screen name="addresses" options={{ headerShown: false }} />
         <Stack.Screen name="help-support" options={{ headerShown: false }} />
         <Stack.Screen name="notifications-settings" options={{ headerShown: false }} />
         <Stack.Screen name="saved-runners" options={{ headerShown: false }} />
         <Stack.Screen name="settings" options={{ headerShown: false }} />
         <Stack.Screen name="tasks" options={{ headerShown: false }} />
      </Stack>
   );
};

export default ProfileLayout;
