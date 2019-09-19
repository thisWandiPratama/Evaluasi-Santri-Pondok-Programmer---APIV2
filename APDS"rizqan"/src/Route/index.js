import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tambahdata from '../Component/TambahData'
import Tampildata from '../Component/TampilData'
import Editdata from '../Component/TambahDanEdit'


const stack = createStackNavigator({

	Tampildata: {
        screen: Tampildata,
        navigationOptions:{
            header:null
        }
	},

	Tambahdata: {
		screen: Tambahdata,
		navigationOptions:{
			title:'Tambah Data'
		}
	},
	Editdata: {
		screen: Editdata,
		navigationOptions:{
			title:'Edit & Hapus Data'
		}
	}
	
})



const HomeStack = createAppContainer(stack);
export default HomeStack;