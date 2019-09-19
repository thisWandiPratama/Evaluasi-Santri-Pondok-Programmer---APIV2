import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios'

class Editdat extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
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
      TextInput_Layak_PIP: '',
      TextInput_Alasan_Layak_PIP: ''
    }
  }
  componentDidMount () {
    this.setState({
      TextInput_nama_lengkap: this.props.navigation.state.params.nama_lengkap,
      TextInput_NISN: this.props.navigation.state.params.NISN,
      TextInput_NIS: this.props.navigation.state.params.NIS,
      TextInput_alamat_siswa: this.props.navigation.state.params.alamat_siswa,
      TextInput_tempat_lahir: this.props.navigation.state.params.tempat_lahir,
      TextInput_tanggal_lahir: this.props.navigation.state.params.tanggal_lahir,
      TextInput_usia_siswa: this.props.navigation.state.params.usia_siswa,
      TextInput_jenis_kelamin: this.props.navigation.state.params.jenis_kelamin,
      TextInput_agama: this.props.navigation.state.params.agama,
      TextInput_bank: this.props.navigation.state.params.bank,
      TextInput_No_Rekning_Bank: this.props.navigation.state.No_Rekning_Bank,
      TextInput_Rek_Atas_Nama: this.props.navigation.state.params.Rek_Atas_Nama,
      TextInput_Layak_PIP: this.props.navigation.state.params.Layak_PIP,
      TextInput_Alasan_Layak_PIP: this.props.navigation.state.params.Alasan_Layak_PIP
    })
  }
  editdata = () =>{
        axios.post('http://homekomputer.000webhostapp.com/apiv2/siswa/DaftarSiswa.php', {
          nama_lengkap: this.state.TextInput_nama_lengkap,
          NISN: this.state.TextInput_NISN,
          NIS: this.state.TextInput_NIS,
          alamat_siswa: this.state.TextInput_alamat_siswa,
          tempat_lahir: this.state.TextInput_tempat_lahir,
          tanggal_lahir: this.state.TextInput_tanggal_lahir,
          usia_siswa: this.state.TextInput_usia_siswa,
          jenis_kelamin: this.state.TextInput_jenis_kelamin,
          agama: this.state.TextInput_agama,
          bank: this.state.TextInput_bank,
          No_Rekning_Bank: this.state.TextInput_No_Rekning_Bank,
          Rek_Atas_Nama: this.state.TextInput_Rek_Atas_Nama,
          Layak_PIP: this.state.TextInput_Layak_PIP,
          Alasan_Layak_PIP: this.state.TextInput_Alasan_Layak_PIP
        })
                .then(res => console.log(res)) 
                .catch(err => console.log(err))
                
 }

  render () {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 7 }}>
          {' '}
          Edit Data{' '}
        </Text>

        <TextInput
          placeholder='Student Name Shows Here'
          value={this.state.TextInput_nama_lengkap}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_nama_lengkap: TextInputValue })
          }
          underlineColorAndroid='transparent'
          style={styles.StylingTextInput}
        />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.Btn_TambahData}
          onPress={this.editdata}
        >
          <Text style={styles.StyleTambahData}> Edit Data </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          activeOpacity={0.4}
          style={styles.Btn_TambahData}
          onPress={this.hapusdata}
        >
          <Text style={styles.StyleTambahData}> Hapus Data </Text>
        </TouchableOpacity> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
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
    borderRadius: 5
  },

  Btn_TambahData: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4'
  },

  StyleTambahData: {
    color: '#fff',
    textAlign: 'center'
  }
})

export default Editdat