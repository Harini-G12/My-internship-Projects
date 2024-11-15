function generateQRCode(data){
    const canvas = document.getElementById('qrcode');
    const context=canvas.getContext('2d');

    context.clearRect(0,0,canvas.clientWidth,canvas.height);  //clear the canvas
    const qr=new QRCode(canvas,{text:data,width:256,height:256,});  //Generate the QR code
    qr.make(); //draw the QR code on the canvas
}

document.getElementById('generate').addEventListener('click',()=>{
    const data=document.getElementById('data').value;
    generateQRCode(data);
});