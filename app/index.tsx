import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-between bg-primary p-5">

      <View className="items-center pt-40">
        <Image
          source={require('../assets/icons/LogoWhite.png')} // Adjust the path as necessary
          className="w-16 h-16 mb-5"
          resizeMode="contain"
        />
        <Text className="text-4xl text-white font-bold mb-10 text-center">
          PESTISAFE
        </Text>
      </View>


      <Pressable
        className="bg-white py-4 px-8 rounded-lg w-4/5 items-center mb-40" // Added mb-10 for some bottom padding
        onPress={() => router.push('/login')} // Navigate to login or register
      >
        <Text className="text-primary text-xl font-semibold">Get Started</Text>
      </Pressable>
    </View>
  );
}