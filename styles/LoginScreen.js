import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        paddingTop: 60,
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 40,
    },
    label: {
        color: '#fff',
        marginBottom: 5,
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        padding: 12,
        color: '#fff',
        marginBottom: 20,
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginBottom: 30,
    },
    forgotText: {
        color: '#fff',
        fontWeight: '600',
    },
    footerContainer: {
        paddingHorizontal: 25,
        paddingBottom: 30,
        backgroundColor: 'transparent',
    },
    loginButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    footerTextRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerText: {
        color: '#ccc',
    },
    signupText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default styles