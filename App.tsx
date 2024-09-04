import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Header</Text>
      </View>
      <Text style={{ color: 'red', fontSize: 50 }}>Hello Nam 1</Text>
      <Text>Hello Nam 2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    position: 'static',
    backgroundColor: 'violet'
  },
  hello2: {
    color: 'green',
    fontSize: 30
  }
})
