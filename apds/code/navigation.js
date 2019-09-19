import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tambahdata from '../code/Tambah'
import Tampildata from '../code/Tampil'
import Editdata from '../code/Edit'



const stack = createStackNavigator({

	Tampildata: {
		screen: Tampildata,
		navigationOptions:()=>({
            header:null
          })
	},

	Tambahdata: {
		screen: Tambahdata,
		navigationOptions:()=>({
           title:'kembali ke daftar'
          })
	},
	Editdata:{
		screen:Editdata,
		navigationOptions:()=>({
            title:'silahkan di edit atau di hapus'
          })
	}

	
	
})



const HomeStack = createAppContainer(stack);
export default HomeStack;