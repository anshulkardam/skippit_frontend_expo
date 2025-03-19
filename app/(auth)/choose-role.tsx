import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '@/components/ui/back-button';
import RoleCard from '@/components/role-card';
import { useRouter } from 'expo-router';


const ChooseRole = () => {
   const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const router = useRouter();
   const handleRedirect = () => {
    if(selectedRole==="Runner") {
      router.replace("/runner/welcome")
    } else if(selectedRole==="Requester") {
      router.replace("/requester/welcome")
    }
    else {
      throw Error("404")
    }
   }
   return (
      <SafeAreaView className="flex-1 items-center">
         <BackButton />
         <View className="flex-1 items-center justify-center">
            <Text className="text-center text-4xl font-semibold text-neutral-800">
               How do you want to use Skipp?
            </Text>
            <View className="mt-20 flex w-full flex-row gap-10">
               <RoleCard
                  title="Requester"
                  description="Post tasks and find skilled individuals nearby to get them done"
                  isSelected={selectedRole === 'Requester'}
                  onSelect={() => setSelectedRole('Requester')}
               />
               <RoleCard
                  title="Runner"
                  description="Browse tasks, complete them, and earn money instantly."
                  isSelected={selectedRole === 'Runner'}
                  onSelect={() => setSelectedRole('Runner')}
               />
            </View>
         </View>
         <View className="w-full px-5">
            <TouchableOpacity
            onPress={handleRedirect}
               className={`my-6 h-14 w-full items-center justify-center rounded-[12px] bg-[#007BFF] disabled:bg-[#DBDBDB] ${
                  !selectedRole ? 'opacity-50' : ''
               }`}
               disabled={!selectedRole}
            >
               <Text className="text-lg font-medium text-white">
                  {selectedRole? `Continue as ${selectedRole}` : "Select Role"}
               </Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

export default ChooseRole;
