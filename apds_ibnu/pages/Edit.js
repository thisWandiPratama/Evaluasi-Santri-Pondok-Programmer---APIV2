import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import axios from "axios";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInput_id: "",
      TextInput_nama_lengkap: "",
      TextInput_NISN: "",
      TextInput_NIS: "",
      TextInput_alamat_siswa: "",
      TextInput_tempat_lahir: "",
      TextInput_tanggal_lahir: "",
      TextInput_usia_siswa: "",
      TextInput_jenis_kelamin: "",
      TextInput_agama: "",
      TextInput_bank: "",
      TextInput_No_Rekning_Bank: "",
      TextInput_Rek_Atas_Nama: "",
      TextInput_Layak_PIP: "",
      TextInput_Alasan_Layak_PIP: ""
    };
  }

  componentDidMount() {
    // Received Student Details Sent From Previous Activity and Set Into State.
    this.setState({
      TextInput_id: this.props.navigation.state.params.id,
      TextInput_nama_lengkap: this.props.navigation.state.params.nama,
      TextInput_NISN: this.props.navigation.state.params.nisn,
      TextInput_NIS: this.props.navigation.state.params.nis,
      TextInput_alamat_siswa: this.props.navigation.state.params.alamat,
      TextInput_tempat_lahir: this.props.navigation.state.params.tempat,
      TextInput_tanggal_lahir: this.props.navigation.state.params.tanggal,
      TextInput_usia_siswa: this.props.navigation.state.params.usia,
      TextInput_jenis_kelamin: this.props.navigation.state.params.jk,
      TextInput_agama: this.props.navigation.state.params.agama,
      TextInput_bank: this.props.navigation.state.params.bank,
      TextInput_No_Rekning_Bank: this.props.navigation.state.bank,
      TextInput_Rek_Atas_Nama: this.props.navigation.state.params.atas_nama,
      TextInput_Layak_PIP: this.props.navigation.state.params.layak,
      TextInput_Alasan_Layak_PIP: this.props.navigation.state.params
        .alasan_layak
    });
  }

  EditData = () => {
    axios
      .post(
        "http://homekomputer.000webhostapp.com/apiv2/siswa/EditDataSiswa.php",
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
      .catch(err => console.log(err));
      this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <ScrollView style={{ paddingLeft: 15 }}>
          <Text style={{ fontSize: 20, paddingTop: 20 }}>Nama Siswa</Text>
          <TextInput
            placeholder="Nama Siswa"
            value={this.state.TextInput_nama_lengkap}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_nama_lengkap: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>NISN :</Text>
          <TextInput
            placeholder="NISN"
            value={this.state.TextInput_NISN}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_NISN: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>NIS :</Text>
          <TextInput
            placeholder="NIS"
            value={this.state.TextInput_NIS}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_NIS: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>Alamat Lahir</Text>
          <TextInput
            placeholder="Alamat Lahir"
            value={this.state.TextInput_alamat_siswa}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_alamat_siswa: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>Tempat Lahir</Text>
          <TextInput
            placeholder="Tempat Lahir"
            value={this.state.TextInput_tempat_lahir}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_tempat_lahir: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>Tanggal Lahir</Text>
          <TextInput
            placeholder="Tanggal Lahir"
            value={this.state.TextInput_tanggal_lahir}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_tanggal_lahir: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>usia :</Text>
          <TextInput
            placeholder="Usia Siswa"
            value={this.state.TextInput_usia_siswa}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_usia_siswa: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>Jenis Kelamin</Text>
          <TextInput
            placeholder="Jenis Kelamin"
            value={this.state.TextInput_jenis_kelamin}
            onChangeText={TextInputValue =>
              this.setState({ TextInTextInput_jenis_kelamin: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>Agama</Text>
          <TextInput
            placeholder="Agama"
            value={this.state.TextInput_agama}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_agama: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>Bank</Text>
          <TextInput
            placeholder="Bank"
            value={this.state.TextInput_bank}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_bank: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>No Rekning Bank</Text>
          <TextInput
            placeholder="No Rekning Bank"
            value={this.state.TextInput_No_Rekning_Bank}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_No_Rekning_Bank: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>
            Atas Nama Rekening
          </Text>
          <TextInput
            placeholder="Atas Nama"
            value={this.state.TextInput_Rek_Atas_Nama}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_Rek_Atas_Nama: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>Layak PIP</Text>
          <TextInput
            placeholder="Layak PIP"
            value={this.state.TextInput_Layak_PIP}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_Layak_PIP: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />

          <Text style={{ fontSize: 20, paddingTop: 20 }}>Alasan Layak PIP</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder="Alasan Layak PIP"
            value={this.state.TextInput_Alasan_Layak_PIP}
            onChangeText={TextInputValue =>
              this.setState({ TextInput_Alasan_Layak_PIP: TextInputValue })
            }
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            onPress={this.EditData}
            style={{
                width:"90%",
              backgroundColor: "#4047D4",
              marginBottom: 20,
              borderRadius: 10
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                padding: 10,
                fontSize: 20
              }}
            >
              Edit Data
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
