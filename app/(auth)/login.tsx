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
      <View className="h-2/5 items-center justify-center bg-primary p-5 pt-10">
        {/* Placeholder for Icon */}
        <Image
          source={require('../../assets/icons/LogoWhite.png')} // Adjust the path as necessary
          className="mb-5 h-16 w-16"
          resizeMode="contain"
        />
        <Text className="text-center text-3xl font-bold text-white">Log in to your Account</Text>
        <Text className="mt-2 text-center text-sm text-white">
          Enter your email and password to login
        </Text>
      </View>

      {/* Bottom Half - White Background with Card-like Form */}
      {/* Using ScrollView in case content overflows on smaller screens */}
      <ScrollView
        className="-mt-10 flex-1 rounded-t-3xl bg-white" // -mt-10 pulls it up slightly over the primary bg
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 20 }}>
        <View className="w-full max-w-sm p-6 pt-10">
          {/* Google Button */}
          <Pressable
            className="mb-6 w-full flex-row items-center justify-center rounded-lg border border-gray-300 bg-white py-3 shadow-sm"
            onPress={() => Alert.alert('Google Login', 'Not implemented yet.')}>
            {/* Placeholder for Google Icon */}
            <View className="mr-2 h-5 w-5 rounded-sm bg-red-500"></View>
            <Text className="text-base font-semibold text-neutralDark">Continue with Google</Text>
          </Pressable>

          {/* OR Separator */}
          <View className="my-4 flex-row items-center">
            <View className="h-px flex-1 bg-gray-300" />
            <Text className="mx-4 text-sm text-gray-500">or login with</Text>
            <View className="h-px flex-1 bg-gray-300" />
          </View>

          {/* Email Input */}
          <TextInput
            className="mb-4 h-12 w-full rounded-md border border-secondary bg-white px-4 text-base"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <TextInput
            className="mb-4 h-12 w-full rounded-md border border-secondary bg-white px-4 text-base"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Remember Me & Forgot Password */}
          <View className="mb-6 flex-row items-center justify-between">
            <Pressable className="flex-row items-center" onPress={() => setRememberMe(!rememberMe)}>
              <Checkbox
                className="mr-2" // For spacing
                value={rememberMe}
                onValueChange={setRememberMe}
                color={rememberMe ? '#006A67' : undefined} // Your primary color for the checkmark
              />
              <Text className="text-sm text-neutralDark">Remember me</Text>
            </Pressable>
            {/* <Link href="/forgot-password" asChild>
              <Pressable>
                <Text className="text-primary text-sm font-semibold">Forgot password?</Text>
              </Pressable>
            </Link> */}
          </View>

          {/* Login Button */}
          <Pressable
            className="mb-8 w-full items-center rounded-lg bg-primary py-3.5 shadow"
            onPress={handleLogin}>
            <Text className="text-lg font-semibold text-white">Log in</Text>
          </Pressable>

          {/* Sign Up Link */}
          <View className="flex-row justify-center">
            <Text className="text-sm text-neutralDark">Don't have an account? </Text>
            <Link href="/(auth)/register" asChild>
              <Pressable>
                <Text className="text-sm font-bold text-primary">Sign Up</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
