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
      <View className="relative h-1/4 justify-center bg-primary p-5 pt-10">
        {/* Back Button */}
        <Pressable
          onPress={() => router.back()}
          className="absolute left-5 top-12 z-10 p-2" // Adjust top-12 as needed for status bar
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </Pressable>

        {/* Centered Content */}
        <View className="items-center">
          <Text className="text-center text-3xl font-bold text-white">Sign Up</Text>
          <View className="mt-2 flex-row">
            <Text className="text-center text-sm text-white">Already have an account? </Text>
            <Link href="/(auth)/login" asChild>
              <Pressable>
                <Text className="text-sm font-bold text-white underline">Log In</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>

      {/* Bottom Half - White Background with Card-like Form */}
      <ScrollView
        className="-mt-10 flex-1 rounded-t-3xl bg-white"
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 20 }}>
        <View className="w-full max-w-sm p-6 pt-10">
          {/* First Name and Last Name Inputs (side-by-side) */}
          <View className="mb-4 flex-row justify-between">
            <TextInput
              className="h-12 w-[48%] rounded-md border border-secondary bg-white px-4 text-base"
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
            />
            <TextInput
              className="h-12 w-[48%] rounded-md border border-secondary bg-white px-4 text-base"
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
            />
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
            className="mb-6 h-12 w-full rounded-md border border-secondary bg-white px-4 text-base"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Sign Up Button */}
          <Pressable
            className="mb-6 w-full items-center rounded-lg bg-primary py-3.5 shadow"
            onPress={handleRegister}>
            <Text className="text-lg font-semibold text-white">Sign Up</Text>
          </Pressable>

          {/* OR Separator */}
          <View className="my-4 flex-row items-center">
            <View className="h-px flex-1 bg-gray-300" />
            <Text className="mx-4 text-sm text-gray-500">or</Text>
            <View className="h-px flex-1 bg-gray-300" />
          </View>

          {/* Sign Up with Google Button */}
          <Pressable
            className="mb-6 w-full flex-row items-center justify-center rounded-lg border border-gray-300 bg-white py-3 shadow-sm"
            onPress={() => Alert.alert('Google Sign Up', 'Not implemented yet.')}>
            {/* Placeholder for Google Icon */}
            <View className="mr-2 h-5 w-5 rounded-sm bg-red-500"></View>
            <Text className="text-base font-semibold text-neutralDark">Sign up with Google</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
