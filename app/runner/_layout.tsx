import React from 'react';
import { Stack } from 'expo-router';

const ProfileLayout = () => {
   return (
      <Stack>
         <Stack.Screen name="home" options={{ headerShown: false }} />
         <Stack.Screen name="welcome" options={{ headerShown: false }} />
      </Stack>
   );
};

export default ProfileLayout;
