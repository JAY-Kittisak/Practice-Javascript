npm install @babel/cli @babel/core @babel/node @babel/preset-env
npx babel-node --presets @babel/preset-env Dynamic-import/index.js
npx babel-node --presets @babel/preset-env OptionalChaining/index.js



ฟีเจอร์ใหม่ใน ES2020/ES11
1. Dynamic  show เฉพาะ page "./home" ที่เลือกไม่ต้องโหลดหน้าอื่นมาทำให้เว็บช้า อ่านต่อ https://www.youtube.com/watch?v=d-J0utc476E
2.Optional Chaining (?.) ทำให้เราสามารถ access(เข้าถึง) ตัว Property ที่ซ่อนอยู่ในตัว Object ได้ง่ายขึ้น
    โดยที่ไม่ได้มาตรวจสอบค่า Property นั้นว่าเป็น ค่า Null หรือ Undefiled หรือป่าว ทำให้โค๊ดอ่านง่ายขึ้น