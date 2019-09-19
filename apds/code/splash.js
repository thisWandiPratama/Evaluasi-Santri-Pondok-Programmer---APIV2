import React from 'react'
import {View,Text,Image,ActivityIndicator} from 'react-native'
import HomeStack from './navigation'



export default class NJaal extends React.Component{
    state={
        role:true
}
   
render(){
        setTimeout(()=>{
      this.setState({
          role:false
      })
  },5000)
    if (this.state.role) {
      return (
        <View style={{alignItems:'center',paddingTop:100}}>
          <Image
                source={require('../gambar/enterprise.png')}
                style={{height:150,width:150}}
          />
          <View style={{paddingTop:20}}>
          <ActivityIndicator size='large' />
          </View>
          <View style={{alignItems:'center',paddingTop:30}} >
                <Text style={{color:'red'}}>IDENTITAS MEMBER PERUSAHAAN</Text>
               
                
          </View>
        </View>
      );
      
    }

    return(
        <HomeStack/>
    )
}


}