function kirimData() {
   var nama = document.getElementById("nama").value;
   var tanggal = document.getElementById("tanggal").value;
   var driver = document.getElementById("driver").value;
   var identitas = document.querySelector('input[name="identitas"]:checked').value;
   var nopol = document.getElementById("nopol").value;
   var alamat = document.getElementById("alamat").value;
 
   var hasil = "Data telah dikirim:\n\n" +
     "Nama: " + nama + "\n" +
     "Tanggal Lahir: " + tanggal + "\n" +
     "Driver: " + driver + "\n" +
     "Identitas: " + identitas + "\n" +
     "Nomor Polisi Kendaraan: " + nopol + "\n" +
     "Alamat: " + alamat;
 
   alert(hasil);
 }
 