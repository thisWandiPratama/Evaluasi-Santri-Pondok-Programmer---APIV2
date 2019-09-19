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
  TouchableOpacity
} from 'react-native'

import axios from 'axios';


class TampilkanData extends React.Component {
  
 constructor(props) {
    super(props)
    this.state = {
        data: []
    };
  }
  

componentDidMount() {
    axios.get(`http://homekomputer.000webhostapp.com/apiv2/siswa/DaftarSiswa.php`)
      .then(res => {
        console.log(res.data);
        const data = res.data;
        this.setState({data});
      })
      .catch(err => console.log(err))
  }


  INIDATANYA=(id,nama_lengkap,NISN,NIS,alamat_siswa, tempat_lahir,tanggal_lahir,usia_siswa,jenis_kelamin,agama,bank,No_Rekning_Bank,Rek_Atas_Nama,Layak_PIP,Alasan_Layak_PIP)=>{
 
          this.props.navigation.navigate('Editdata', { 
            ID: id,
            A : nama_lengkap,
            B: NISN,
            C : NIS,
            D: alamat_siswa,
            E:  tempat_lahir,
            F : tanggal_lahir,
            G: usia_siswa,
            H :jenis_kelamin,
            I:agama,
            J : bank,
            K :No_Rekning_Bank,
            L :Rek_Atas_Nama,
            M:Layak_PIP,
            N: Alasan_Layak_PIP

 
          });
 
     }



 renderItems = ({ item, index }) => {
       const {id,nama_lengkap,NISN,NIS,alamat_siswa, tempat_lahir,tanggal_lahir,usia_siswa,jenis_kelamin,agama,bank,No_Rekning_Bank,Rek_Atas_Nama,Layak_PIP,Alasan_Layak_PIP}=item
       return(
        <View style={{flex:1}}>
        

        <View style={{paddingTop:30,backgroundColor:'#f08080'}}>
            <TouchableOpacity  onPress={this.INIDATANYA.bind(
                        this, id,nama_lengkap,
                        NISN, 
                        NIS, 
                        alamat_siswa, 
                        tempat_lahir,tanggal_lahir,usia_siswa,jenis_kelamin,agama,bank,No_Rekning_Bank,Rek_Atas_Nama,Layak_PIP,Alasan_Layak_PIP)} > 
                       
                                  <View style={{backgroundColor:'#fff',borderRadius:20}}>
                                  
                                 
                                    <Text>  ID : {id}</Text>
                                    <Text>  NAMA PESERTA : {nama_lengkap} </Text>
                                    <Text>  NISN : {NISN}</Text>
                                    <Text>  NIS : {NIS}</Text>
                                    <Text>  ALAMAT : {alamat_siswa}</Text>
                                    <Text>  TEMPAT LAHIR : {tempat_lahir}</Text>
                                    <Text>  TANGGAL LAHIR : {tanggal_lahir}</Text>
                                    <Text>  USIA : {usia_siswa}</Text>
                                    <Text>  JENIS KELAMIN : {jenis_kelamin}</Text>
                                    <Text>  AGAMA : {agama}</Text>
                                    <Text>  NAMA BANK : {bank}</Text>
                                    <Text>  NO REKENING BANK : {No_Rekning_Bank}</Text>
                                    <Text>  REKENING ATAS NAMA : {Rek_Atas_Nama}</Text>
                                    <Text>  LAYAK PIP : {Layak_PIP}</Text>
                                    <Text>  ALASAN LAYAK PIP : {Alasan_Layak_PIP}</Text>
                                   
                                    </View>
                                  
            </TouchableOpacity>
            </View>
        </View>
       )
   }

   render() {

    YellowBox.ignoreWarnings(['Encountered','ReferenceError']);

       return (
           <View style={{flex:1}}>
             <View style={{backgroundColor:'#20b2aa',height:60,width:'100%',elevation:60}}>
               <Text style={{textAlign:'center',paddingTop:20}}>DAFTAR</Text>
             </View>
               <View style={{height:'80%',elevation:7}}>
                <View style={{}}>
                <FlatList
                   data={this.state.data}
                   keyExtractor={item => item.toString()}
                   renderItem={this.renderItems} />
                </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Tambahdata')}>
                    <View style={{ 
                                    paddingTop:7,
                                    alignItems:'center',
                                    justifyContent:'center'}}>
                        <Image source={require('../gambar/sign-up.png')} style={{height:50,width:50}}/>
                    </View>
                 </TouchableOpacity>

           </View>
        )
     }
  }

export default TampilkanData