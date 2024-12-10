import { Stack } from "expo-router";
import { ToastProvider } from 'react-native-toast-notifications';
import AuthProvider from "../providers/auth-provider";
import QueryProvider from "../providers/query-provider";

export default function RootLayout() {
    return (
        <ToastProvider>
            <AuthProvider>
                <QueryProvider>
                    <Stack>
                        <Stack.Screen
                            name='(shop)'
                            options={{ headerShown: false, title: 'SPC-Collectibles' }}
                        />
                        <Stack.Screen
                            name='categories'
                            options={{ headerShown: false, title: 'Categories' }}
                        />
                        <Stack.Screen
                            name='product'
                            options={{ headerShown: false, title: 'Product' }}
                        />
                        <Stack.Screen
                            name='auth'
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name='cart'
                            options={{ presentation: 'modal', title: 'Shopping Cart' }}
                        />
                    </Stack>
                </QueryProvider>
            </AuthProvider>
        </ToastProvider>
    )
}