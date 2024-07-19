let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrUrl = document.getElementById("qrUrl");

function generateQR(){
    if(qrUrl.value.length >0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrUrl.value;
    imgBox.classList.add('show-img');
    }else{
        qrUrl.classList.add('error');
        setTimeout(()=>{
            qrUrl.classList.remove('error');
        },1000);
    }

}