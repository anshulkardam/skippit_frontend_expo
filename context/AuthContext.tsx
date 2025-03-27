// import React, { createContext, useContext, useState, useEffect } from 'react';
// import * as SecureStore from 'expo-secure-store';
// import * as Notifications from 'expo-notifications';
// import * as Device from 'expo-device';
// import { Alert, Platform, AppState } from 'react-native';
// import { router } from 'expo-router';

// type UserType = {
//   id: string;
//   phone: string;
//   role: 'Runner' | 'Requester';
// } | null;

// type AuthContextType = {
//   user: UserType;
//   isLoading: boolean;
//   sendOtp: (phone: string) => Promise<void>;
//   verifyOtp: (phone: string, otp: string) => Promise<{ existing_user: boolean; role?: string }>;
//   signOut: () => Promise<void>;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export const BASE_URL = 'https://xjs6k34l-8000.inc1.devtunnels.ms';
// export const BASE_URL = 'http://34.131.24.145:8000';
// export const USERS_BASE_URL = `${BASE_URL}/users`;
// export const TASKS_BASE_URL = `${BASE_URL}/tasks`;
// export const RUNNER_TASKS_BASE_URL = `${TASKS_BASE_URL}/runner`;
// export const REQUESTER_TASKS_BASE_URL = `${TASKS_BASE_URL}/requester`

// async function registerForPushNotifications() {
//     if (!Device.isDevice) {
//         Alert.alert("Must use a physical device for push notifications");
//         return;
//     }

//     const { status } = await Notifications.requestPermissionsAsync();
//     if (status !== 'granted') {
//         Alert.alert("Permission not granted for push notifications");
//         return;
//     }

//     const { data: token } = await Notifications.getExpoPushTokenAsync();

//     await fetch(`${USERS_BASE_URL}/save-fcm-token/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${await SecureStore.getItemAsync('accessToken')}`
//         },
//         body: JSON.stringify({ fcm_token: token }),
//     });

//     return token;
// }

// async function createNotificationChannel() {
//   if (Platform.OS === 'android') {
//     await Notifications.setNotificationChannelAsync('runner_tasks', {
//       name: 'Runner Tasks',
//       importance: Notifications.AndroidImportance.HIGH,
//       sound: 'default',
//     });
//   }
// }

// // Prevent duplicate system notifications & show modal in-app
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<UserType>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     checkUserData();
//     createNotificationChannel();
//   }, []);

//   const checkUserData = async () => {
//     try {
//       const accessToken = await SecureStore.getItemAsync('accessToken');
//       const userDataStr = await SecureStore.getItemAsync('userData');
      
//       if (accessToken && userDataStr) {
//         const userData = JSON.parse(userDataStr);
//         setUser(userData);
//       }
//     } catch (error) {
//       console.error('Error checking user data:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const sendOtp = async (phone: string) => {
//     try {
//       const formattedPhone = phone.startsWith('+') ? phone : `${phone}`;
//       const response = await fetch(`${USERS_BASE_URL}/request-otp/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ phone_number: formattedPhone }),
//       });

//       if (!response.ok) {
//         const error = await response.json();
//         throw new Error(error.message || 'Failed to send OTP');
//       }
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       throw error;
//     }
//   };

//   const verifyOtp = async (phone: string, otp: string) => {
//     try {
//       const response = await fetch(`${USERS_BASE_URL}/verify-otp/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ phone_number: phone, code: otp }),
//       });

//       if (!response.ok) {
//         const error = await response.json();
//         throw new Error(error.message || 'Invalid OTP');
//       }

//       const data = await response.json();
//       if (data.existing_user) {
//         const userData = {
//           id: data.user.phone_number,
//           phone: data.user.phone_number,
//           role: data.user.role,
//           accessToken: data.tokens.access,
//           refreshToken: data.tokens.refresh,
//         };

//         await SecureStore.setItemAsync('accessToken', data.tokens.access);
//         await SecureStore.setItemAsync('refreshToken', data.tokens.refresh);
//         await SecureStore.setItemAsync('userData', JSON.stringify({
//           id: data.user.phone_number,
//           phone: data.user.phone_number,
//           role: data.user.role
//         }));

//         setUser(userData);

//         await registerForPushNotifications();
//         return { existing_user: true, role: data.user.role };
//       }
      
//       return { existing_user: false };
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       throw error;
//     }
//   };

//   const signOut = async () => {
//     try {
//       const accessToken = await SecureStore.getItemAsync('accessToken');
//       if (accessToken) {
//         await fetch(`${USERS_BASE_URL}/logout/`, {
//           method: 'POST',
//           headers: { 
//             'Authorization': `Bearer ${accessToken}`, 
//             'Content-Type': 'application/json' 
//           },
//         });
//       }
//     } catch (error) {
//       console.error('Error during logout:', error);
//     } finally {
//       await SecureStore.deleteItemAsync('accessToken');
//       await SecureStore.deleteItemAsync('refreshToken');
//       await SecureStore.deleteItemAsync('userData');
//       setUser(null);
//       router.replace('/auth/login');
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, isLoading, sendOtp, verifyOtp, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }
