import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-05"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 8.59,
    date: new Date("2022-02-18"),
  },
  {
    id: "e6",
    description: "A pair of red trousers",
    amount: 99.25,
    date: new Date("2022-01-06"),
  },
  {
    id: "e7",
    description: "White T-Shirt",
    amount: 7.99,
    date: new Date("2022-11-01"),
  },
  {
    id: "e8",
    description: "A Cook book",
    amount: 16.99,
    date: new Date("2022-03-12"),
  },
  {
    id: "e9",
    description: "Blue Pencil",
    amount: 1.0,
    date: new Date("2023-07-18"),
  },
];

function ExpensesOutput({ expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
