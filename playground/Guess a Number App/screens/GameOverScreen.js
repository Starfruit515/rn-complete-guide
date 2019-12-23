import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors"
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://vignette.wikia.nocookie.net/iowiro/images/6/60/Cyanine.jpg/revision/latest/scale-to-width-down/340?cb=20180131202538"
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>
        Your phone needed <Text style={styles.highlight}>{props.roundNumber}</Text> rounds to guess the
        number <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: {
    color: Colors.primary
  }
});

export default GameOverScreen;
