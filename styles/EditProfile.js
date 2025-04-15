import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    backIcon: {
        marginBottom: 10,
    },
    avatarContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    avatarCircle: {
        backgroundColor: '#FF1515',
        borderRadius: 100,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fieldContainer: {
        marginBottom: 30,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        paddingLeft: 25,
        paddingRight: 15,
        height: 55,
        position: 'relative',
        backgroundColor: '#000',
    },
    label: {
        position: 'absolute',
        top: -12,
        left: 25,
        backgroundColor: '#000',
        color: 'white',
        fontSize: 12,
        paddingHorizontal: 6,
        zIndex: 1,
    },
    input: {
        flex: 1,
        color: 'white',
    },
    leftIcon: {
        position: 'absolute',
        left: -15,
        top: '50%',
        transform: [{ translateY: -15 }],
    },
    iconCircle: {
        backgroundColor: '#FF1515',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
    },
    submitBtn: {
        backgroundColor: '#FF1515',
        borderRadius: 8,
        paddingVertical: 14,
        marginTop: 30,
        alignItems: 'center',
    },
    submitText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles