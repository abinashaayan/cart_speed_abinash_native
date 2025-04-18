import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d5edcc',
      paddingTop: 40,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    headerTitle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    backIcon: {
      padding: 5,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'black',
    },
    progressContainer: {
      alignItems: 'center',
      marginTop: 40,
      marginBottom: 20,
    },
    progressText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#000',
    },
    card: {
      backgroundColor: '#2c2c2c',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 20,
      flex: 1,
    },
    label: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      color: '#fff',
      marginLeft: 4,
      fontSize: 14,
    },
    timeRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
      gap: 6,
    },
    durationText: {
      color: 'red',
      fontSize: 14,
      fontWeight: 'bold',
    },
    timeIcon: {
      borderWidth: 2,
      borderColor: 'red',
      borderRadius: 50,
    },
    metaBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    metaItem: {
      alignItems: 'start',
      padding: 12,
      borderWidth: 1,
      borderColor: 'red',
      borderRadius: 10,
      width: '30%',
    },
    metaTopText: {
      color: '#FF1515',
      fontSize: 12,
      marginBottom: 4,
    },
    metaValue: {
      color: '#fff',
      fontWeight: 'bold',
    },
    curriculum: {
      marginTop: 20,
    },
    sectionTitle: {
      color: '#fff',
      fontWeight: 'bold',
    },
    highlight: {
      color: 'red',
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
    description: {
      color: '#fff',
      fontSize: 13,
      marginTop: 10,
      lineHeight: 20,
    },
  });
export default styles