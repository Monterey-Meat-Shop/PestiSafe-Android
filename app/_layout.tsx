import { Stack } from "expo-router";
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AuthProvider, useAuth } from '../contexts/AuthContext'; // Adjust path if necessary
import './globals.css'; // For NativeWind (ensure this file exists or remove if not used)

function RootLayoutNav() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#006A67" />
      </View>
    );
  }

  // This Stack navigator is rendered once isLoading is false.
  // Navigation logic (redirects) is handled within AuthContext's useEffect.
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Add other screens like plant/[id] if needed and if they are direct children of this Stack */}
      {/* e.g., <Stack.Screen name="plant/[id]" options={{ headerShown: false }} /> */}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}