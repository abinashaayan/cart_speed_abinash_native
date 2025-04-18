import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, PanResponder, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Audio, Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import styles from '../styles/TrainingScreen';

const TrainingScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Curriculum');
    const [isFullScreen, setIsFullScreen] = useState(false);

    const wiggleAnim = useRef(new Animated.Value(0)).current;
    const videoRef = useRef(null);
    const successSound = useRef();

    const startWiggle = () => {
        wiggleAnim.setValue(0);
        Animated.sequence([
            Animated.timing(wiggleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
            Animated.timing(wiggleAnim, { toValue: -1, duration: 100, useNativeDriver: true }),
            Animated.timing(wiggleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
            Animated.timing(wiggleAnim, { toValue: 0, duration: 100, useNativeDriver: true }),
        ]).start();
    };

    useEffect(() => {
        startWiggle();
    }, [activeTab]);

    const wiggleInterpolation = wiggleAnim.interpolate({
        inputRange: [-1, 1],
        outputRange: ['-2deg', '2deg'],
    });

    useEffect(() => {
        (async () => {
            const { sound } = await Audio.Sound.createAsync({
                uri: 'https://assets.mixkit.co/sfx/download/mixkit-unlock-game-notification-253.wav',
            });
            successSound.current = sound;
        })();
        return () => {
            if (successSound.current) successSound.current.unloadAsync();
        };
    }, []);

    const toggleFullScreen = async () => {
        if (!isFullScreen) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        } else {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        }
        setIsFullScreen(!isFullScreen);
    };

    const screenWidth = Dimensions.get('window').width;
    const sliderWidth = screenWidth - 60;
    const slideX = useRef(new Animated.Value(0)).current;
    const bgColor = slideX.interpolate({
        inputRange: [0, sliderWidth - 60],
        outputRange: ['rgb(255,0,0)', 'rgb(0,200,0)'],
        extrapolate: 'clamp',
    });

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dx) > 5,
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dx >= 0 && gestureState.dx <= sliderWidth - 60) {
                    slideX.setValue(gestureState.dx);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > sliderWidth * 0.6) {
                    Animated.timing(slideX, {
                        toValue: sliderWidth - 60,
                        duration: 200,
                        useNativeDriver: false,
                    }).start(async () => {
                        if (successSound.current) {
                            await successSound.current.replayAsync();
                        }
                        navigation.navigate('AssessmentScreen');
                        slideX.setValue(0);
                    });
                } else {
                    Animated.spring(slideX, {
                        toValue: 0,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    return (
        <View style={[styles.container, isFullScreen && { backgroundColor: 'black' }]}>
            {!isFullScreen && (
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" style={styles.backIcon} size={20} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Training 1</Text>
                </View>
            )}
            <View style={[styles.videoSection, isFullScreen && { flex: 1 }]}>
                <Video
                    ref={videoRef}
                    source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                    style={[styles.videoThumbnail, isFullScreen && { width: '100%', height: '100%' }]}
                    useNativeControls
                    resizeMode="contain"
                    shouldPlay
                />
                <TouchableOpacity
                    style={styles.expandIcon}
                    onPress={toggleFullScreen}
                >
                    <Icon name={isFullScreen ? "contract" : "expand"} size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {!isFullScreen && (
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.label}>Horem Ipsum</Text>
                        <Text style={styles.required}>Required min 7 ⭐</Text>
                    </View>
                    <View style={styles.cardHeader}>
                        <Text style={styles.courseTitle}>Horem ipsum dolor sit cing elit...</Text>
                    </View>
                    <View style={styles.subInfo}>
                        <View style={styles.videoHours}>
                            <Text style={styles.meta}>📹 21 Videos</Text>
                            <Text style={styles.meta}>|</Text>
                            <Text style={styles.meta}>⏱ 42 Hours</Text>
                        </View>
                        <Text style={styles.price}>$28</Text>
                    </View>
                    <View style={styles.tabsContainer}>
                        <TouchableOpacity
                            style={[styles.tab, activeTab === 'About' ? styles.activeTab : styles.inactiveTab]}
                            onPress={() => setActiveTab('About')}>
                            <Text style={[styles.tabText, activeTab === 'About' ? styles.activeTabText : styles.inactiveTabText]}>
                                About
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tab, activeTab === 'Curriculum' ? styles.activeTab : styles.inactiveTab]}
                            onPress={() => setActiveTab('Curriculum')}>
                            <Text style={[styles.tabText, activeTab === 'Curriculum' ? styles.activeTabText : styles.inactiveTabText]}>
                                Curriculum
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View style={{ transform: [{ rotate: wiggleInterpolation }], marginTop: 20 }}>
                            {activeTab === 'Curriculum' ? (
                                <View style={styles.curriculum}>
                                    <View style={styles.sectionMinutes}>
                                        <Text style={styles.sectionTitle}>Section 01 - <Text style={styles.highlight}>Introduction</Text></Text>
                                        <Text style={styles.price}>25 Mins</Text>
                                    </View>
                                    <View style={styles.lessonItem}>
                                        <View style={styles.lessonNumberWrapper}>
                                            <Text style={styles.lessonNumber}>01</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.lessonText}>Yorem ipsum dolor sit ...</Text>
                                            <Text style={styles.lessonTime}>15 Mins</Text>
                                        </View>
                                        <Icon name="play-circle" color="red" size={18} />
                                    </View>
                                    <View style={styles.separator} />
                                    <View style={styles.lessonItem}>
                                        <View style={styles.lessonNumberWrapper}>
                                            <Text style={styles.lessonNumber}>02</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.lessonText}>Yorem ipsum dolor sit ...</Text>
                                            <Text style={styles.lessonTime}>10 Mins</Text>
                                        </View>
                                        <Icon name="play-circle" color="red" size={18} />
                                    </View>
                                    <View style={styles.sectionMinutes}>
                                        <Text style={styles.sectionTitle}>Section 02 - <Text style={styles.highlight}>Graphic Design</Text></Text>
                                        <Text style={styles.price}>52 Mins</Text>
                                    </View>
                                </View>
                            ) : (
                                <View style={styles.curriculum}>
                                    <Text style={styles.sectionTitle}>Description – <Text style={styles.highlight}>Lorem Ipsum</Text></Text>
                                    <Text style={styles.description}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                                        Maecenas eget condimentum velit, sit amet feugiat lectus...
                                    </Text>
                                </View>
                            )}
                        </Animated.View>

                        <Animated.View style={[styles.swipeWrapper, { backgroundColor: bgColor }]}>
                            <Text style={styles.swipeText}>Take Assessment</Text>
                            <Animated.View
                                {...panResponder.panHandlers}
                                style={[styles.sliderThumb, { transform: [{ translateX: slideX }] }]}
                            >
                                <Icon name="arrow-forward" size={20} color="red" />
                            </Animated.View>
                        </Animated.View>
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

export default TrainingScreen;