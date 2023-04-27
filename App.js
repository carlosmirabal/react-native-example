import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modal, setModal] = useState(false);

    function addGoalHandler(value) {
        setCourseGoals((goals) => [...goals, value]);
        setModal(false);
    }

    function deleteGoal(index) {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((value, i) => i !== index);
        });
    }

    function mondalHandler() {
        setModal(!modal);
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.container}>
                <Button title="Add New Goal" onPress={mondalHandler} color={"#5e0acc"} />
                <GoalInput onAddGoal={addGoalHandler} visible={modal} onHidden={mondalHandler} />
                <View style={styles.goalsContainer}>
                    <Text>List of goals...</Text>
                    <FlatList
                        data={courseGoals}
                        keyExtractor={(item, index) => index}
                        renderItem={(data) => {
                            return <GoalItem index={data.index} data={data.item} deleteItem={deleteGoal} />;
                        }}
                    />
                    {/* // Se hace de esta manera ya que si se añade los estilos directamente al text puede que existe que alguna propiedad no se aplique en Andorid o IOS */}
                </View>
            </View>
        </>
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
