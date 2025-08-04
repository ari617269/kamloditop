import { View, Text, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { json_JSON } from './json';

const Widget = ({ json }) => {
  const renderView = ({ type, style, url, text, children }, index) => {
    switch(type) {
      case 'View': {
        return (
          <View key={index} style={style}>
            {render(children)}
          </View>
        );
      }
      case 'Text': {
        return (
          <Text key={index} style={style}>
            {text ?? ''}
          </Text>
        );
      }
      case 'Image': {
        return (
          <Image source={{ uri: url }} key={index} style={style} />
        );
      }
    }
  }
  const render = (list = []) => {
    return list.map(renderView)
  }
  return render(json);
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      <Widget json={JSON.parse(json_JSON)}  />
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
