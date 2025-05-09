import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-between bg-primary p-5">
      {/* Top Section */}
      <View className="items-center pt-40">
        {/* Removed the {' '} from here */}
        {/* Added pt-10 for some top padding */}
        <Image
          source={require('../assets/icons/LogoWhite.png')} // Adjust the path as necessary
          className="mb-5 h-16 w-16"
          resizeMode="contain"
        />
        <Text className="mb-10 text-center text-4xl font-bold text-white">PESTISAFE</Text>
      </View>

      {/* Bottom Section */}
      <Pressable
        className="mb-40 w-4/5 items-center rounded-lg bg-white px-8 py-4" // Added mb-10 for some bottom padding
        onPress={() => router.replace('/(auth)/login')} // Navigate to login or register
      >
        <Text className="text-xl font-semibold text-primary">Get Started</Text>
      </Pressable>
    </View>
  );
}
