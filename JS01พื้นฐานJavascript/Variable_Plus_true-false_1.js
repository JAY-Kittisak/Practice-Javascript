// 1. ชนิดของตัวแปร ในภาษา Javascript
const typeVariableNum = 5;
const typeVariableDecimal = 5.5;
const typeVariableCharacter ='ตัวอักษร';
const typeVariableBooleanTrue = true;
const typeVariableBooleanFalse = false;

//การบวก (+) ตัวเลข
let plusNumberA = 10;
let plusNumberB = 5;
console.log(plusNumberA+plusNumberB); //"15"

//การบวก (+) ข้อความ
let plusCharacterA = '10';
let plusCharacterB = '5';
console.log(plusCharacterA+plusCharacterB); // "105" เอาข้อความมาต่อกันเป้นรถไฟ

//การบวก (+) Number + Character
let plusNumberAB = 10;
let plusCharacterBC = '5';
console.log(plusNumberAB+plusCharacterBC); // "105" เหมือนเดิม

//คำสั่งในการแปรงข้อมูล Number
let plusNumberAC = 10;
let transform = Number('5');
let transformS = String(1000);
console.log(plusNumberAC+transform+transformS); // "151000" เหมือนเดิม



// 2. ชนิดของเครื่องหมาย Operators
// level 1
a1=3+2;    //=5
a2=3-2;    //=1
a3=3*2;    //=6
a4=3/2;    //=1.5
a5=3**2;    //=9 ยกกำลัง
a6=3%2;    //=1 หาเศษ 

// level 2
x = 5;
x = x+1;  //6
x++; //6 ตัดให้สั่นลง

x = x+5;
x += 5; 
x -= 5;
x *= 5;



// 3. เครื่องหมายเปรียบเทียบ true false
// level 1
let x =7;
let y = 5;

let a1= x > y;  //true 7 มากกว่า 5
let a2= x >= y; //true 7 มากกว่าหรือเท่ากับ 5

let a3= x < y;  //false 7 น้อยกว่า 5
let a4= x <= y; //false 7 น้อยกว่าหรือเท่ากับ 5

let a5= x === y;  //false 7 เท่ากับ 5
let a6= x !== y;  //true 7 ไม่เท่ากับ 5 ใช่หรือป่าว

// level 2
let t = true;
let f = false


let b1 = t && f; //false >>> t และ f 
let b2 = t || f; //true >>> t or f   ถ้าดัวไหนเป็น true คำตอบก็คือ true
let b3 = !t;     //false >>>  Not เปลี่ยนขั่วจาก true เป็น false  เปลี่ยนจาก false จาก true






