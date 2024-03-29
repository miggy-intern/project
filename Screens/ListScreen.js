import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ListScreen({ navigation, route }) {
    const { jsonData } = route.params;
    const inputValue = jsonData.inputValue;

    const lengthofArray = inputValue;
    const defaultTime = '3:00';
    let BlindFirstNumber = 1;
    let BlindSecondNumber = 2;
    const blindValues = [];

    for (let i = 0; i < lengthofArray; i++) {
        blindValues.push(`${BlindFirstNumber}/${BlindSecondNumber}`);
        BlindFirstNumber *= 2;
        BlindSecondNumber *= 2;
    }

    const levels = Array.from({ length: lengthofArray }, (_, i) => i + 1);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={[styles.row, styles.headerRow]}>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={[styles.columnHeader, styles.LevelAlign]}>Level</Text>
                    </View>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={[styles.columnHeader, styles.TimeAlign]}>Time</Text>
                    </View>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={[styles.columnHeader, styles.BlindAlign]}>Blinds</Text>
                    </View>
                </View>

                {levels.map((level, index) => (
                    <View key={index} style={[styles.row, styles.backgroundWhite]}>
                        {/* Levels */}
                        <View style={[styles.column, styles.dataColumn]}>
                            <Text style={styles.LevelAlign}>{`${level}`}</Text>
                        </View>

                        {/* Time */}
                        <View style={[styles.column, styles.dataColumn]}>
                            <Text style={styles.TimeAlign}>{`${level * parseInt(defaultTime, 10)}:00`}</Text>
                        </View>

                        {/* Blinds */}
                        <View style={[styles.column, styles.dataColumn]}>
                            <Text style={styles.BlindAlign}>{blindValues[index]}</Text>
                        </View>
                    </View>
                ))}

                <View style={[styles.row, styles.backgroundWhite]}>
                    <View style={[styles.column]}>
                        <Text style={styles.LevelAlign}>....</Text>
                    </View>
                    <View style={[styles.column]}>
                        <Text style={styles.TimeAlign}>+3:00</Text>
                    </View>
                    <View style={[styles.column]}>
                        <Text style={styles.BlindAlign}>*2</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9d4d4', 
        
    },
    scrollViewContent: {
        paddingVertical: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    column: {
        flex: 1,
        paddingVertical: 10,
    },
    headerColumn: {
        
        borderBottomColor: 'black',
    },
    dataColumn: {
        
        borderBottomColor: '#CBC9D0',
    },
    columnHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    TimeAlign: {
        textAlign: 'center', 
        fontSize: 16,
        color: 'black'
    },
    LevelAlign: {
        textAlign: 'left',
        fontSize: 16,
        color: '#3E95F1',
        paddingHorizontal: 10,
    },
    BlindAlign: {
        textAlign: 'right',
        fontSize: 16,
        color: 'black',
        paddingHorizontal: 10,
    },
    backgroundWhite: {
        backgroundColor: 'white', 

    }
});
