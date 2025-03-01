import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import * as Font from 'expo-font';

const MenuScreen = ({ navigation }) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            try {
                await Font.loadAsync({
                    'Jua-Regular': require('../../assets/fonts/Jua-Regular.ttf'),
                });
                console.log('Шрифт Jua-Regular успешно загружен');
                setFontLoaded(true);
            } catch (error) {
                console.error('Ошибка загрузки шрифта:', error);
                setFontLoaded(false);
            }
        }
        loadFonts();
    }, []);

    if (!fontLoaded) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.text1}>г. Якутск</Text>
                    <View style={styles.headerRight}>
                        <Text style={styles.text2}>AfishaYkt (Шрифт не загружен)</Text>
                        <Image
                            source={require('../../assets/icons/icon.png')}
                            style={styles.icon1}
                        />
                    </View>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.buttonContainer}
                    >
                        <TouchableOpacity
                            style={[styles.categoryButton, { backgroundColor: '#007AFF' }]}
                            onPress={() => navigation.navigate('Books')}
                        >
                            <Image
                                source={require('../../assets/icons/book.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>Кино</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.categoryButton, { backgroundColor: '#fff' }]}
                            onPress={() => navigation.navigate('Theater')}
                        >
                            <Image
                                source={require('../../assets/icons/theater.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>Театр</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.categoryButton, { backgroundColor: '#FFF1E2' }]}
                            onPress={() => navigation.navigate('Concerts')}
                        >
                            <Image
                                source={require('../../assets/icons/concert.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>Концерты</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.categoryButton, { backgroundColor: '#D9D9D9' }]}
                            onPress={() => navigation.navigate('Events')}
                        >
                            <Image
                                source={require('../../assets/icons/event.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>События</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.text1}>г. Якутск</Text>
                <View style={styles.headerRight}>
                    <Text style={styles.text2}>AfishaYkt</Text>
                    <Image
                        source={require('../../assets/icons/icon.png')}
                        style={styles.icon1}
                    />
                </View>
            </View>

            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.buttonContainer}
                >
                    <TouchableOpacity
                        style={[styles.categoryButton, { backgroundColor: '#007AFF' }]}
                        onPress={() => navigation.navigate('Books')}
                    >
                        <Image
                            source={require('../../assets/icons/book.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.buttonText}>Кино</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.categoryButton, { backgroundColor: '#007AFF' }]}
                        onPress={() => navigation.navigate('Theater')}
                    >
                        <Image
                            source={require('../../assets/icons/theater.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.buttonText}>Театр</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.categoryButton, { backgroundColor: '#007AFF' }]}
                        onPress={() => navigation.navigate('Concerts')}
                    >
                        <Image
                            source={require('../../assets/icons/concert.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.buttonText}>Концерты</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.categoryButton, { backgroundColor: '#007AFF' }]}
                        onPress={() => navigation.navigate('Events')}
                    >
                        <Image
                            source={require('../../assets/icons/event.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.buttonText}>События</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f3f4',
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingTop: 50,
        backgroundColor: '#007AFF',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text1: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text2: {
        color: '#FFF',
        fontSize: 25,
        marginRight: 10,
        fontFamily: 'Jua-Regular',
    },
    scrollContainer: {
        flex: 1,
        justifyContent: 'flex-start', // Changed from 'center' to move content up
        paddingTop: 20, // Added padding to fine-tune position
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center', // Added to vertically center buttons in ScrollView
    },
    categoryButton: {
        width: 150,
        height: 150,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 20,
        marginLeft: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 50,  // Increased from 24 to 40
        height: 50, // Increased from 24 to 40
        marginBottom: 8, // Slightly increased spacing
    },
    icon1: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default MenuScreen;