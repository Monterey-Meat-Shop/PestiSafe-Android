import { useRouter, useSegments } from 'expo-router';
import { createUserWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig'; // Ensure this path is correct

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const isAuthRoute = segments[0] === 'login' || segments[0] === 'register';
    const isAppRoute = segments[0] === '(tabs)'; // Assuming your main app is in a group called (tabs)

    if (user && !isAppRoute && segments[0] !== undefined) { // segments[0] !== undefined to avoid issues on initial load
      // User is signed in but not in the main app area (and not on an undefined initial segment)
      router.replace('/(tabs)'); // Navigate to main app screen
    } else if (!user && !isAuthRoute && segments[0] !== undefined) {
      // User is signed out but not in an auth route or the initial get started screen (typically root, where segments[0] is undefined)
      router.replace('/login'); // Navigate to login
    }
  }, [user, segments, isLoading, router]);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged and the useEffect above will handle navigation
    } catch (error: any) {
      console.error("Sign In Error:", error.code, error.message);
      alert(`Sign In Failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged and the useEffect above will handle navigation
    } catch (error: any) {
      console.error("Sign Up Error:", error.code, error.message);
      alert(`Sign Up Failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await firebaseSignOut(auth);
      // onAuthStateChanged and the useEffect above will handle navigation to /login
      // For an immediate redirect, you can also do:
      router.replace('/login');
    } catch (error: any) {
      console.error("Sign Out Error:", error.code, error.message);
      alert(`Sign Out Failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}