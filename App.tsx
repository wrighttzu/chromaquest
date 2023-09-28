import { StatusBar, View } from 'react-native';
import Navigator from "./src/AppContainer";

export default function App() {
  return (
    <>
      <View>
        <StatusBar/>
      </View>
      <Navigator/>
    </>
  );
}