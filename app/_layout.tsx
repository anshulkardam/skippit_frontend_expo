import { SplashScreen, Stack } from 'expo-router';
import './globals.css';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout() {
   const [fontsLoaded] = useFonts({
      'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
   });

   useEffect(() => {
      if (fontsLoaded) {
         SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) {
      return null;
   }
   return (
      <Stack>
         <Stack.Screen name="index" options={{ headerShown: false }} />
         <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
   );
}
