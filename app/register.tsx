import { Ionicons } from '@expo/vector-icons'; // Import an icon set
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

// ... Checkbox import if you're using it ...

export default function RegisterScreen() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // ... existing handleRegister logic ...
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    console.log('Registering with:', firstName, lastName, email, password);
    Alert.alert('Registration Success (Simulated)', 'Redirecting to app...');
    router.replace('/(tabs)');
  };

  return (
    <View className="flex-1">
      {/* Top Half - Primary Background */}
      <View className="h-1/4 bg-primary justify-center p-5 pt-10 relative">
        {/* Back Button */}
        <Pressable
          onPress={() => router.back()}
          className="absolute top-12 left-5 z-10 p-2" // Adjust top-12 as needed for status bar
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </Pressable>

        {/* Centered Content */}
        <View className="items-center">
          <Text className="text-3xl font-bold text-white text-center">
            Sign Up
          </Text>
          <View className="flex-row mt-2">
            <Text className="text-sm text-white text-center">
              Already have an account?{' '}
            </Text>
            <Link href="/login" asChild>
              <Pressable>
                <Text className="text-sm text-white font-bold underline">Log In</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>

      {/* Bottom Half - White Background with Card-like Form */}
      <ScrollView
        className="flex-1 bg-white -mt-10 rounded-t-3xl"
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 20 }}
      >
        <View className="w-full max-w-sm p-6 pt-10">
          {/* First Name and Last Name Inputs (side-by-side) */}
          <View className="flex-row justify-between mb-4">
            <TextInput
              className="w-[48%] h-12 border border-secondary rounded-md px-4 text-base bg-white"
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
            />
            <TextInput
              className="w-[48%] h-12 border border-secondary rounded-md px-4 text-base bg-white"
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
            />
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
            className="w-full h-12 border border-secondary rounded-md px-4 mb-6 text-base bg-white"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Sign Up Button */}
          <Pressable
            className="bg-primary py-3.5 rounded-lg w-full items-center mb-6 shadow"
            onPress={handleRegister}
          >
            <Text className="text-white text-lg font-semibold">Sign Up</Text>
          </Pressable>

          {/* OR Separator */}
          <View className="flex-row items-center my-4">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-500 text-sm">or</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Sign Up with Google Button */}
          <Pressable
            className="bg-white border border-gray-300 py-3 rounded-lg w-full items-center justify-center flex-row mb-6 shadow-sm"
            onPress={() => Alert.alert('Google Sign Up', 'Not implemented yet.')}
          >
            {/* Placeholder for Google Icon */}
            <View className="w-5 h-5 bg-red-500 rounded-sm mr-2"></View>
            <Text className="text-neutralDark text-base font-semibold">Sign up with Google</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}