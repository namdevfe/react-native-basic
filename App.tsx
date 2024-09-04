import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <View style={styles.container}>
      <Text style={{ color: 'red', fontSize: 40 }}>{count}</Text>
      <Button title='Increase' onPress={() => setCount(count + 1)} />
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
