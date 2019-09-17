<?php
 
include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
 $obj = json_decode($json,true);

 $S_ID                      = $obj['id'];
 $S_Nama_Lengkap            = $obj['nama_lengkap'];
 $S_NISN                    = $obj['NISN'];
 $S_NIS                     = $obj['NIS'];
 $S_alamat_siswa            = $obj['alamat_siswa'];
 $S_tempat_lahir            = $obj['tempat_lahir'];
 $S_tanggal_lahir           = $obj['tanggal_lahir'];
 $S_usia_siswa              = $obj['usia_siswa'];
 $S_jenis_kelamin           = $obj['jenis_kelamin'];
 $S_agama                   = $obj['agama'];
 $S_bank                    = $obj['bank'];
 $S_No_Rekning_Bank	        = $obj['No_Rekning_Bank'];
 $S_Rek_Atas_Nama	        = $obj['Rek_Atas_Nama'];
 $S_Layak_PIP	            = $obj['Layak_PIP'];
 $S_Alasan_Layak_PIP	    = $obj['Alasan_Layak_PIP'];
 

 $Sql_Query = "UPDATE l_data_siswa  SET 
                nama_lengkap        = '$S_Nama_Lengkap', 
                NISN                = '$S_NISN', 
                NIS                 = '$S_NIS', 
                alamat_siswa        = '$S_alamat_siswa', 
                tempat_lahir        = '$S_tempat_lahir', 
                tanggal_lahir       = '$S_tempat_lahir', 
                usia_siswa          = '$S_usia_siswa', 
                jenis_kelamin       = '$S_jenis_kelamin', 
                agama               = '$S_agama', 
                bank                = '$S_bank', 
                No_Rekning_Bank      = '$S_No_Rekning_Bank', 
                Rek_Atas_Nama       = '$S_Rek_Atas_Nama',
                Layak_PIP           = '$S_Layak_PIP',
                Alasan_Layak_PIP    = '$S_Alasan_Layak_PIP'  WHERE id = $S_ID";
 
 
 if(mysqli_query($con,$Sql_Query)){
    $MSG = 'Data Diedit' ;
    $json = json_encode($MSG);
    echo $json ;
 }
 else{
    echo 'Ulangi Lagi';
 }
    mysqli_close($con);
?>



