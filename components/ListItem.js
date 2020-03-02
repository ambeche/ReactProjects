import React from 'react';

import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

const ListItem = (props) => {

  return (



    <TouchableOpacity>
            <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: props.item.thumbnails.w160}}
            />
            <View style= {styles.details}>
              <Text style= {styles.titles}>{props.item.title}</Text>
              <Text style= {styles.description}>{props.item.description}</Text>
            </View>
            </View>
          </TouchableOpacity>



  )
}



    const styles = StyleSheet.create({
      container: {
        marginTop: 0,
        paddingTop: 10,
        flexDirection: 'row',
        flex: 1,
        borderColor: "black",
        marginTop:5,
        marginBottom:5,
        marginRight:10,
        marginLeft:10,
        borderRadius:15,
        borderWidth:2,
        elevation:10,
        paddingHorizontal:10,
        backgroundColor:"cornflowerblue",
        alignItems: 'center',
        justifyContent: 'center',
      },
      description: {
         fontSize: 11,
      },
      image: {
        width: '20%',
        flex: 1,
        height: 150,
        flexDirection: 'row',
        margin: 10,
        borderRadius:95,
        borderWidth:1,
        borderColor:"cyan",


      },
       titles: {
       fontWeight: 'bold',
       fontSize:30,
       color:"khaki",
      },
       details: {
        width: '45%',
        flex: 1,
        flexDirection: 'column',
        padding: 10,
      },
      all: {
     color:'orange',
      },
    });
    export default ListItem;
