import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

const arr = [
    {
        id: 1,
        name: "Lorem ipsum"
    },
    {
        id: 2,
        name: "Lorem ipsum"
    },
    {
        id: 3,
        name: "Lorem ipsum"
    },
    {
        id: 4,
        name: "Lorem ipsum"
    }
]

const List = () => {

  const [listItem, setListItem] = useState(arr);

  const action = (id)=> {
    console.log(id)
    const filterData = (prev) => prev.filter(user=> user.id != id);
    setListItem(filterData);
  }

  return (
      <View>
          <Text>list</Text>
          <FlatList 
             keyExtractor={item => item.id}
             data={listItem}
             numColumns={2}
             renderItem={({item})=> (
                <TouchableOpacity onPress={()=> action(item.id)}>
                     <Text style={styles.listItem}>{item.name}</Text>
                 </TouchableOpacity>
             )}
            />
      </View>
  )
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: 'red',
        marginHorizontal: 10,
        marginBottom: 15,
        width: '50%'
    }
})