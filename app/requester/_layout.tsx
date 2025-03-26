import { Stack } from 'expo-router';

export default function AuthLayout() {
   return (
      <Stack screenOptions={{headerShown:false}}>
         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         <Stack.Screen name="[id]" options={{ headerShown: false }} />
         <Stack.Screen name="welcome" options={{ headerShown: false }} />
      </Stack>
   );
}
