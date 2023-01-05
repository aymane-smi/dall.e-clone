import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, FlatList } from 'react-native';
import Main from './components/Main';
import Nav from './components/Nav';

export default function App() {
  const [result, setResult] = useState<{url:String}[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  useEffect(()=>{
    console.log(result);
  }, [result]);
  return (
    <View style={styles.body}>
      <Nav />
      <Main Data={setResult} Load={setLoad}/>
        {!load && <FlatList  data={result} renderItem={({item, index})=><Image source={{uri: item.url.toString()}} style={styles.image} key={index}/>}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fafafc",
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  images:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    width: 200,
    height: 200,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  }
});