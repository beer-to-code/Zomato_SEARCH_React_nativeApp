import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.thumb }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.otherText}>
        {result.user_rating.aggregate_rating} Stars, {result.all_reviews_count}{" "}
        Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  otherText: {
    color: "#b3b3cc",
    alignSelf: "flex-end",
  },
});

export default ResultsDetail;
