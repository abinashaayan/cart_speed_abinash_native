import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#000',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    backIcon: {
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
    },
    videoSection: {
        width: '100%',
        height: 120,
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    videoThumbnail: {
        width: '90%',
        height: '90%',
        borderRadius: 10,
    },
    expandIcon: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        backgroundColor: '#000000aa',
        padding: 6,
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#2c2c2c',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 20,
        flex: 1,
    },
    label: {
        color: 'red',
        fontSize: 12,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    courseTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    price: {
        color: '#ff4d4d',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
    },
    subInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    videoHours: {
        flexDirection: 'row',
        padding: 0,
        gap: 10,
    },
    meta: {
        color: '#fff',
        fontSize: 12,
    },
    required: {
        color: '#fff',
        fontSize: 12,
    },
    tabs: {
        flexDirection: 'row',
        marginTop: 8,
    },
    tabsContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 4,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 20,
    },

    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
    },

    activeTab: {
        backgroundColor: 'red',
    },

    inactiveTab: {
        backgroundColor: '#eaf1ff',
    },

    tabText: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    activeTabText: {
        color: '#fff',
    },

    inactiveTabText: {
        color: '#000',
    },

    curriculum: { marginTop: 20 },
    sectionTitle: {
        // marginTop: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    highlight: {
        color: 'red',
    },
    sectionMinutes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lessonItem: {
        marginVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#fff'
    },
    lessonNumberWrapper: {
        backgroundColor: '#ccc',
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    lessonNumber: { fontWeight: 'bold' },
    lessonText: { color: '#fff', fontWeight: 'bold' },
    lessonTime: { color: '#ccc', fontSize: 12 },
    swipeWrapper: {
        marginTop: 30,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 30,
        justifyContent: 'center',
        paddingHorizontal: 10,
        overflow: 'hidden',
    },
    swipeText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 40,
    },

    sliderThumb: {
        position: 'absolute',
        top: 5,
        left: 5,
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        color: '#fff',
        fontSize: 13,
        marginTop: 10,
        lineHeight: 20,
    }
});

export default styles