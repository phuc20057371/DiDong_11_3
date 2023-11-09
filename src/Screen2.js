import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


function Screen2({ navigation }) {
    const route = useRoute();
    const [item, setItem] = React.useState(route.params?.task);
    const [count, setCount] = React.useState(1);
    function handlePressPlus() {
        setCount(count + 1);
    }
    function handlePressMinus() {
        if (count > 0) {
            setCount(count - 1);
        }

    }
    console.log(item)

    return (
        <View style={{ backgroundColor: 'white', }}>
            <View style={{}}>
                <Image
                    style={{
                        width: 250,
                        height: 250,
                        resizeMode: 'contain',
                        alignSelf: 'center',

                    }}
                    source={{ uri: item.image }}>

                </Image>
            </View>
            <View style={{ margin: 10 }}>
                <View>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{item.name}</Text>
                </View>
                <View style={{
                    gap: 70,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 18, }}>{item.description}</Text>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>${item.price}.00</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                margin: 10,
                gap: 120,
            }}>
                <View >
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <FontAwesome5 name="clock" size={24} color="black" />
                        <Text style={{ fontSize: 18 }}>Delivery in</Text>
                    </View>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}> 30 min</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ backgroundColor: 'orange', borderColor: 'crimson', borderWidth: 0.5, borderRadius: 5 }}
                        onPress={handlePressMinus}>
                        <AntDesign name="minus" size={24} color="black" />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{count}</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: 'orange', borderColor: 'crimson', borderWidth: 0.5, borderRadius: 5 }}
                        onPress={handlePressPlus}>
                        <AntDesign name="plus" size={24} color="black" />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Restaurants info</Text>
                <Text style={{ fontSize: 18 }}>Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
            </View>
            <TouchableOpacity style={{
                margin: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange', height: 60,
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: 'crimson'
            }} onPress={() => {
                navigation.navigate('Screen1')

            }}>

                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Screen2;