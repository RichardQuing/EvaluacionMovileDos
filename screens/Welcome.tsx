import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground  source={{ uri: "https://www.shutterstock.com/image-illustration/seamless-pattern-grooming-dogs-different-600nw-1549658516.jpg" }} style={styles.background} >
    <View style={styles.container}>
      <Text style={styles.text}>Richard Quinaucho </Text>

      <Button
        title="INGRESAR"
        onPress={() => navigation.navigate('MyTabs')}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },text:{
    fontSize: 35,

  },background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default Welcome;
