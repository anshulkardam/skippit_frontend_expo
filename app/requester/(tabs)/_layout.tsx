import { Stack } from 'expo-router';

export default function Layout() {
   return (
      <Stack>
         <Stack.Screen name="home" options={{ headerShown: false }} />
         <Stack.Screen name="profile" options={{ headerShown: false }} />
         <Stack.Screen name="wallet" options={{ headerShown: false }} />
      </Stack>
   );
}
