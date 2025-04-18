import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from '../styles/ResultScreen';

const ResultScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" style={styles.backIcon} size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <AnimatedCircularProgress
          size={130}
          width={12}
          fill={80}
          tintColor="#44c33c"
          backgroundColor="#e8f0e3"
          rotation={0}
        >
          {(fill) => (
            <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>
          )}
        </AnimatedCircularProgress>
      </View>

      <View style={styles.card}>
        <ScrollView>
          <View style={styles.cardHeader}>
            <Text style={styles.label}>Certificate 1</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" color="red" size={18} />
              <Text style={styles.ratingText}>7.8</Text>
            </View>
          </View>

          <View style={styles.timeRow}>
            <Text style={styles.durationText}>25 minutes</Text>
            <View style={styles.timeIcon}>
              <Icon name="time" size={20} color="red" />
            </View>
          </View>

          <View style={styles.metaBox}>
            <View style={styles.metaItem}>
              <Text style={styles.metaTopText}>Questions</Text>
              <Text style={styles.metaValue}>10</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaTopText}>Time Limit</Text>
              <Text style={styles.metaValue}>30 min</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaTopText}>Attempt</Text>
              <Text style={styles.metaValue}>1st</Text>
            </View>
          </View>

          <View style={styles.curriculum}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.description}>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </Text>
          </View>

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitText}>Share</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default ResultScreen;


