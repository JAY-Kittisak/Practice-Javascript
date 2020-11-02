//ใช้ Javascript ในการควบคุม HTML
//โดยการอัญเชิญ Document คือ ตัวแปรที่เป็นตัวแทนของหน้าเพจ HTML
document.getElementById('content-2')
//getElementById(ใส่ ID ของ Tag HTML ที่เราต้องการไปครับ แล้วคำสั่งนี้ก็จะไปค้นหา tag ๆ นั้น)

//สร้างตัวแปร content2 เพื่อดึงค่า ID content-2 มาใช้ใน js
const content2 = document.getElementById('content-2');
const textHtml = '<b>test</b>';
co