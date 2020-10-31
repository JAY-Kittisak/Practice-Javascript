//ชนิดของตัวแปร ในภาษา Javascript
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



//ชนิดของเครื่องหมาย Operators
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

//เครื่องหมายเปรียบเทียบ