//ใช้ Javascript ในการควบคุม HTML
//โดยการอัญเชิญ Document คือ ตัวแปรที่เป็นตัวแทนของหน้าเพจ HTML
document.getElementById('content-2')
//getElementById(ใส่ ID ของ Tag HTML ที่เราต้องการไปครับ แล้วคำสั่งนี้ก็จะไปค้นหา tag ๆ นั้น)

//สร้างตัวแปร content2 เพื่อดึงค่า ID content-2 มาใช้ใน js
const content2 = document.getElementById('content-2');
let textHtml = '<b>test</b>';

// + สามารถเอาตัวแปรมาทำการบวกข้อความได้แต่ตั้งเป็น const เป็น let ก่อน
textHtml +='<i>safatest</i>';

//<div id="content-2">Content 2 เปลี่ยน เป้น test</div>

content2.innerHTML = textHtml;