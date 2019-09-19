import React from "react"
import { 
  View, 
  Text, 
  TextInput, 
  FlatList,
  YellowBox,
  StyleSheet,
  Image,
  Alert,
  Platform,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import axios from 'axios';

class TambahData extends React.Component {
  
  constructor(props){

    super(props)
    this.state = {
        TextInput_nama_lengkap: '',
        TextInput_NISN: '',
        TextInput_NIS: '',
        TextInput_alamat_siswa: '',
        TextInput_tempat_lahir:'',
        TextInput_tanggal_lahir: '',
        TextInput_usia_siswa: '',
        TextInput_jenis_kelamin: '',
        TextInput_agama: '',
        TextInput_bank: '',
        TextInput_No_Rekning_Bank: '',
        TextInput_Rek_Atas_Nama: '',
        TextInput_Layak_PIP:'',
        TextInput_Alasan_Layak_PIP: '',
      }
  }

 Tambahdata = () =>{
        axios.post('http://homekomputer.000webhostapp.com/apiv2/siswa/TambahSiswa.php', {
          nama_lengkap: this.state.TextInput_nama_lengkap,
          NISN : this.state.TextInput_NISN,
          NIS : this.state.TextInput_NIS,
          alamat_siswa :this.state.TextInput_alamat_siswa,
          tempat_lahir :this.state.TextInput_tempat_lahir,
          tanggal_lahir :this.state.TextInput_tanggal_lahir,
          usia_siswa :this.state.TextInput_usia_siswa,
          jenis_kelamin:this.state.TextInput_jenis_kelamin,
          agama:this.state.TextInput_agama,
          bank:this.state.TextInput_bank,
          No_Rekning_Bank:this.state.TextInput_No_Rekning_Bank,
          Rek_Atas_Nama:this.state.TextInput_Rek_Atas_Nama,
          Layak_PIP : this.state.TextInput_Layak_PIP,
          Alasan_Layak_PIP:this.state.TextInput_Alasan_Layak_PIP,
        })
                .then(res => { console.log(res)})
                .catch(err => console.log(err))  
 }


   render() {
    
    YellowBox.ignoreWarnings(['Encountered','ReferenceError']);

       return (
        <ScrollView>
          <View style={styles.MainContainer}>
         
 
 
       <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Tambah Data </Text>
        
        <Text style={{textAlign:'center',paddingTop:20}}>nama lengkap :</Text>
       <TextInput
         
         placeholder="ENTER TEXT"
 
         onChangeText={ TextInputValue => this.setState({  TextInput_nama_lengkap : TextInputValue }) }
 
         underlineColorAndroid='transparent'
 
         style={styles.StylingTextInput}
       />
 

 <Text style={{textAlign:'center',paddingTop:20}}>nisn :</Text>
      <TextInput
         
         placeholder="ENTER TEXT"
 
         onChangeText={ TextInputValue => this.setState({ TextInput_NISN : TextInputValue }) }
 
         underlineColorAndroid='transparent'
 
         style={styles.StylingTextInput}
       />
 

 <Text style={{textAlign:'center',paddingTop:20}}>nis :</Text>
      <TextInput
         
         placeholder='ENTER TEXT'
 
         onChangeText={ TextInputValue => this.setState({ TextInput_NIS: TextInputValue }) }
 
         underlineColorAndroid='transparent'
 
         style={styles.StylingTextInput}
       />
 

 <Text style={{textAlign:'center',paddingTop:20}}>alamat:</Text>
       <TextInput
 
         placeholder="ENTER TEXT"
 
         onChangeText={ TextInputValue => this.setState({ TextInput_alamat_siswa : TextInputValue }) }
 
         underlineColorAndroid='transparent'
 
         style={styles.StylingTextInput}
       />


<Text style={{textAlign:'center',paddingTop:20}}>tempat lahir :</Text>
        <TextInput
 
        placeholder="ENTER TEXT"

        onChangeText={ TextInputValue => this.setState({ TextInput_tempat_lahir: TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>tanggal lahir :</Text>
        <TextInput
        
        placeholder="ENTER TEXT"

        onChangeText={ TextInputValue => this.setState({  TextInput_tanggal_lahir: TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>usia:</Text>
        <TextInput
        
        placeholder="ENTER TEXT"

        onChangeText={ TextInputValue => this.setState({  TextInput_usia_siswa: TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>jenis kelamin :</Text>
        <TextInput
        
        placeholder="ENTER TEXT"

        onChangeText={ TextInputValue => this.setState({  TextInTextInput_jenis_kelamin: TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>agama :</Text>
        <TextInput
        
        placeholder="ENTER TEXT"

        onChangeText={ TextInputValue => this.setState({  TextInput_agama: TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>bank :</Text>
        <TextInput
        
        placeholder="ENTER TEXT"

        onChangeText={ TextInputValue => this.setState({  TextInput_bank: TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>no rekening :</Text>
        <TextInput
        
        placeholder="ENTER TEXT"

        onChangeText={ TextInputValue => this.setState({  TextInput_No_Rekning_Bank: TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.StylingTextInput}
        />

<Text style={{textAlign:'center',paddingTop:20}}>rek atas nama :</Text>
        <TextInput
        
        placeholder="ENTER TEXT"

        onChangeText={ TextInputValue => this.setState({  TextInput_Rek_Atas_Nama: TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.StylingTextInput}
        />

<Text style={{textAlign:'center',paddingTop:20}}>layak pip :</Text>
        <TextInput
        
        placeholder="ENTER TEXT"

        onChangeText={ TextInputValue => this.setState({   TextInput_Layak_PIP: TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>alasan layak pip :</Text>
        <TextInput
        
        placeholder="ENTER TEXT"

        onChangeText={ TextInputValue => this.setState({  TextInput_Alasan_Layak_PIP: TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.StylingTextInput}
        />
      <TouchableOpacity activeOpacity = { .4 } style={styles.Btn_TambahData} onPress={this.Tambahdata} >
 
        <Text style={styles.StyleTambahData}> Tambahkan Data</Text>
 
      </TouchableOpacity>
 
</View>
           </ScrollView>
   );
 }
}
  
  const styles = StyleSheet.create({
 
  MainContainer :{
 
    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'
 
  },
 
  StylingTextInput: {
 
  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#075e54',
  borderRadius: 5 ,
 
  },
 
  Btn_TambahData: {
 
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'
 
  },
 
  StyleTambahData:{
    color:'#fff',
    textAlign:'center',
  },
 
});

export default TambahData