npm install graphql-yoga nodemon uuid
	"scripts": {
    "dev": "nodemon src/index.js",


GraphQL 
	ฝั่ง Client เป็นฝ่ายตัดสินใช้ให้การร้องขอข้อมูลเฉพาะที่เราต้องการ ต่างกับ RESTapi ที่ฝั่ง Server เป็นตัวกำหนดและทำการส่งข้อมูลทั้งหมดมา
	จึงทำให้ GraphQl ทำงานได้เร็วมาก

Why GraphQL is so popular
	-เร็ว
	-มีการสร้างอธิบาย Documentตัวอธิบาย APIว่ามีอะไรบ้าง endpointอะไรบ้าง มาให้เลย  เรียกว่า Self-Dolcumenting 
	-มี endpoint แค่ตัวเดียว

มี 3 ส่วนหลังๆที่เราต้องรู้เลย
	1.Queries ทำให้เราสามารถ request ข้อมูลที่เราต้องการได้
	2.Mutations ทำให้เราสามารถ Create,Update, or Delete
	3.Subscriptions: ทำให้เราสามารถติดตาม มีการแจ้งเตือนเมื่่อมีการเปลี่ยนแปลง

ชนิดของข้อมูลใน GraphQl (Data Type)
ID
Int
Foat: ทศนิยม
String
Boolean
Object:ต้องสร้างขึ้นมาเอง
