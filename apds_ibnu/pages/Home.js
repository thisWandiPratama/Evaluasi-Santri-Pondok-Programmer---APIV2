import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  YellowBox
} from "react-native";

// Moment
import Moment from "moment";

// Date
import DateTimePicker from "react-native-modal-datetime-picker";

// Picker
import RNPickerSelect from "react-native-picker-select";

// Sheet
import RBSheet from "react-native-raw-bottom-sheet";

// Import Axios
import axios from "axios";

// Import Edit Paes
import Edit from "./Edit";

// Stack
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isDateTimePickerVisible: false,
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
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

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    var dt = date.toString();
    this.setState({
      TextInput_tanggal_lahir: Moment(dt).format("DD MMMM YYYY")
    });
    this.hideDateTimePicker();
  };

  getData() {
    axios
      .get(`http://homekomputer.000webhostapp.com/apiv2/siswa/DaftarSiswa.php`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getData();
  }

  //   Tambah Data
  Tambahdata = () => {
    axios
      .post(
        "http://homekomputer.000webhostapp.com/apiv2/siswa/TambahSiswa.php",
        {
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
      .then(res => {
        this.RBSheet.close();
        this.getData();
      })
      .catch(err => console.log(err));
  };

  // Hapus Data
  DeleteData = (id) => {
    axios
      .post(
        "http://homekomputer.000webhostapp.com/apiv2/siswa/HapusDataSiswa.php",
        {
          id: id
        }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
      this.getData();
  };

  // Edit Data
  Kirimdata = (
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
    this.props.navigation.navigate("Edit", {
      id: id,
      nama: nama_lengkap,
      nisn: NISN,
      nis: NIS,
      alamat: alamat_siswa,
      tempat: tempat_lahir,
      tanggal: tanggal_lahir,
      usia: usia_siswa,
      jk: jenis_kelamin,
      agama: agama,
      bank: bank,
      no_rek: No_Rekning_Bank,
      atas_nama: Rek_Atas_Nama,
      layak: Layak_PIP,
      alasan_layak: Alasan_Layak_PIP
    });
  };

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
    } = item;
    return (
      <View
        style={{
          width: "95%",
          fontSize: 17,
          marginVertical: 10,
          borderRadius: 17,
          backgroundColor: "#FF944E"
        }}
      >
        <View style={{ padding: 20 }}>
          <Text style={{ color: "white", fontSize: 37, fontWeight: "bold" }}>
            {item.nama_lengkap}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontSize: 20 }}>NISN : </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold"
              }}
            >
              {item.NISN}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontSize: 20 }}>NIS : </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold"
              }}
            >
              {item.NIS}
            </Text>
          </View>
          <Text style={{ color: "white", fontSize: 20 }}>
            {item.alamat_siswa}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontSize: 20 }}>
              Tanggal Lahir :{" "}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold"
              }}
            >
              {item.tanggal_lahir}
            </Text>
          </View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {item.tempat_lahir}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold"
              }}
            >
              {item.jenis_kelamin} |{" "}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold"
              }}
            >
              {item.agama}
            </Text>
          </View>
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 15,
              borderBottomColor: "#E4E4E4",
              borderBottomWidth: 1
            }}
          />
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            {item.bank}
          </Text>
          <Text style={{ color: "white", fontSize: 25 }}>
            {item.No_Rekning_Bank}
          </Text>
          <Text style={{ color: "white", fontSize: 25 }}>
            a/n {item.Rek_Atas_Nama}
          </Text>
          <Text style={{ color: "white", fontSize: 20 }}>{item.Layak_PIP}</Text>
          <Text style={{ color: "white", fontSize: 20 }}>
            {item.Alasan_Layak_PIP}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={this.DeleteData(item.id)}
            activeOpacity={0.8}
            style={{
              width: "50%",
              backgroundColor: "#DA2D2D",
              borderBottomLeftRadius: 17
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                padding: 10
              }}
            >
              Hapus
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.Kirimdata.bind(
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
            activeOpacity={0.8}
            style={{
              width: "50%",
              backgroundColor: "#4C54E1",
              borderBottomRightRadius: 17
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                padding: 10
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  render() {
    YellowBox.ignoreWarnings(["Warning:"]);

    Moment.locale("id");
    return (
      <View style={{ flex: 1, paddingLeft: 20 }}>
        <ScrollView>
          <Text style={{ fontSize: 40, paddingTop: 30, paddingBottom: 10 }}>Data Siswa</Text>
          <Text onPress={() => { this.getData() }} style={{ fontSize: 20, color:"blue" }}>Reload Data</Text>
          <FlatList
            scrollEnabled={false}
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={this.renderItems}
          />
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this.RBSheet.open();
          }}
          style={styles.TouchableOpacityStyle}
        >
          <Image
            source={{
              uri:
                "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png"
            }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
        <RBSheet
          //   closeOnDragDown={true}
          //   closeOnPressMask={true}
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={500}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <View style={{ width: "100%" }}>
            <ScrollView style={{ paddingHorizontal: 10, paddingBottom: 15 }}>
              <Text
                style={{ fontSize: 27, textAlign: "center", marginVertical: 7 }}
              >
                Tambah Data
              </Text>

              <Text style={{ paddingTop: 20 }}>Nama Lengkap</Text>
              <TextInput
                placeholder="Nama Lengkap"
                returnKeyType="next"
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_nama_lengkap: TextInputValue })
                }
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
                blurOnSubmit={false}
                underlineColorAndroid="transparent"
              />
              <Text style={{ paddingTop: 20 }}>NISN</Text>
              <TextInput
                ref={input => {
                  this.secondTextInput = input;
                }}
                keyboardType="number-pad"
                returnKeyType="next"
                placeholder="NISN"
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_NISN: TextInputValue })
                }
                underlineColorAndroid="transparent"
                onSubmitEditing={() => {
                  this.tiga.focus();
                }}
              />
              <Text style={{ paddingTop: 20 }}>NIS</Text>
              <TextInput
                ref={input => {
                  this.tiga = input;
                }}
                keyboardType="number-pad"
                returnKeyType="next"
                placeholder="NIS"
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_NIS: TextInputValue })
                }
                underlineColorAndroid="transparent"
                onSubmitEditing={() => {
                  this.empat.focus();
                }}
              />
              <Text style={{ paddingTop: 20 }}>Alamat Lengkap</Text>
              <TextInput
                ref={input => {
                  this.empat = input;
                }}
                returnKeyType="next"
                multiline={true}
                numberOfLines={5}
                placeholder="Alamat Lengkap"
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_alamat_siswa: TextInputValue })
                }
                underlineColorAndroid="transparent"
                onSubmitEditing={() => {
                  this.lima.focus();
                }}
              />
              <Text style={{ paddingTop: 20 }}>Tempat Lahir</Text>
              <TextInput
                ref={input => {
                  this.lima = input;
                }}
                returnKeyType="next"
                placeholder="Tempat Lahir"
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_tempat_lahir: TextInputValue })
                }
                underlineColorAndroid="transparent"
              />
              <Text style={{ paddingTop: 20 }}>Tanggal Lahir</Text>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={{ width: "80%" }}
                  returnKeyType="next"
                  placeholder="Tanggal Lahir"
                  onChangeText={TextInputValue =>
                    this.setState({ TextInput_tanggal_lahir: TextInputValue })
                  }
                  underlineColorAndroid="transparent"
                  onSubmitEditing={() => {
                    this.tujuh.focus();
                  }}
                  value={this.state.TextInput_tanggal_lahir}
                />
                <Button title="Pilih" onPress={this.showDateTimePicker} />
              </View>
              <Text style={{ paddingTop: 20 }}>Usia Siswa</Text>
              <TextInput
                ref={input => {
                  this.lima = input;
                }}
                keyboardType="number-pad"
                returnKeyType="next"
                placeholder="Usia Siswa"
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_usia_siswa: TextInputValue })
                }
                underlineColorAndroid="transparent"
              />
              <Text style={{ paddingTop: 20 }}>Jenis Kelamin</Text>
              <RNPickerSelect
                onValueChange={TextInputValue =>
                  this.setState({ TextInput_jenis_kelamin: TextInputValue })
                }
                items={[
                  { label: "Laki - Laki", value: "Laki - Laki" },
                  { label: "Perempuan", value: "Perempuan" }
                ]}
              />
              <Text style={{ paddingTop: 20 }}>Agama</Text>
              <RNPickerSelect
                onValueChange={TextInputValue =>
                  this.setState({ TextInput_agama: TextInputValue })
                }
                items={[
                  { label: "Islam", value: "Islam" },
                  { label: "Kristen", value: "Kristen" }
                ]}
              />
              <Text style={{ paddingTop: 20 }}>Bank</Text>
              <RNPickerSelect
                onValueChange={TextInputValue =>
                  this.setState({ TextInput_bank: TextInputValue })
                }
                items={[
                  { label: "BNI Syariah", value: "BNI Syariah" },
                  { label: "BCA", value: "BCA" },
                  { label: "BRI", value: "BRI" },
                  { label: "Mandiri", value: "Mandiri" }
                ]}
              />
              <Text style={{ paddingTop: 20 }}>Nomor Rekening</Text>
              <TextInput
                keyboardType="number-pad"
                returnKeyType="next"
                placeholder="Nomor Rekening"
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_No_Rekning_Bank: TextInputValue })
                }
                underlineColorAndroid="transparent"
              />
              <Text style={{ paddingTop: 20 }}>Atas Nama</Text>
              <TextInput
                returnKeyType="next"
                placeholder="Atas Nama"
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_Rek_Atas_Nama: TextInputValue })
                }
                underlineColorAndroid="transparent"
              />
              <Text style={{ paddingTop: 20 }}>Layak PIP</Text>
              <TextInput
                returnKeyType="next"
                placeholder="Layak PIP"
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_Layak_PIP: TextInputValue })
                }
                underlineColorAndroid="transparent"
              />
              <Text style={{ paddingTop: 20 }}>Alasan Layak</Text>
              <TextInput
                returnKeyType="next"
                multiline={true}
                numberOfLines={4}
                placeholder="Alasan Layak"
                onChangeText={TextInputValue =>
                  this.setState({ TextInput_Alasan_Layak_PIP: TextInputValue })
                }
                underlineColorAndroid="transparent"
              />
              <TouchableOpacity
                onPress={this.Tambahdata}
                style={{
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
                  {" "}
                  Tambahkan Data
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> { this.RBSheet.close() }}
                style={{
                  backgroundColor: "#E41B1B",
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
                  {" "}
                  Tutup
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </RBSheet>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    position: "absolute",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30
  },
  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 70,
    height: 70
  }
});

const NavigationStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null
    })
  },

  Edit: {
    screen: Edit,
    navigationOptions: () => ({
      title: "Edit Data"
    })
  }
});

const Nav = createAppContainer(NavigationStack);
export default Nav;
