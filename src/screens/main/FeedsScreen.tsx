import React, { useState, useEffect } from "react";
import {Text, DarkContainer} from '../../components/util';
import styled from 'styled-components/native';
import { Animated, View,StyleSheet, ActivityIndicator,FlatList, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
export const FeedsScreen: React.FC = () => {
    const [Feed, setFeed] = useState<any>([]);
  useEffect(() => {
    fetch('https://aurora-django-app.herokuapp.com/feed?feed_count=0')
    .then((res)=>res.json())
    .then((res)=>{
      setFeed(res.response)
     
      
    })
  }, []);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <FeedsScreenContainer>
       <StatusBar backgroundColor="#f2636f" />  
      <HeaderContainer>
        <HeaderText bold subheading color="#1e1e1e">
          Feeds
        </HeaderText>
      </HeaderContainer>
           <View style={styles.feed}>
          {Feed.length< 1 ? 
          <ActivityIndicator size={'large'} color={'#2FBBF0'}/>
          :
         <FlatList
         data={Feed}
         keyExtractor={(item,index)=>{return item.post_id.toFixed()}}
         renderItem={({item,index})=>(
          <View style={styles.postView}>
            <View style={styles.postTitle}>
            <View style={styles.imageView}>
              
            <MaterialIcons name="category" size={24} color="#f2636f" />
              <View style={styles.TitleView} >
                <Text style={styles.CategoryName}>Category Name</Text>
                 </View>
                 </View>
             <View>
             <SimpleLineIcons name="options-vertical" size={24} color="#f2636f" />
             </View>
            </View>
            <View style={styles.feedItem}></View>
             {/* <Image  style={styles.photo} source={{uri:item.cover_poto}}/> */}
          </View>
  )}
         />
        } 

        </View>
      
        
    </FeedsScreenContainer>
          

  );
};

export default FeedsScreen;

const styles=StyleSheet.create({

  postView:{
    width: '100%',
    alignItems:'center',
    marginTop:40,
  },

  postTitle:{
    width: '90%',
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  feed:{
    width: '100%',
    marginBottom:100
  },
  image:{
    backgroundColor:'rgba(0,0,0,0.6)',
    width: 50,
    height:50,
    borderRadius:50
  }, 
  imageView:{
    
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  CategoryName:{
    fontSize:16,
    fontWeight:'bold'
  },
  post_Title:{
fontSize:11,
color:'#989898',

  },
  TitleView:{
    marginLeft:15, 

  },
  feedItem:{
   width:'90%',
   height:200,
   backgroundColor: '#828487',
   marginTop:20,
  borderRadius:10
  }
  })


const HeaderText = styled(Text)`
margin-top: 10px;
margin-bottom: 10px;
bottom: 5px
`;




const HeaderContainer = styled.View`
  padding: 0 30px;
  justify-content: space-between;
  min-height: 50px;
  background-color: #f2636f;
  padding-top: 50px;
`;

const FeedsScreenContainer = styled(DarkContainer)`
  /* border-color: green;
  border-width: 1px;
  overflow-y: scroll;
  flex: 0.4;
  min-width: fit-content;
  border-style: dashed; */
  /* padding-top: 50px; */
`;

