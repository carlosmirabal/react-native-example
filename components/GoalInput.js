import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

export default function GoalInput(props) {
    const [goal, setGoal] = useState("");

    function goalInputHandler(value) {
        setGoal(value);
    }

    function addGoal() {
        if (goal !== "") {
            props.onAddGoal(goal);
            setGoal("");
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={goal}
                style={styles.textInput}
                placeholder="Your course goals!"
                onChangeText={goalInputHandler}
            />
            <Button title="Add Goal" onPress={addGoal} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
});
