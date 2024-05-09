import { View, Text } from 'react-native' // Import the Button component from 'react-native'
import React from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios' // Import the axios package

async function storeData(){
    try {
        const resposta = await axios.get("https://devthigas.com/json")
        console.log(resposta.data)
    } catch (error) {
        alert(error)
    }
}

export default function index() {
    return (
        <View className= "flex-1 mt-5 p-8 bg-stone-800">
            <Text className="text-2xl font-bold mt-11 mb-3 text-stone-50">Login</Text>
            <Input placeholder='Insira algo' label='Nome:' labelClasses='text-stone-200' inputClasses="border-stone-200" placeholderTextColor="#FFFFFF"></Input>
            <Input placeholder='Insira algo' label='Senha:' labelClasses='text-stone-200' inputClasses="border-stone-200" placeholderTextColor="#FFFFFF"></Input>
            <Button label="Entrar" className="bg-blue-400 mt-5" labelClasses='text-dark' onPress={storeData}/>
        </View>
    )
}
