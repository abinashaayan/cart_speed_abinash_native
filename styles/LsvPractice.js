import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 16,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    backIcon: {
        padding: 5,
        // backgroundColor: 'red',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white'
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 12,
        paddingVertical: 4,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        color: 'red',
        paddingHorizontal: 10,
    },
    micButton: {
        backgroundColor: 'red',
        padding: 14,
        borderRadius: 12,
    },
    tabRow: {
        flexGrow: 0,
        marginBottom: 16,
    },
    redTab: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 10,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    redTabText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    arrowLeft: {
        marginLeft: 6,
        backgroundColor: "black",
        borderRadius: 30,
        color: "red",
        padding: 2,
    },
    cardBox: {
        marginBottom: 20,
    },
    ruleCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1a1a1a',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    ruleTitle: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ruleSub: {
        color: '#FF1515',
        marginTop: 4,
        fontSize: 12,
    },
    ruleCategory: {
        color: '#FF1515',
        fontWeight: 'bold',
        marginTop: 4,
        fontSize: 14,
    },
    ruleCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignSelf: 'center',
    },
    importantTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    greenBox: {
        gap: 10,
    },
    greenButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1.5,
        borderRadius: 10,
        padding: 12,
    },
    greenText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default styles