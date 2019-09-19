import React from 'react'
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import axios from 'axios'

const { width: WIDTH } = Dimensions.get('window')

class Editdata extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      TextInput_id: '',
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
      TextInput_id: this.props.navigation.state.params.id,
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
      TextInput_No_Rekning_Bank: this.props.navigation.state.params
        .No_Rekning_Bank,
      TextInput_Rek_Atas_Nama: this.props.navigation.state.params.Rek_Atas_Nama,
      TextInput_Layak_PIP: this.props.navigation.state.params.Layak_PIP,
      TextInput_Alasan_Layak_PIP: this.props.navigation.state.params
        .Alasan_Layak_PIP
    })
  }
  editdata = () => {
    axios
      .post(
        'http://homekomputer.000webhostapp.com/apiv2/siswa/EditDataSiswa.php',
        {
          id: this.state.TextInput_id,
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
        }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  hapusdata = () => {
    axios
      .post(
        'http://homekomputer.000webhostapp.com/apiv2/siswa/HapusDataSiswa.php',
        {
          id: this.state.TextInput_id
        }
      )

      .then(res => console.log(res))
      .catch(err => console.log(err))

    this.props.navigation.navigate('Tampildata')
  }

  render () {
    return (
      <View style={styles.MainContainer}>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={require('../image/background-utul-ugm-2-300x300.jpg')}
        >
          <ScrollView>
            <View style={styles.InMainContainer}>
              <Text style={styles.TextUpTextInput}>Nama Lengkap :</Text>
              <TextInput
                placeholder='Enter Student Name'
                value={this.state.TextInput_nama_lengkap}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_nama_lengkap: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>NISN :</Text>
              <TextInput
                placeholder='Enter NISN'
                value={this.state.TextInput_NISN}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_NISN: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>NIS :</Text>
              <TextInput
                placeholder='Enter NIS'
                value={this.state.TextInput_NIS}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_NIS: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>Alamat :</Text>
              <TextInput
                placeholder='Enter Alamat'
                value={this.state.TextInput_alamat_siswa}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_alamat_siswa: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>tempat Lahir :</Text>
              <TextInput
                placeholder='Enter Student Name'
                value={this.state.TextInput_tempat_lahir}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_tempat_lahir: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>Tanggal Lahir :</Text>
              <TextInput
                placeholder='Enter NISN'
                value={this.state.TextInput_tanggal_lahir}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_tanggal_lahir: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>Usia Siswa :</Text>
              <TextInput
                placeholder='Enter NIS'
                value={this.state.TextInput_usia_siswa}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_usia_siswa: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>Jenis Kelamin :</Text>
              <TextInput
                placeholder='Enter Alamat'
                value={this.state.TextInput_jenis_kelamin}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_jenis_kelamin: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>Agama :</Text>
              <TextInput
                placeholder='Enter NISN'
                value={this.state.TextInput_agama}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_agama: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>Bank :</Text>
              <TextInput
                placeholder='Enter NIS'
                value={this.state.TextInput_bank}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_bank: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>No. Rekening Bank :</Text>
              <TextInput
                placeholder='Enter Alamat'
                value={this.state.TextInput_No_Rekning_Bank}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_No_Rekning_Bank: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>Rek. Atas Nama :</Text>
              <TextInput
                placeholder='Enter Student Name'
                value={this.state.TextInput_Rek_Atas_Nama}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_Rek_Atas_Nama: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>Layak PIP :</Text>
              <TextInput
                placeholder='Enter NISN'
                value={this.state.TextInput_Layak_PIP}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_Layak_PIP: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <Text style={styles.TextUpTextInput}>Alasan Layak PIP :</Text>
              <TextInput
                placeholder='Enter NIS'
                value={this.state.TextInput_Alasan_Layak_PIP}
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_Alasan_Layak_PIP: TextInputValue })
                }
                underlineColorAndroid='transparent'
                style={styles.StylingTextInput}
              />
              <View style={styles.ViewTouch}>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={styles.Btn_TambahData}
                  onPress={this.editdata}
                >
                  <Text style={styles.StyleTambahData}> Edit Data </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.4}
                  style={styles.Btn_TambahData}
                  onPress={this.hapusdata}
                >
                  <Text style={styles.StyleTambahData}> Hapus Data </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },

  StylingTextInput: {
    paddingLeft: 5,
    width: '85%',
    width: WIDTH - 55,
    marginBottom: 7,
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: '#075e54',
    fontSize: 15
  },

  Btn_TambahData: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '90%',
    backgroundColor: '#00BCD4'
  },

  StyleTambahData: {
    color: '#fff',
    textAlign: 'center'
  },
  InMainContainer: {
    alignItems: 'center',
    marginTop: 30
  },
  TextUpTextInput: {
    width: WIDTH - 45,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  ViewTouch: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10
  }
})

export default Editdata
