// Javascript สามารถจับเหตุการที่เกิดขึ้นบนเว็บเพจได้
let discountButton = document.getElementById('discount-button');
let message = document.getElementById('message');

function showMessage() {
    message.innerHTML = 'หมดเวลาแล้ว';
}
//discountButton.addEventListener(เหตุการณ์,คำสั่ง);
discountButton.addEventListener('click', showMessage);