import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    logo: {
        width: 140,
        height: 140,
        marginBottom: 20,
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
    },
    tagline: {
        color: '#aaa',
        fontSize: 14,
        marginBottom: 20,
    },
    dotsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
        marginHorizontal: 5,
    },
    loginBtn: {
        backgroundColor: 'red',
        paddingVertical: 12,
        borderRadius: 8,
        width: '100%',
        marginBottom: 10,
    },
    loginText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    signupBtn: {
        borderColor: 'red',
        borderWidth: 1,
        paddingVertical: 12,
        borderRadius: 8,
        width: '100%',
    },
    signupText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default styles