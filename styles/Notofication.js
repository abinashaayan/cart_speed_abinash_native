import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    headerText: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 10,
    },
    backIcon: {
        padding: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white'
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: "black",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
    },
    cardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    status: {
        color: "red",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
    },
    title: {
        color: "white",
        fontSize: 12,
        marginBottom: 4,
    },
});


export default styles