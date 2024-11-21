import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { BlurView } from "expo-blur";

const Card = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/cloth/[cloth]]",
        params: { kain: item.id },
      }}
    >
     <BlurView intensity={50} tint="light" style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: item.poster,
          }}
        />
        <Text className="text-center font-bold text-white">{item.title}</Text>
        <Text className="text-center text-white">{item.overview}</Text>
      </BlurView>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default Card;
