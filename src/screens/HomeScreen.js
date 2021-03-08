import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


import Screen from '../components/utils/Screen';
import colors from '../config/colors'
import DashBoardCards from '../components/utils/DashBoardCards';
import SwipeActions from '../components/utils/SwipeActions';
import ProfileCard from '../components/utils/ProfileCard'

function HomeScreen({navigation}) {
    return (
        <Screen style={styles.container}>
            <View style={styles.menuContainer}>
                <View style={styles.screenInfo}>
                    <MaterialCommunityIcons name='menu' size={24} color={colors.white} style={styles.icon} onPress={() => navigation.toggleDrawer()}/>
                    <Text style={styles.title}>Dashboard</Text>
                </View>
            </View> 
            <ScrollView>
                <ProfileCard />
                <DashBoardCards />
                <SwipeActions /> 
            </ScrollView> 
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 0,
    },
    icon:{
        marginLeft: 14,
        marginTop: 15.5
    },
    list:{
        backgroundColor:colors.danger
    },
    menuContainer:{
        backgroundColor: colors.secondary,
        height:56,
        elevation:5
    },
    title:{
        color:colors.white,
        fontSize:20,
        position:'absolute',
        top:15,
        left:73
    },
    screenInfo:{
        // marginTop:25.5
    }
})

export default HomeScreen;