import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const apiURL = 'https://65443b5a5a0b4b04436c2e38.mockapi.io/donut';

function Screen1({ navigation }) {
  const [tasks, setTasks] = React.useState([]); // Sử dụng React State để lưu trữ dữ liệu từ API

  React.useEffect(() => {
    // Gọi API và lưu trữ dữ liệu vào state khi component được tạo
    fetch(apiURL, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // Xử lý lỗi
        throw new Error('Network response was not ok');
      })
      .then((data) => {
        setTasks(data); // Lưu trữ dữ liệu từ API vào state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Mảng rỗng đảm bảo fetch được gọi khi component được tạo lần đầu

  return (
    <View style={{
    }}>
      <View style={{
        
      }}>
        <Text style={{
          fontWeight: 'bold'
        }}>
          Welcome, Jala!
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25
          }}
        >
          Choice you Best food
        </Text>
        <View style={{
          
        }}>
          <TextInput style={{
            borderWidth: 1,
            width: '70%',
            padding: 10,
            margin: 20,
            borderRadius: 5
          }}
            placeholder='Search food'
            placeholderTextColor='grey'
          >

          </TextInput>
        </View>

      </View>
      <View
        style={{
          justifyContent:'space-evenly',
          flexDirection: 'row'
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 3,
            backgroundColor: 'yellow',
            width: 100,
            height:30,
            alignItems:'center'
          }}
        >
          <Text style={{
            fontSize:15,
            fontWeight:'bold'
          }}> Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 3,
            backgroundColor: 'yellow',
            width: 100,
            height:30,
            alignItems:'center'
          }}
        >
          <Text style={{
            fontSize:15,
            fontWeight:'bold'
          }}>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 3,
            backgroundColor: 'yellow',
            width: 100,
            height:30,
            alignItems:'center'
          }}
        >
          <Text style={{
            fontSize:15,
            fontWeight:'bold'
          }}>Floating</Text>
        </TouchableOpacity>
      </View>
      {tasks.map((task) => (
        <View 
        style={{
          flexDirection:'row',
          backgroundColor:'#F4DDDD',
          margin:10,
          borderColor:'#F4DDDD',
          borderRadius:10,
          borderWidth:1
        }}>
          <Image
            style={{
              width: 120,
              height: 120,
              margin:5,
              borderWidth:1,
              borderRadius:10,
              borderColor:'white'
            }}

            source={{
              uri: task.image,
            }}
          />
          <Text key={task.id}>{task.name}</Text>
          
        </View>
      ))}

    </View>
  );
}

export default Screen1;
