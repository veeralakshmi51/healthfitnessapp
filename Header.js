import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
const Header = ({title,icon}) => {
  return (
    <View style={styles.header}>
    <StatusBar backgroundColor='black' barStyle='light-content'/>
    <View style={{flexDirection:'column'}}>
    <Text style={{fontSize:25,marginLeft:10,fontWeight:'700',color:'#FFF'}}>{title}</Text>
    <Text style={{fontSize:17,fontWeight:'400',marginLeft:10,color:'#FFF'}}>Every step counts</Text>
    </View>
   
    <TouchableOpacity style={styles.backbutton}>
        <Image source={icon} style={styles.back}/>
    </TouchableOpacity>
    </View>
  )
}

export default Header

const styles=StyleSheet.create({
    header:{
        height:80,
        width:'100%',
        elevation:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:20,
        backgroundColor:'black',
        marginTop:20
    },
    back:{
        height:40,
        width:40,
        tintColor:'#FFF'
    },
    backbutton:{
        height:30,
        width:30,
        borderRadius:15,
    }
})