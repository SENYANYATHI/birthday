import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri:
'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1600',
}} style={{flex:1}}>
     <Text style={styles.text}>Happy 4th birthday to kamo </Text>
      <Image  source={require('./assets/cakee.jpg')} style={styles.image}/>
  
      <Text style={styles.Text}>bright birthday to you son  <br></br>19 october 2022</Text>
   
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius:'10 solid black',
    flex: 2,
    borderWidth:20,
    borderRadius:10,
    borderColor:'yellow',borderWidth:5,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    maxWidth:641,
    margin:'auto',
    maxHeight:1061,

  },
  text:{
    fontFamily:'Yatra-One',
    color:'#98111E',
    fontSize:60,
    fontWeight:'bold',
    textTransform:'uppercase',
    fontStyle:'italic',
    justifyContent:'center',
    marginBottom:100,
    textAlign:'center',
  },
Text:{
    color:'#750000',
    fontSize:20,
    textTransform:'uppercase',
    fontFamily:'Yatra-One',
    fontStyle:'italic',
    marginTop:100,
    textAlign:'center',
    backgroundColor:'#f8f8f8',
  
  },
  image:{
    width:630,
     height:400,
     borderRadius:20,
     paddingBottom:500,
    
  }
 
});
