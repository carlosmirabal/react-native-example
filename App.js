import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(value) {
        setCourseGoals((goals) => [...goals, value]);
    }

    function deleteGoal(index) {
        setCourseGoals((currentGoals) => {
            console.log(currentGoals.splice(index, 0), index);
            return currentGoals.filter((value, i) => i !== index);
        });
    }

    return (
        <View style={styles.container}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <Text>List of goals...</Text>
                <FlatList
                    data={courseGoals}
                    keyExtractor={(item, index) => index}
                    renderItem={(data) => {
                        return (
                            <GoalItem
                                index={data.index}
                                data={data.item}
                                deleteItem={deleteGoal}
                            />
                        );
                    }}
                />
                {/* // Se hace de esta manera ya que si se añade los estilos directamente al text puede que existe que alguna propiedad no se aplique en Andorid o IOS */}
            </View>
        </View>
    );
}

// No hay herencia de estilos
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },

    goalsContainer: {
        flex: 5,
    },
});
