import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useAuth } from '../contexts/AuthContext'; // Adjust path if necessary

export default function LoginScreen() {
  const router = useRouter();
  const { signIn, isLoading: authIsLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    await signIn(email, password);
    // Navigation is handled by AuthContext's useEffect
  };

  return (
    <View className="flex-1">
      {/* Top Half - Primary Background */}
      <View className="h-2/5 bg-primary justify-center p-5 pt-10 relative">
        <Pressable
          onPress={() => router.back()} // Or router.replace('/') if coming from GetStarted
          className="absolute top-12 left-5 z-10 p-2"
          disabled={authIsLoading}
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </Pressable>
        <View className="items-center">
          <Image
            source={require('../assets/icons/LogoWhite.png')} // Ensure path is correct
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
      </View>

      {/* Bottom Half - White Background with Card-like Form */}
      <ScrollView
        className="flex-1 bg-white -mt-10 rounded-t-3xl"
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full max-w-sm p-6 pt-10">
          {/* Google Button (Placeholder) */}
          <Pressable
            className="bg-white border border-gray-300 py-3 rounded-lg w-full items-center justify-center flex-row mb-6 shadow-sm"
            onPress={() => Alert.alert('Google Login', 'Not implemented yet.')}
            disabled={authIsLoading}
          >
            <View className="w-5 h-5 bg-red-500 rounded-sm mr-2"></View>{/* Replace with actual Google icon */}
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
            autoComplete="email"
            editable={!authIsLoading}
          />

          {/* Password Input */}
          <TextInput
            className="w-full h-12 border border-secondary rounded-md px-4 mb-4 text-base bg-white"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            editable={!authIsLoading}
          />

          {/* Remember Me & Forgot Password */}
          <View className="flex-row justify-between items-center mb-6">
            <Pressable className="flex-row items-center" onPress={() => setRememberMe(!rememberMe)} disabled={authIsLoading}>
              <Checkbox
                className="mr-2"
                value={rememberMe}
                onValueChange={setRememberMe}
                color={rememberMe ? '#006A67' : undefined} // Your primary color
              />
              <Text className="text-neutralDark text-sm">Remember me</Text>
            </Pressable>
            {/* <Link href="/forgot-password" asChild>
              <Pressable disabled={authIsLoading}>
                <Text className="text-primary text-sm font-semibold">Forgot password?</Text>
              </Pressable>
            </Link> */}
          </View>

          {/* Login Button */}
          <Pressable
            className={`bg-primary py-3.5 rounded-lg w-full items-center mb-8 shadow ${authIsLoading ? 'opacity-50' : ''}`}
            onPress={handleLogin}
            disabled={authIsLoading}
          >
            {authIsLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white text-lg font-semibold">Log in</Text>
            )}
          </Pressable>

          {/* Sign Up Link */}
          <View className="flex-row justify-center">
            <Text className="text-neutralDark text-sm">Don't have an account? </Text>
            <Link href="/register" asChild>
              <Pressable disabled={authIsLoading}>
                <Text className="text-primary text-sm font-bold">Sign Up</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}