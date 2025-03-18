import { Stack } from "expo-router"; 

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen 
   name="otp" 
   options={{ 
      title: "OTP Verification",
      headerTitleStyle: {
         fontSize: 16, // Adjust size as needed
         fontWeight: '500',
      }
   }} 
/>

        </Stack>
    );
}
