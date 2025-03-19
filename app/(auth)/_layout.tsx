import { Stack } from 'expo-router';

export default function AuthLayout() {
   return (
      <Stack>
         <Stack.Screen name="login" options={{ headerShown: false }} />
         <Stack.Screen name="otp" options={{ headerShown: false }} />
         <Stack.Screen name="choose-role" options={{ headerShown: false }} />
      </Stack>
   );
}
