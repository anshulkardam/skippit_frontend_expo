import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Star, TrendingUp } from 'lucide-react-native';
import Button from '@/components/ui/button';
import LottieView from 'lottie-react-native';
import { Progress } from '@/components/ui/progress';
import OrderCard from '@/components/Profile/CompletedOrders';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FontAwesome } from '@expo/vector-icons';
import ActiveApprovalCard from '@/components/Profile/ActiveApprovalCard';
import ActiveProgressCard from '@/components/Profile/ActiveProgressCard';
import NavHeader from '@/components/Common/NavHeader';

const Tasks = () => {
   const [state, setState] = useState<'active' | 'recurring' | 'completed'>('active');
   return (
      <SafeAreaView className="px-5">
         <NavHeader title="My Tasks" />
         <ScrollView contentContainerClassName="pb-40" showsVerticalScrollIndicator={false}>
            <View className="mb-4 w-full rounded-xl bg-white p-3">
               <View className="flex flex-row gap-3">
                  <Button
                     onPress={() => setState('active')}
                     className={`flex-1 ${state === 'active' ? 'bg-theme' : 'bg-[#F3F3F3]'}`}
                  >
                     <Text
                        className={`font-medium ${state === 'active' ? 'text-white' : 'text-black'}`}
                     >
                        Active
                     </Text>
                  </Button>
                  <Button
                     onPress={() => setState('recurring')}
                     className={`flex-1 ${state === 'recurring' ? 'bg-theme' : 'bg-[#F3F3F3]'}`}
                  >
                     <Text
                        className={`font-medium ${state === 'recurring' ? 'text-white' : 'text-black'}`}
                     >
                        Recurring
                     </Text>
                  </Button>
                  <Button
                     onPress={() => setState('completed')}
                     className={`flex-1 ${state === 'completed' ? 'bg-theme' : 'bg-[#F3F3F3]'}`}
                  >
                     <Text
                        className={`font-medium ${state === 'completed' ? 'text-white' : 'text-black'}`}
                     >
                        Completed
                     </Text>
                  </Button>
               </View>
            </View>
            {state === 'active' && (
               <View className="gap-4">
                  <ActiveApprovalCard />
                  <ActiveProgressCard />
                  <ActiveProgressCard />
               </View>
            )}
            {state === 'recurring' && (
               <View className="gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                     <OrderCard type="recurring" />
                  ))}
               </View>
            )}
            {state === 'completed' && (
               <View className="gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                     <OrderCard type="completed" />
                  ))}
               </View>
            )}
         </ScrollView>
      </SafeAreaView>
   );
};

export default Tasks;
