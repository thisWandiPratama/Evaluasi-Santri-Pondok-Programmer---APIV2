import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
  TouchableOpacity,
  ScrollView
}from 'react-native'
import axios from 'axios'

class Editdata extends React.Component{

	constructor(props) {
    
       super(props)
    
       this.state = {
         TextInput_id:"",
        TextInput_nama_lengkap: '',
        TextInput_NISN: '',
        TextInput_NIS: '',
        TextInput_alamat_siswa: '',
        TextInput_tempat_lahir: '',
        TextInput_tanggal_lahir: '',
        TextInput_usia_siswa: '',
        TextInput_jenis_kelamin: '',
        TextInput_agama: '',
        TextInput_bank: '',
        TextInput_No_Rekning_Bank: '',
        TextInput_Rek_Atas_Nama: '',
        TextInput_Layak_PIP:"",
        TextInput_Alasan_Layak_PIP: '',
    
       }
    
     }
 
     componentDidMount(){
 
      // Received Student Details Sent From Previous Activity and Set Into State.
      this.setState({ 
        TextInput_id:this.props.navigation.state.params.ID,
        TextInput_nama_lengkap: this.props.navigation.state.params.A,
      TextInput_NISN: this.props.navigation.state.params.B,
      TextInput_NIS: this.props.navigation.state.params.C,
      TextInput_alamat_siswa: this.props.navigation.state.params.D,
      TextInput_tempat_lahir: this.props.navigation.state.params.E,
      TextInput_tanggal_lahir: this.props.navigation.state.params.F,
      TextInput_usia_siswa: this.props.navigation.state.params.G,
      TextInput_jenis_kelamin: this.props.navigation.state.params.H,
      TextInput_agama: this.props.navigation.state.params.I,
      TextInput_bank: this.props.navigation.state.params.J,
      TextInput_No_Rekning_Bank: this.props.navigation.state.K,
      TextInput_Rek_Atas_Nama: this.props.navigation.state.params.L,
      TextInput_Layak_PIP: this.props.navigation.state.params.M,
      TextInput_Alasan_Layak_PIP: this.props.navigation.state.params.N,
      })
 
     }


   editdata = () =>{
        axios.post('http://homekomputer.000webhostapp.com/apiv2/siswa/EditDataSiswa.php', {
          id :this.state.TextInput_id,
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
                .then(res => console.log(res)) 
                .catch(err => console.log(err))
                
 }


 	hapusdata = () => {
 		axios.post('http://homekomputer.000webhostapp.com/apiv2/siswa/HapusDataSiswa.php',{
      id: this.state.TextInput_id
 		})

 		  .then(res => console.log(res)) 
          .catch(err => console.log(err))

          this.props.navigation.navigate('Tampildata');

 	}


	render(){
		return(
      <ScrollView>
				<View style={styles.MainContainer}>

			 		<Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Data </Text>

           <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> hapus Data </Text>
          
        
 
           <Text style={{textAlign:'center',paddingTop:20}}>nama :</Text>
        <TextInput
          
          placeholder="Enter Student Name"

          value={this.state.TextInput_nama_lengkap}

          onChangeText={ TextInputValue => this.setState({  TextInput_nama_lengkap : TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>NISN :</Text>
        <TextInput
          
          placeholder="Enter Student Class"

          value={this.state.TextInput_NISN}

          onChangeText={ TextInputValue => this.setState({ TextInput_NISN : TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>NIS :</Text>
        <TextInput
          
          placeholder="Enter Student Phone Number"

          value={this.state.TextInput_NIS}

          onChangeText={ TextInputValue => this.setState({ TextInput_NIS: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>alamat lahir :</Text>
        <TextInput

          placeholder="Enter Student Email"

          value={this.state.TextInput_alamat_siswa}

          onChangeText={ TextInputValue => this.setState({ TextInput_alamat_siswa : TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
        />


<Text style={{textAlign:'center',paddingTop:20}}>tempat lahir :</Text>
          <TextInput

          placeholder="Enter Student Email"

          value={this.state.TextInput_tempat_lahir}

          onChangeText={ TextInputValue => this.setState({ TextInput_tempat_lahir: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
          />


<Text style={{textAlign:'center',paddingTop:20}}>tanggal lahir :</Text>
          <TextInput
          
          placeholder="Enter Student Email"

          value={this.state.TextInput_tanggal_lahir}

          onChangeText={ TextInputValue => this.setState({  TextInput_tanggal_lahir: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
          />


<Text style={{textAlign:'center',paddingTop:20}}>usia :</Text>
          <TextInput
          
          placeholder="Enter Student Email"

          value={this.state.TextInput_usia_siswa}

          onChangeText={ TextInputValue => this.setState({  TextInput_usia_siswa: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
          />


<Text style={{textAlign:'center',paddingTop:20}}>jenis kelamin :</Text>
          <TextInput
          
          placeholder="Enter Student Email"

          value={this.state.TextInput_jenis_kelamin}

          onChangeText={ TextInputValue => this.setState({  TextInTextInput_jenis_kelamin: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
          />


<Text style={{textAlign:'center',paddingTop:20}}>agama :</Text>
          <TextInput
          
          placeholder="Enter Student Email"

          value={this.state.TextInput_agama}

          onChangeText={ TextInputValue => this.setState({  TextInput_agama: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
          />


<Text style={{textAlign:'center',paddingTop:20}}>bank :</Text>
          <TextInput
          
          placeholder="Enter Student Email"

          value={this.state.TextInput_bank}

          onChangeText={ TextInputValue => this.setState({  TextInput_bank: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
          />


<Text style={{textAlign:'center',paddingTop:20}}>No Rekning Bank :</Text>
          <TextInput
          
          placeholder="Enter Student Email"

          value={this.state.TextInput_No_Rekning_Bank}

          onChangeText={ TextInputValue => this.setState({  TextInput_No_Rekning_Bank: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
          />



<Text style={{textAlign:'center',paddingTop:20}}>Rek_Atas_Nama :</Text>
          <TextInput
          
          placeholder="Enter Student Email"

          value={this.state.TextInput_Rek_Atas_Nama}

          onChangeText={ TextInputValue => this.setState({  TextInput_Rek_Atas_Nama: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
          />


<Text style={{textAlign:'center',paddingTop:20}}>Layak_PIP :</Text>
          <TextInput
          
          placeholder="Enter Student Email"

          value={this.state.TextInput_Layak_PIP}

          onChangeText={ TextInputValue => this.setState({   TextInput_Layak_PIP: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
          />


<Text style={{textAlign:'center',paddingTop:20}}>Alasan Layak PIP :</Text>
          <TextInput
          
          placeholder="Enter Student Email"

          value={this.state.TextInput_Alasan_Layak_PIP}

          onChangeText={ TextInputValue => this.setState({  TextInput_Alasan_Layak_PIP: TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.StylingTextInput}
          />

		          <TouchableOpacity activeOpacity = { .4 } style={styles.Btn_TambahData} onPress={this.editdata} >
   
		            <Text style={styles.StyleTambahData}> Edit Data </Text>
		   
		         </TouchableOpacity>

		          <TouchableOpacity activeOpacity = { .4 } style={styles.Btn_TambahData} onPress={this.hapusdata} >
   
		            <Text style={styles.StyleTambahData}> Hapus Data </Text>
		   
		         </TouchableOpacity>


   			</View>
         </ScrollView>
		)
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


export default Editdata