function formulir(){
  let username = document.getElementById("uname").value;
  let password = document.getElementById("passw").value;
  if (username == "anni21070" && password == 123456){
    location.replace("login1.html");
  }else {
    window.alert("belum berhasil!");
  }
}
function hapus(){
  document.getElementById("form").reset();
}