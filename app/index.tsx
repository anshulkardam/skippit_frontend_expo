import { View, Text, StatusBar, Image } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/(auth)/login");
        }, 2000);
    }, []);

    return (
        <View className="bg-neutral-800 flex-1 items-center justify-center">
            <StatusBar backgroundColor="#262626" barStyle="light-content" />
            <Image
                source={require("../assets/images/logo.png")}
                resizeMode="contain"
                className="h-[25%] aspect-square"
            />
        </View>
    );
};

export default Index;
