
function saySomething1() {
    console.log('แบบปกติ');
}

let saySomething2 = () => {
    console.log('แบบ Arrow Function');
}

saySomething1();
saySomething2();

//ประโยชน์ขอ Arrow Function ถ้าใช้ Function นั้นแค่ครับเดียว
let sayButton1 = document.getElementById('say-button1');
let sayButton2 = document.getElementById('say-button2');
let sayButton3 = document.getElementById('say-button3');

function saySomething3() {
    console.log('แบบปกติ')
}
sayButton1.addEventListener('click', saySomething3);

//จาก 4 เหลือ 3 บรรทัดแล้ว
sayButton2.addEventListener('click', function() {
    console.log('แบบปกติ2');
});

//ยังทำให้สั้นได้อีก
sayButton3.addEventListener('click',() => {
    console.log('Arrow Function');
});



