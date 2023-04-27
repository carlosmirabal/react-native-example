import { Text, View, StyleSheet, Pressable } from "react-native";

export default function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: "red" }} onPress={() => props.deleteItem(props.index)} style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.goalItemText}>{props.data}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 4,
        borderRadius: 6,
        backgroundColor: "#158EE8",
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalItemText: {
        color: "white",
        padding: 8,
    },
});
