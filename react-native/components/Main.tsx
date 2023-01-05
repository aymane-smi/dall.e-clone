import { FC, useState } from "react";
import {ActivityIndicator, Button, Text, TextInput, View, StyleSheet, TouchableOpacity} from "react-native";
const Main = ({Data, Load}:any)=>{
    const [description, setDescription] = useState<String>("");
    const [load, setLoad] = useState<boolean>(false);
    const handleSubmit = async()=>{
        setLoad(true);
        Load(true);
        let res = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                "Authorization" : "Bearer "+process.env.REACT_APP_KEY,
            },
            body: JSON.stringify({
                "prompt" : description,
                "n": 10,
                "size": "512x512"
            })
        });
        let data  = await res.json();
        setLoad(false);
        Load(false);
        Data(data.data);
    };
    return (<View>
        {!load ? <View style={styles.main}>
                <Text style={styles.title}>Start with a detailed description</Text>
                <View style={styles.form}>
                    <TextInput onChangeText={setDescription} style={styles.input}/>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={styles.button}>Surprise Me</Text>
                    </TouchableOpacity>
                </View>
            </View> : <View>
            <ActivityIndicator size="large"/>
        </View>}
    </View>);
};

const styles = StyleSheet.create({
    title: {
        color: "#9E9E9E",
        fontSize: 17,
    },
    main:{
        marginTop: 40,
        padding: 20,
    },
    button:{
        fontWeight: "700",
        borderColor: "transparent",
        borderTopColor: "#ededef",
        borderWidth: 1,
        padding: 20,
        textAlign: "center"
    },
    form:{
        elevation: 9,
        backgroundColor: "white",
        marginTop: 50,
        borderRadius: 5,
    },
    input:{
        padding: 25,
    }
});

export default Main;