import { Stack } from "expo-router";
import React from 'react';

// If you have global styles for NativeWind, you might import them here
import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
      {/* Configure your screens here.
          The "index" screen is the entry point of your app.
          It's good practice to hide the header for the initial screen if it's a splash/get started.
      */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/*
        Define other screens.
        If login and register are full screens and not modals,
        you might want to hide their headers too if you have custom headers in the screen components.
      */}
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />

      {/*
        This screen is for your tab navigator.
        It's common to hide the header here because the tabs themselves will have headers
        or the tab navigator will manage its own header.
      */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/*
        If you had modal presentations before, they would look like this:
        <Stack.Screen name="login" options={{ title: 'Login', presentation: 'modal' }} />
        <Stack.Screen name="register" options={{ title: 'Register', presentation: 'modal' }} />
        Adjust according to your previous setup if needed.
      */}
    </Stack>
  );
}