import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, View } from "react-native"
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import styles from '../styles/HomeScreen';

const BottamTab = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                <Ionicons name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Certificate")}>
                <FontAwesome5 name="key" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <FontAwesome5 name="user" size={22} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default BottamTab