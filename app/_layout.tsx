import { Stack } from 'expo-router';

// Import NativeWind CSS
import '../global.css';

export default function RootLayout() {
  return (
    <Stack>
      {/* Configure your screens here.
          The "index" screen is the entry point of your app.
          It's good practice to hide the header for the initial screen if it's a splash/get started.
      */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* This now points to the (auth) group layout */}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />

      {/*
        This screen is for your tab navigator.
        It's common to hide the header here because the tabs themselves will have headers
        or the tab navigator will manage its own header.
      */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
