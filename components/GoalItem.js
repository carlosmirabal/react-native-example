import { Text, View, StyleSheet, Pressable } from "react-native";

export default function GoalItem(props) {
    return (
        <Pressable onPress={() => props.deleteItem(props.index)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{props.data}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        padding: 8,
        margin: 4,
        borderRadius: 6,
        backgroundColor: "#158EE8",
    },
    goalItemText: {
        color: "white",
    },
});
