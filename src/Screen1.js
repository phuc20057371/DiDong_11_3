import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

const apiURL = 'https://65443b5a5a0b4b04436c2e38.mockapi.io/donut';

function Screen1({ navigation }) {
  const [tasks, setTasks] = React.useState([]); // Sử dụng React State để lưu trữ dữ liệu từ API
  const [taskDefault, settaskDefault] = React.useState([]);

  function handlePress() {
    navigation.navigate('Screen2');
  }

  function filterPink() {
    setTasks(taskDefault);
    setTasks(taskDefault.filter((task) => task.name === 'Pink donut'));
  }
  function filterAll() {
    setTasks(taskDefault);
  }
  function filterFloat() {
    setTasks(taskDefault);
    setTasks(taskDefault.filter((task) => task.name === 'Floating donut'));


  }


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
        settaskDefault(data);

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
          justifyContent: 'space-evenly',
          flexDirection: 'row'
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 3,
            backgroundColor: 'yellow',
            width: 100,
            height: 30,
            alignItems: 'center'
          }}
          onPress={filterAll}
        >
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold'
          }}> Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 3,
            backgroundColor: 'yellow',
            width: 100,
            height: 30,
            alignItems: 'center'
          }}
          onPress={filterPink}
        >
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold'
          }}>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 3,
            backgroundColor: 'yellow',
            width: 100,
            height: 30,
            alignItems: 'center'
          }}
          onPress={filterFloat}
        >
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold'
          }}>Floating</Text>
        </TouchableOpacity>
      </View>
      {tasks.map((task) => (
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F4DDDD',
            margin: 10,
            borderColor: '#F4DDDD',
            borderRadius: 10,
            borderWidth: 1
          }}>
          <Image
            style={{
              width: 120,
              height: 120,
              margin: 5,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'white'
            }}

            source={{
              uri: task.image,
            }}
          />
          <View >
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              margin: 15
            }}>{task.name}</Text>
            <Text style={{
              fontSize: 15,
              marginLeft: 15
            }}>{task.description}</Text>
            <View style={{

              flexDirection: 'row',
              margin: 15,
              gap: 120
            }}>
              <View style ={{

              }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>${task.price}.00</Text>
              </View>
              <View style={{

                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }} >
                <TouchableOpacity onPress={()=>{
                  navigation.navigate('Screen2', {task: task})
                }}>
                  <AntDesign name="pluscircleo" size={35} color="white" />
                </TouchableOpacity>
              </View>

            </View>

          </View>


        </View>
      ))}

    </View>
  );
}

export default Screen1;
