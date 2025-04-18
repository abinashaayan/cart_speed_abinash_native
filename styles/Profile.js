import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileCard: {
        backgroundColor: '#FF1515',
        padding: 16,
        borderRadius: 16,
        marginBottom: 30,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    profileText: {
        flex: 1,
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        color: 'white',
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    settingCard: {
        backgroundColor: '#FF1515',
        borderRadius: 16,
        paddingVertical: 8,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    settingText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    },
    badge: {
        borderColor: 'lightgray',
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 5,
        marginLeft: 10,
        paddingHorizontal: 18
    },
    badgeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
  });

export default styles