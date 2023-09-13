import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Switch1 from './components/SWITCH/switch.js'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Switch1 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0523',
    padding: 8,
    alignItems: 'center'
  },
});