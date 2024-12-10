import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: "Oops! This screen doesn't exist."}}></Stack.Screen>
    <View style={styles.container}>
        <Link href="/">Go to home</Link>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
 },
});