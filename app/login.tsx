import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
// For a real checkbox, you might use a library like 'expo-checkbox'
import Checkbox from 'expo-checkbox';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password.');
      return;
    }
    console.log('Logging in with:', email, password, 'Remember Me:', rememberMe);
    Alert.alert('Login Success (Simulated)', 'Redirecting to app...');
    router.replace('/(tabs)');
  };

  return (
    <View className="flex-1">
      {/* Top Half - Primary Background */}
      <View className="h-2/5 bg-primary items-center justify-center p-5 pt-10">
        {/* Placeholder for Icon */}
        <Image
          source={require('../assets/icons/LogoWhite.png')} // Adjust the path as necessary
          className="w-16 h-16 mb-5"
          resizeMode="contain"
        />
        <Text className="text-3xl font-bold text-white text-center">
          Log in to your Account
        </Text>
        <Text className="text-sm text-white text-center mt-2">
          Enter your email and password to login
        </Text>
      </View>

      {/* Bottom Half - White Background with Card-like Form */}
      {/* Using ScrollView in case content overflows on smaller screens */}
      <ScrollView
        className="flex-1 bg-white -mt-10 rounded-t-3xl" // -mt-10 pulls it up slightly over the primary bg
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 20 }}
      >
        <View className="w-full max-w-sm p-6 pt-10">
          {/* Google Button */}
          <Pressable
            className="bg-white border border-gray-300 py-3 rounded-lg w-full items-center justify-center flex-row mb-6 shadow-sm"
            onPress={() => Alert.alert('Google Login', 'Not implemented yet.')}
          >
            {/* Placeholder for Google Icon */}
            <View className="w-5 h-5 bg-red-500 rounded-sm mr-2"></View>
            <Text className="text-neutralDark text-base font-semibold">Continue with Google</Text>
          </Pressable>

          {/* OR Separator */}
          <View className="flex-row items-center my-4">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-500 text-sm">or login with</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Email Input */}
          <TextInput
            className="w-full h-12 border border-secondary rounded-md px-4 mb-4 text-base bg-white"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <TextInput
            className="w-full h-12 border border-secondary rounded-md px-4 mb-4 text-base bg-white"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Remember Me & Forgot Password */}
          <View className="flex-row justify-between items-center mb-6">
            <Pressable className="flex-row items-center" onPress={() => setRememberMe(!rememberMe)}>
              <Checkbox
                className="mr-2" // For spacing
                value={rememberMe}
                onValueChange={setRememberMe}
                color={rememberMe ? '#006A67' : undefined} // Your primary color for the checkmark
              />
              <Text className="text-neutralDark text-sm">Remember me</Text>
            </Pressable>
            {/* <Link href="/forgot-password" asChild>
              <Pressable>
                <Text className="text-primary text-sm font-semibold">Forgot password?</Text>
              </Pressable>
            </Link> */}
          </View>

          {/* Login Button */}
          <Pressable
            className="bg-primary py-3.5 rounded-lg w-full items-center mb-8 shadow"
            onPress={handleLogin}
          >
            <Text className="text-white text-lg font-semibold">Log in</Text>
          </Pressable>

          {/* Sign Up Link */}
          <View className="flex-row justify-center">
            <Text className="text-neutralDark text-sm">Don't have an account? </Text>
            <Link href="/register" asChild>
              <Pressable>
                <Text className="text-primary text-sm font-bold">Sign Up</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}