import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useAuth } from '../contexts/AuthContext'; // Adjust path if necessary

export default function RegisterScreen() {
  const router = useRouter();
  const { signUp, isLoading: authIsLoading } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    // Basic email validation (consider a more robust library for production)
    if (!/\S+@\S+\.\S+/.test(email)) {
        Alert.alert('Error', 'Please enter a valid email address.');
        return;
    }
    if (password.length < 6) {
        Alert.alert('Error', 'Password should be at least 6 characters long.');
        return;
    }
    await signUp(email, password);
    // Navigation is handled by AuthContext's useEffect
    // You might want to add first name and last name to the user profile in Firebase
    // after successful sign up, e.g., using updateProfile from firebase/auth if needed.
  };

  return (
    <View className="flex-1">
      {/* Top Half - Primary Background */}
      <View className="h-1/4 bg-primary justify-center p-5 pt-10 relative">
        <Pressable
          onPress={() => router.back()}
          className="absolute top-12 left-5 z-10 p-2"
          disabled={authIsLoading}
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </Pressable>
        <View className="items-center">
          <Text className="text-3xl font-bold text-white text-center">
            Sign Up
          </Text>
          <View className="flex-row mt-2">
            <Text className="text-sm text-white text-center">
              Already have an account?{' '}
            </Text>
            <Link href="/login" asChild>
              <Pressable disabled={authIsLoading}>
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
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full max-w-sm p-6 pt-10">
          <View className="flex-row justify-between mb-4">
            <TextInput
              className="w-[48%] h-12 border border-secondary rounded-md px-4 text-base bg-white"
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
              editable={!authIsLoading}
            />
            <TextInput
              className="w-[48%] h-12 border border-secondary rounded-md px-4 text-base bg-white"
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
              editable={!authIsLoading}
            />
          </View>

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

          <TextInput
            className="w-full h-12 border border-secondary rounded-md px-4 mb-6 text-base bg-white"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            editable={!authIsLoading}
          />

          <Pressable
            className={`bg-primary py-3.5 rounded-lg w-full items-center mb-6 shadow ${authIsLoading ? 'opacity-50' : ''}`}
            onPress={handleRegister}
            disabled={authIsLoading}
          >
            {authIsLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white text-lg font-semibold">Sign Up</Text>
            )}
          </Pressable>

          <View className="flex-row items-center my-4">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-500 text-sm">or</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          <Pressable
            className="bg-white border border-gray-300 py-3 rounded-lg w-full items-center justify-center flex-row mb-6 shadow-sm"
            onPress={() => Alert.alert('Google Sign Up', 'Not implemented yet.')}
            disabled={authIsLoading}
          >
            <View className="w-5 h-5 bg-red-500 rounded-sm mr-2"></View>{/* Replace with actual Google icon */}
            <Text className="text-neutralDark text-base font-semibold">Sign up with Google</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}