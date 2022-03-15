import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { Text , DarkContainer} from '../../components/util';
import styled from 'styled-components/native';
import { FlatList, StyleSheet,TouchableOpacity , View} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const AllNewRentalApplicantsScreen: React.FC = () => {

    const [User, setUser] = useState([]);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then((res)=>{
           setUser(res)
         })
    }, []);
    const navigation = useNavigation();


  return (
    
      <ScreenContainer>
       <StatusBar backgroundColor="#f2636f" />  
      <HeaderContainer>
        <HeaderText bold subheading color="#1e1e1e">
         All Applicants
        </HeaderText>
      </HeaderContainer>
     
      <StatusBar backgroundColor="#f2636f" />  
      <FlatList 
         data={User}
         keyExtractor={(User)=>User.id}
          
         renderItem={({item})=> {
           
            return (
              <TouchableOpacity onPress={()=> navigation.navigate('NewApplicants',{id:item.id,name:item.name})}>
             <View style={styles.container}>
          <View style={styles.leftContainer}>
         <View style={styles.image}>
        <Feather name="user" size={48} color="white" />
        </View>
        <View style={styles.midContainer}>
        <Text medium bold margin="0px 0px 10px 0px">{item.name}</Text>
        <Label>{item.email}</Label>
     
      </View>
      </View>
      <Label> Active</Label>
      
    </View>
            </TouchableOpacity>
            )}
            
          
          }

      />

    </ScreenContainer>
  );
};

export default AllNewRentalApplicantsScreen;


const HeaderContainer = styled.View`
  padding: 0 30px;
  justify-content: space-between;
  min-height: 200px;
  background-color: #f2636f;
`;

const ScreenContainer = styled(DarkContainer)`
  /* border-color: green;
  border-width: 1px;
  border-style: dashed; */
  /* padding-top: 50px; */
`;

const HeaderText = styled(Text)`
margin-top: 40px;
margin-bottom: 10px;
`;

const styles= StyleSheet.create({
    container:{
      flexDirection:'row',
      width:'100%',
      justifyContent:'space-between',
      padding:10

    },

     midContainer:{
       justifyContent:'space-around'
     },

     leftContainer:{
        flexDirection:'row'
    },
    image:{
       marginRight:10,
    },
     lastMessage:{
        color:'grey',
        fontSize:16
     },    
     time:{
        color:'grey',
        fontSize:16
     }, 
})

const Container=styled.View`

  flexDirection:'row',
  width:'100%',
  justifyContent:'space-between',
  padding:10px
`

const Label = styled(Text)`
  margin: 10px 0;
`;

