import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header/index";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta de luz",
    value: 300.88,
    date: "15/11/2022",
    type: 0, //despesas
  },
  {
    id: 2,
    label: "Boleto Tim",
    value: 520.88,
    date: "22/11/2022",
    type: 0, //despesas
  },
  {
    id: 3,
    label: "Salario",
    value: 12.5,
    date: "21/11/2022",
    type: 1, //receita / entrada
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Cintia Silva" />
      <Balance saldo="11.333" gastos="-871,03" />

      <Actions />

      <Text style={styles.title}>Ultimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
