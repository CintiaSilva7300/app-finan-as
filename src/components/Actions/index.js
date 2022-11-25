import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign
            style={styles.antDesign}
            name="addfolder"
            size={26}
            color="#000"
          ></AntDesign>
          <Text style={styles.labelButton}>Entradas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign
            style={styles.antDesign}
            name="tagso"
            size={26}
            color="#000"
          ></AntDesign>
          <Text style={styles.labelButton}>Compras</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign
            style={styles.antDesign}
            name="creditcard"
            size={26}
            color="#000"
          ></AntDesign>
          <Text style={styles.labelButton}>Carteira</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign
            style={styles.antDesign}
            name="barcode"
            size={26}
            color="#000"
          ></AntDesign>
          <Text style={styles.labelButton}>Boletos</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign
            style={styles.antDesign}
            name="setting"
            size={26}
            color="#000"
          ></AntDesign>
          <Text style={styles.labelButton}>Conta</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
  },
  areaButton: {
    marginTop: 4,
    backgroundColor: "#ecf0f1",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  labelButton: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  antDesign: {
    marginTop: 35,
  },
});
