import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { details } from '../../contentImages';
class InboxScreen extends Component {
    state = {
        messages: details
    }
    alertItemName = (item) => {
        alert(item.name + ": " + "\n" + item.msg)
    }

    render() {
        return (
            <View style={styles.viewContainer}>
             <Text style={styles.label}>Inbox </Text>
                {
                    this.state.messages.map((item, index) => (
                       
                       
                        <TouchableOpacity
                            key={item.id}
                            style={styles.container}
                            onPress={() => this.alertItemName(item)}>
                           
                            <View style={{flexDirection: "row", width:"100%",borderBottomWidth:1,borderBottomColor:"black"}}>
                                <Image source={{
                                    uri: item.img
                                }}
                                    style={styles.imageDesign}>
                                </Image>

                                <View style={{ flexDirection: "column",   width:"80%", paddingBottom:15 }}>

                                    <View style={styles.nameDateAlignment}>

                                        <Text style={styles.textName}>
                                            {item.name}
                                        </Text>

                                        <Text>
                                            {item.date}
                                        </Text>

                                    </View>
                                    <Text numberOfLines={1} style={styles.textMsg}>
                                        {item.msg}
                                    </Text>

                                </View>
                            </View>

                        </TouchableOpacity>

                    ))
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: 'white',
        width: "90%",
        
    },
    viewContainer: {
        alignItems: "center",
        backgroundColor:"white"

    },
    textMsg: {
        color: '#4f603c',
        marginLeft: "5%"
    },
    textName: {
        color: '#4f603c',
        marginLeft: "5%",
        fontWeight: "bold"
    },
    nameDateAlignment: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imageDesign: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    label:{
        fontSize:40
    }
})

export default InboxScreen;
