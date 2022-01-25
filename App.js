import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, padding: 20}}>
    <View>
      <Text>HOw are you doing</Text>
      <StatusBar style="auto" />
    </View>
    <View style={{flex: 1, flexGrow: 1,backgroundColor: 'blue'}}>
<Text>Body</Text>
    </View>
    </View>
  );
}

