import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Image } from "react-native";

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

    function cancel() {
        setGoal("");
        props.onHidden();
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require("../assets/img/goal.png")} style={styles.image} />
                <TextInput value={goal} style={styles.textInput} placeholder="Your course goals!" onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={cancel} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoal} color="#5e0acc" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#311b6b",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        width: "100%",
        padding: 10,
        borderRadius: 6,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
        marginTop: 16,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
});
