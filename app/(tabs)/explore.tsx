import { StyleSheet, Image, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/icon.png')}
        style={styles.profileImage}
      />
      <ThemedText type="title" style={styles.name}>Wastra</ThemedText>
      <ThemedText>"Embrace Heritage, Wear Batik Elegance."</ThemedText>

      <Link href="/">
        <ThemedText type="link">Batik Collection</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
