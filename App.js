import React, { Fragment } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Searchbar type="bar" placeholder="Search" />
        </View>
        <View style={styles.content}>
          <Text>content</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    justifyContent: "center",
    padding: 10,
  },
  content: {
    flex: 1,
    backgroundColor: "green",
    padding: 10,
  },
});
