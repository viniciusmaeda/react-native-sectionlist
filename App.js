import React from "react";
import { View, Text, StyleSheet, FlatList, SectionList } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <SectionList 
        sections={[
          {title: "A", data: ["Anakin Skywalker"]},
          {title: "B", data: ["Boba Fett"]},
          {title: "C", data: ["C-3PO", "Chewbaca"]},
          {title: "D", data: ["Darth Vader"]},
          {title: "H", data: ["Han Solo"]},
          {title: "J", data: ["Jar Jar Binks"]},
          {title: "K", data: ["Kylo Ren"]},
          {title: "L", data: ["Leia Organa", "Luke Skywalker"]},
          {title: "O", data: ["Obi-Wan Kenobi"]},
          {title: "P", data: ["Padmé Amidala", "Palpatine"]},
          {title: "Q", data: ["Qui-Gon Jinn"]},
          {title: "R", data: ["R2-D2", "Rey"]},
          {title: "Y", data: ["Yoda"]},
          {title: "L", data: ["Luke"]},
        ]}
        renderItem={({item}) => 
          <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => 
          <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});