import React from 'react'
import {
  View,
  // Text,
  TextInput,
  FlatList,
  YellowBox,
  StyleSheet,
  ImageBackground,
  Alert,
  Platform,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from 'react-native'

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from 'native-base'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: WIDTH } = Dimensions.get('window')
const myIcon = <Icon name='user-plus' size={40} color='black'/>

class TampilkanData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })
    axios
      .get(`http://homekomputer.000webhostapp.com/apiv2/siswa/DaftarSiswa.php`)
      .then(res => {
        console.log(res.data)
        const data = res.data
        this.setState({ isLoading: false, data })
      })
      .catch(err => consule.log(err))
  }

  AmbildataCuy = (
    id,
    nama_lengkap,
    NISN,
    NIS,
    alamat_siswa,
    tempat_lahir,
    tanggal_lahir,
    usia_siswa,
    jenis_kelamin,
    agama,
    bank,
    No_Rekning_Bank,
    Rek_Atas_Nama,
    Layak_PIP,
    Alasan_Layak_PIP
  ) => {
    this.props.navigation.navigate('Editdata', {
      id: id,
      nama_Lengkap: nama_lengkap,
      NISN: NISN,
      NIS: NIS,
      alamat_siswa: alamat_siswa,
      tempat_lahir: tempat_lahir,
      tanggal_lahir: tanggal_lahir,
      usia_siswa: usia_siswa,
      jenis_kelamin: jenis_kelamin,
      agama: agama,
      bank: bank,
      No_Rekning_Bank: No_Rekning_Bank,
      Rek_Atas_Nama: Rek_Atas_Nama,
      Layak_PIP: Layak_PIP,
      Alasan_Layak_PIP: Alasan_Layak_PIP
    })
  }

  renderItems = ({ item, index }) => {
    const {
      id,
      nama_lengkap,
      NISN,
      NIS,
      alamat_siswa,
      tempat_lahir,
      tanggal_lahir,
      usia_siswa,
      jenis_kelamin,
      agama,
      bank,
      No_Rekning_Bank,
      Rek_Atas_Nama,
      Layak_PIP,
      Alasan_Layak_PIP
    } = item
    return (
      <TouchableOpacity
        onPress={this.AmbildataCuy.bind(
          this,
          id,
          nama_lengkap,
          NISN,
          NIS,
          alamat_siswa,
          tempat_lahir,
          tanggal_lahir,
          usia_siswa,
          jenis_kelamin,
          agama,
          bank,
          No_Rekning_Bank,
          Rek_Atas_Nama,
          Layak_PIP,
          Alasan_Layak_PIP
        )}
      >
        <Card>
          <CardItem>
            <Body>
              <View style={Style.ViewOne}>
                <View style={Style.ViewInOne}>
                  <Text>{id}</Text>
                </View>
                <Text style={Style.TextInView}>{nama_lengkap}</Text>
              </View>

              <Text style={Style.TextInViewOne}>NISN. {NISN}</Text>
              <Text style={Style.TextInViewOne}>NIS. {NIS}</Text>
              <Text style={Style.TextInViewOne}>E-mail. {alamat_siswa}</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  }

  render () {
    YellowBox.ignoreWarnings(['Encountered', 'ReferenceError'])
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require('../image/background-utul-ugm-2-300x300.jpg')}
            style={{ width: '100%', height: '100%' }}
          >
            <View
              style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ fontSize: 20, marginBottom:15 }}>DAFTAR SISWA-SIWSI</Text>
              <ActivityIndicator size='large' color='#00ffff' />
              <Text>loading...</Text>
            </View>
          </ImageBackground>
        </View>
      )
    }
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../image/download.png')}
      >
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            elevation: 50,
            justifyContent: 'center',
            alignItems: 'center',
            width: WIDTH - 10
          }}
        >
          <Text style={{ marginRight: '60%', fontSize: 18, fontWeight: 'bold' }}>
            Data Siswa/i.
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Tambahdata')}
          >
            {myIcon}
          </TouchableOpacity>
        </View>
        <View style={{ height: '100%', flex: 2 }}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.toString()}
            renderItem={this.renderItems}
          />
        </View>
      </ImageBackground>
    )
  }
}

export default TampilkanData

const Style = StyleSheet.create({
  ViewOne: {
    flexDirection: 'row'
  },
  ViewInOne: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  TextInView: {
    fontSize: 18,
    paddingLeft: 10
  },
  TextInViewOne: {
    fontSize: 12,
    paddingLeft: 30,
    fontStyle: 'italic'
  }
})
